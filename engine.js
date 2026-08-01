// EMBEDDED 2D LEVELS BLUEPRINT DATA
const localLevelData = {
  "levels": [
    {
      "levelNumber": 1,
      "title": "Homeroom Dash",
      "zone": "The Hallway",
      "description": "Welcome to class! Move around the classroom desks to reach your seat. Write student.moveRight(); student.moveDown(); etc.",
      "gridWidth": 6,
      "gridHeight": 4,
      "startX": 0,
      "startY": 0,
      "targetX": 5,
      "targetY": 3,
      "mainGoal": "Reach your desk at bottom right (5, 3)",
      "subGoals": [],
      "hazards": [
        { "type": "desk", "x": 2, "y": 1 },
        { "type": "desk", "x": 3, "y": 1 },
        { "type": "desk", "x": 2, "y": 2 },
        { "type": "desk", "x": 3, "y": 2 }
      ]
    },
    {
      "levelNumber": 2,
      "title": "The Forgotten Locker",
      "zone": "The Hallway",
      "description": "You overshot your locker! Navigate up and left to your locker (0, 0) to grab your book, then head to the classroom door.",
      "gridWidth": 5,
      "gridHeight": 5,
      "startX": 4,
      "startY": 4,
      "targetX": 4,
      "targetY": 0,
      "mainGoal": "Reach the classroom door at (4, 0)",
      "subGoals": [
        {
          "id": "grab_textbook",
          "title": "Grab Math Textbook at (0,0)",
          "triggerX": 0,
          "triggerY": 0,
          "requiredAction": "OPEN_LOCKER"
        }
      ],
      "hazards": []
    },
    {
      "levelNumber": 3,
      "title": "Hallway Hazards",
      "zone": "The Hallway",
      "description": "Navigate around the active cleaning zones and slippery puddles to reach the end of the corridor!",
      "gridWidth": 7,
      "gridHeight": 4,
      "startX": 0,
      "startY": 1,
      "targetX": 6,
      "targetY": 2,
      "mainGoal": "Reach the end exit at (6, 2)",
      "subGoals": [],
      "hazards": [
        { "type": "puddle", "x": 3, "y": 1 },
        { "type": "puddle", "x": 3, "y": 2 },
        { "type": "puddle", "x": 2, "y": 2 }
      ]
    },
    {
      "levelNumber": 4,
      "title": "Lost & Found Log",
      "zone": "The Hallway",
      "description": "Head down into the office lounge. Walk up to high-five the mascot at (2, 0), then head down to the Lost & Found Bin.",
      "gridWidth": 6,
      "gridHeight": 5,
      "startX": 0,
      "startY": 2,
      "targetX": 5,
      "targetY": 4,
      "mainGoal": "Reach the Lost & Found Bin at (5, 4)",
      "subGoals": [
        {
          "id": "high_five",
          "title": "High-five the Mascot at (2,0)",
          "triggerX": 2,
          "triggerY": 0,
          "requiredAction": "HIGH_FIVE"
        }
      ],
      "hazards": []
    }
  ]
};

// Game Architecture 2D State Configuration
let allLevels = [];
let currentLevelIndex = 0; 
let studentX = 0;
let studentY = 0;
let actionQueue = [];
let isAnimating = false;
let completedSubGoals = {};

const TILE_SIZE = 70; // Slightly smaller to fit a 2D grid beautifully on modern screens
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Initializer Loading Hooks
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
    studentX = level.startX;
    studentY = level.startY;
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
    document.getElementById("code-box").value = `// ${level.description}\nstudent.moveRight();\nstudent.moveDown();\n`;

    updateLevelDropdownUI();
    renderCanvasMap();
}

// 2D Visual Rendering Module
function renderCanvasMap() {
    const level = allLevels[currentLevelIndex];
    if (!level) return;

    // Expand canvas width and height dynamically for 2D room maps
    canvas.width = level.gridWidth * TILE_SIZE;
    canvas.height = level.gridHeight * TILE_SIZE;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw full 2D Checkerboard Grid layout floor matrix
    for (let x = 0; x < level.gridWidth; x++) {
        for (let y = 0; y < level.gridHeight; y++) {
            ctx.fillStyle = ((x + y) % 2 === 0) ? "#29292e" : "#323238";
            ctx.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
            ctx.strokeStyle = "#121214";
            ctx.strokeRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
        }
    }

    // Draw Hazards / Obstacles
    if (level.hazards) {
        level.hazards.forEach(hz => {
            ctx.fillStyle = hz.type === "desk" ? "#8b5a2b" : "#0077b6"; // Brown desks, blue puddles
            ctx.fillRect(hz.x * TILE_SIZE + 10, hz.y * TILE_SIZE + 10, TILE_SIZE - 20, TILE_SIZE - 20);
            ctx.fillStyle = "#fff";
            ctx.font = "10px sans-serif";
            ctx.fillText(hz.type === "desk" ? "🪑 Desk" : "💧 Water", hz.x * TILE_SIZE + 15, hz.y * TILE_SIZE + TILE_SIZE / 2 + 4);
        });
    }

    // Draw Sub-Goals
    if (level.subGoals) {
        level.subGoals.forEach(sg => {
            const isDone = completedSubGoals[sg.id];
            ctx.fillStyle = isDone ? "#55555e" : "#e9c46a";
            ctx.beginPath();
            ctx.arc(sg.triggerX * TILE_SIZE + TILE_SIZE/2, sg.triggerY * TILE_SIZE + TILE_SIZE/2, 14, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "#fff";
            ctx.font = "10px sans-serif";
            ctx.fillText("⭐ Task", sg.triggerX * TILE_SIZE + 18, sg.triggerY * TILE_SIZE + TILE_SIZE - 8);
        });
    }

    // Draw Exit Goal Destination
    ctx.fillStyle = "#e63946";
    ctx.fillRect(level.targetX * TILE_SIZE + 15, level.targetY * TILE_SIZE + 15, TILE_SIZE - 30, TILE_SIZE - 30);
    ctx.fillStyle = "#fff";
    ctx.font = "10px sans-serif";
    ctx.fillText("🚪 Goal", level.targetX * TILE_SIZE + 20, level.targetY * TILE_SIZE + TILE_SIZE / 2 + 4);

    // Draw Student Square
    ctx.fillStyle = "#00b4d8";
    ctx.fillRect(studentX * TILE_SIZE + 18, studentY * TILE_SIZE + 15, TILE_SIZE - 36, TILE_SIZE - 30);
}

// Code Evaluator Wrapper Core
function runStudentCode() {
    if (isAnimating) return;

    const level = allLevels[currentLevelIndex];
    studentX = level.startX;
    studentY = level.startY;
    actionQueue = [];
    completedSubGoals = {};
    loadLevel(currentLevelIndex); 

    const studentCodeText = document.getElementById("code-box").value;

    // FOUR-DIRECTION DIRECTIONAL UTILITIES
    const sandboxAPI = {
        moveRight: () => actionQueue.push({ type: 'MOVE', x: 1, y: 0 }),
        moveLeft: () => actionQueue.push({ type: 'MOVE', x: -1, y: 0 }),
        moveDown: () => actionQueue.push({ type: 'MOVE', x: 0, y: 1 }),
        moveUp: () => actionQueue.push({ type: 'MOVE', x: 0, y: -1 }),
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

    if (currentCommand.type === 'MOVE') {
        studentX += currentCommand.x;
        studentY += currentCommand.y;
        
        // Grid Boundaries Safeguards
        if (studentX < 0) studentX = 0;
        if (studentX >= level.gridWidth) studentX = level.gridWidth - 1;
        if (studentY < 0) studentY = 0;
        if (studentY >= level.gridHeight) studentY = level.gridHeight - 1;

        // Obstacle Collision Check rules
        if (level.hazards) {
            const hitHazard = level.hazards.find(hz => hz.x === studentX && hz.y === studentY);
            if (hitHazard) {
                renderCanvasMap();
                alert(`Oops! You ran right into a ${hitHazard.type}! Re-route your steps.`);
                isAnimating = false;
                return;
            }
        }
    }

    if (currentCommand.type === 'ACTION') {
        if (level.subGoals) {
            level.subGoals.forEach(sg => {
                if (studentX === sg.triggerX && studentY === sg.triggerY && currentCommand.value === sg.requiredAction) {
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
    setTimeout(tickAnimationLoop, 500); 
}
function evaluateWinCondition() {
    const level = allLevels[currentLevelIndex];
    
    if (studentX === level.targetX && studentY === level.targetY) {
        let totalSubGoals = level.subGoals ? level.subGoals.length : 0;
        let earnedSubGoals = Object.keys(completedSubGoals).filter(k => completedSubGoals[k]).length;

        if (totalSubGoals === earnedSubGoals) {
            alert("Level Completed! Outstanding 2D Path Routing! 🎉🏆");
            advanceNextLevel();
        } else {
            alert("Main door reached, but you forgot your task item checks.");
        }
    } else {
        alert("Code finished, but you are not at the goal coordinates.");
    }
} // <-- This brace closes evaluateWinCondition()

function updateLevelDropdownUI() {
    const dropdown = document.getElementById("level-select");
    if (!dropdown || !allLevels || allLevels.length === 0) return;
    dropdown.innerHTML = "";
    let highestBeaten = parseInt(localStorage.getItem("highestLevelBeaten") || "0");
    allLevels.forEach((level, idx) => {
        const option = document.createElement("option");
        option.value = idx;
        option.text = `Lvl ${level.levelNumber}: ${level.title}`;
        if (idx === currentLevelIndex) option.selected = true;
        if (idx > 0 && idx > highestBeaten) {
            option.disabled = true;
            option.text += " 🔒";
        }
        dropdown.appendChild(option);
    });
}

function advanceNextLevel() {
    let highestBeaten = parseInt(localStorage.getItem("highestLevelBeaten") || "0");
    if (currentLevelIndex > highestBeaten) {
        localStorage.setItem("highestLevelBeaten", currentLevelIndex.toString());
    }
    if (currentLevelIndex < allLevels.length - 1) {
        currentLevelIndex++;
        loadLevel(currentLevelIndex);
    } else {
        alert("Phenomenal work! You completed the entire Classroom Code Quest grid system!");
    }
}

