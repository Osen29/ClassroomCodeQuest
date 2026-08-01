
// EMBEDDED LEVELS BLUEPRINT DATA
const localLevelData = {
  "levels": [
    {
      "levelNumber": 1,
      "title": "Homeroom Dash",
      "zone": "The Hallway",
      "description": "Welcome to class! Write student.moveRight(); down in the box to reach your homeroom desk before the morning bell sounds off.",
      "gridSize": 5,
      "startX": 0,
      "targetX": 4,
      "mainGoal": "Reach your desk at Tile 4",
      "subGoals": [],
      "hazards": []
    },
    {
      "levelNumber": 2,
      "title": "The Forgotten Locker",
      "zone": "The Hallway",
      "description": "Oh no, you overshot your locker! Use student.moveLeft(); to back up, type student.openLocker(); to grab your book, and then head down to the classroom.",
      "gridSize": 5,
      "startX": 2,
      "targetX": 4,
      "mainGoal": "Reach the classroom at Tile 4",
      "subGoals": [
        {
          "id": "grab_textbook",
          "title": "Grab Math Textbook",
          "triggerX": 0,
          "requiredAction": "OPEN_LOCKER"
        }
      ],
      "hazards": []
    },
    {
      "levelNumber": 3,
      "title": "Hallway Hazards",
      "zone": "The Hallway",
      "description": "Watch out! A leaky pipe left a wet floor puddle. Use student.jumpRight(); to clear it safely.",
      "gridSize": 6,
      "startX": 0,
      "targetX": 5,
      "mainGoal": "Reach the end of the hallway",
      "subGoals": [],
      "hazards": [
        { "type": "puddle", "x": 2 }
      ]
    },
    {
      "levelNumber": 4,
      "title": "Lost & Found Log",
      "zone": "The Hallway",
      "description": "Head down to the main office to log a missing jacket. Make sure to high-five the mascot along the way using student.highFive();!",
      "gridSize": 6,
      "startX": 0,
      "targetX": 5,
      "mainGoal": "Reach the Lost & Found Bin at Tile 5",
      "subGoals": [
        {
          "id": "high_five",
          "title": "High-five the Mascot",
          "triggerX": 2,
          "requiredAction": "HIGH_FIVE"
        }
      ],
      "hazards": []
    }
  ]
};

// Game Architecture State Configuration
let allLevels = [];
let currentLevelIndex = 0; 
let studentPos = 0;
let actionQueue = [];
let isAnimating = false;
let completedSubGoals = {};

const TILE_SIZE = 100;
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Initializer: Pull directly from the local embedded variable block
window.addEventListener("DOMContentLoaded", () => {
    if (localLevelData && localLevelData.levels) {
        allLevels = localLevelData.levels;
        loadLevel(currentLevelIndex);
    } else {
        document.getElementById("level-desc").innerText = "Error loading level blueprint data.";
    }
});

function loadLevel(index) {
    if (!allLevels || allLevels.length === 0) return;
    
    const level = allLevels[index];
    studentPos = level.startX;
    actionQueue = [];
    isAnimating = false;
    completedSubGoals = {};

    document.getElementById("level-title").innerText = `Level ${level.levelNumber}: ${level.title}`;
    
    let subGoalHTML = `<strong>Goal:</strong> ${level.mainGoal}<br><br>`;
    if (level.subGoals && level.subGoals.length > 0) {
        subGoalHTML += `<strong>Tasks:</strong><br>`;
        level.subGoals.forEach(sg => {
            subGoalHTML += `
                <div style="display:flex; align-items:center; gap:8px; margin: 5px 0; font-size:14px; color:#aaa;">
                    <span id="chk-${sg.id}" style="width:14px; height:14px; border:2px solid #555; border-radius:3px; display:inline-block; background:#121214;"></span>
                    <span>${sg.title}</span>
                </div>`;
        });
    }
    document.getElementById("level-desc").innerHTML = subGoalHTML;
    document.getElementById("code-box").value = `// ${level.description}\nstudent.moveRight();\n`;

    renderCanvasMap();
}

function renderCanvasMap() {
    const level = allLevels[currentLevelIndex];
    if (!level) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = level.gridSize * TILE_SIZE;

    for (let i = 0; i < level.gridSize; i++) {
        ctx.fillStyle = (i % 2 === 0) ? "#29292e" : "#323238";
        ctx.fillRect(i * TILE_SIZE, 0, TILE_SIZE, canvas.height);
        ctx.strokeStyle = "#121214";
        ctx.strokeRect(i * TILE_SIZE, 0, TILE_SIZE, canvas.height);
    }

    if (level.hazards) {
        level.hazards.forEach(hz => {
            ctx.fillStyle = "#0077b6";
            ctx.beginPath();
            ctx.arc(hz.x * TILE_SIZE + 50, 140, 20, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "#fff";
            ctx.font = "12px sans-serif";
            ctx.fillText("💧 Puddle", hz.x * TILE_SIZE + 25, 145);
        });
    }

    if (level.subGoals) {
        level.subGoals.forEach(sg => {
            const isDone = completedSubGoals[sg.id];
            ctx.fillStyle = isDone ? "#55555e" : "#e9c46a";
            ctx.beginPath();
            ctx.arc(sg.triggerX * TILE_SIZE + 50, 80, 18, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "#fff";
            ctx.font = "11px sans-serif";
            ctx.fillText("⭐ Task", sg.triggerX * TILE_SIZE + 32, 115);
        });
    }

    ctx.fillStyle = "#e63946";
    ctx.fillRect(level.targetX * TILE_SIZE + 30, 40, 40, 60);
    ctx.fillStyle = "#fff";
    ctx.font = "12px sans-serif";
    ctx.fillText("🚪 Goal", level.targetX * TILE_SIZE + 32, 125);

    ctx.fillStyle = "#00b4d8";
    ctx.fillRect(studentPos * TILE_SIZE + 35, 50, 30, 70);
}

function runStudentCode() {
    if (isAnimating) return;

    const level = allLevels[currentLevelIndex];
    studentPos = level.startX; 
    actionQueue = [];
    completedSubGoals = {};
    loadLevel(currentLevelIndex); 

    const studentCodeText = document.getElementById("code-box").value;

    const sandboxAPI = {
        moveRight: () => actionQueue.push({ type: 'WALK', dist: 1 }),
        moveLeft: () => actionQueue.push({ type: 'WALK', dist: -1 }),
        jumpRight: () => actionQueue.push({ type: 'JUMP', dist: 2 }),
        openLocker: () => actionQueue.push({ type: 'ACTION', value: 'OPEN_LOCKER' }),
        highFive: () => actionQueue.push({ type: 'ACTION', value: 'HIGH_FIVE' })
    };

    try {
        const executeSandbox = new Function('student', studentCodeText);
        executeSandbox(sandboxAPI);

        if (actionQueue.length > 0) {
            isAnimating = true;
            tickAnimationLoop();
        }
    } catch (error) {
        alert("Syntax Error: " + error.message);
    }
}

function tickAnimationLoop() {
    const level = allLevels[currentLevelIndex];
    if (actionQueue.length === 0) {
        isAnimating = false;
        evaluateWinCondition();
        return;
    }

    const currentCommand = actionQueue.shift();

    if (currentCommand.type === 'WALK' || currentCommand.type === 'JUMP') {
        studentPos += currentCommand.dist;
        
        if (studentPos < 0) studentPos = 0;
        if (studentPos >= level.gridSize) studentPos = level.gridSize - 1;

        if (level.hazards) {
            const hitHazard = level.hazards.find(hz => hz.x === studentPos);
            if (hitHazard && currentCommand.type !== 'JUMP') {
                renderCanvasMap();
                alert("Oops! You stepped right into a puddle!");
                isAnimating = false;
                return;
            }
        }
    }

    if (currentCommand.type === 'ACTION') {
        if (level.subGoals) {
            level.subGoals.forEach(sg => {
                if (studentPos === sg.triggerX && currentCommand.value === sg.requiredAction) {
                    completedSubGoals[sg.id] = true;
                    const indicator = document.getElementById(`chk-${sg.id}`);
                    if (indicator) {
                        indicator.style.background = "#2a9d8f";
                        indicator.style.borderColor = "#2a9d8f";
                    }
                }
            });
        }
    }

    renderCanvasMap();
    setTimeout(tickAnimationLoop, 600); 
}

function evaluateWinCondition() {
    const level = allLevels[currentLevelIndex];
    
    if (studentPos === level.targetX) {
        let totalSubGoals = level.subGoals ? level.subGoals.length : 0;
        let earnedSubGoals = Object.keys(completedSubGoals).filter(k => completedSubGoals[k]).length;

        if (totalSubGoals === earnedSubGoals) {
            alert("Level Completed! Outstanding 3-Star Execution! 🎉🏆");
            advanceNextLevel();
        } else {
            alert("Main target reached, but you missed a sub-goal target.");
        }
    } else {
        alert("Finished running, but you didn't reach the door.");
    }
}

function advanceNextLevel() {
    if (currentLevelIndex < allLevels.length - 1) {
        currentLevelIndex++;
        loadLevel(currentLevelIndex);
    } else {
        alert("Phenomenal work! You completed all matching school level structures!");
    }
}
