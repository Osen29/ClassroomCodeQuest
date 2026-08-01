
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
    },
    {
      "levelNumber": 5,
      "title": "Principal's Greeting",
      "zone": "The Hallway",
      "description": "Deliver an attendance sheet to the front office counter. Remember to refill your water bottle on your way inside using student.fillWater();.",
      "gridSize": 6,
      "startX": 0,
      "targetX": 5,
      "mainGoal": "Deliver sheet to the office at Tile 5",
      "subGoals": [
        {
          "id": "refill_bottle",
          "title": "Refill Water Bottle",
          "triggerX": 3,
          "requiredAction": "FILL_WATER"
        }
      ],
      "hazards": []
    },
    {
      "levelNumber": 6,
      "title": "Tray Stack Counter",
      "zone": "The Cafeteria",
      "description": "Welcome to the Cafeteria! Move down the lunch counter. Make sure to pick up a clean fork using student.pickUpFork(); and napkins using student.pickUpNapkins(); before reaching your tray.",
      "gridSize": 8,
      "startX": 0,
      "targetX": 7,
      "mainGoal": "Collect lunch tray at Tile 7",
      "subGoals": [
        {
          "id": "grab_fork",
          "title": "Grab a Clean Fork",
          "triggerX": 2,
          "requiredAction": "PICK_UP_FORK"
        },
        {
          "id": "grab_napkins",
          "title": "Grab Napkins",
          "triggerX": 4,
          "requiredAction": "PICK_UP_NAPKINS"
        }
      ],
      "hazards": []
    },
    {
      "levelNumber": 7,
      "title": "The Pizza Line",
      "zone": "The Cafeteria",
      "description": "The lunch line is moving! Step up to the pizza station. Snag a chocolate milk using student.pickUpMilk(); and a healthy apple using student.pickUpApple(); from the coolers as you pass them.",
      "gridSize": 8,
      "startX": 0,
      "targetX": 7,
      "mainGoal": "Reach the main Pizza Counter at Tile 7",
      "subGoals": [
        {
          "id": "grab_milk",
          "title": "Grab Chocolate Milk",
          "triggerX": 2,
          "requiredAction": "PICK_UP_MILK"
        },
        {
          "id": "grab_apple",
          "title": "Grab a Healthy Apple",
          "triggerX": 5,
          "requiredAction": "PICK_UP_APPLE"
        }
      ],
      "hazards": []
    },
    {
      "levelNumber": 8,
      "title": "Condiment Pump Chaos",
      "zone": "The Cafeteria",
      "description": "Time to dress your lunch! Head to your table, but stop at the condiment station to pump ketchup using student.pumpKetchup();. Watch out for a slippery messy floor puddle!",
      "gridSize": 8,
      "startX": 0,
      "targetX": 7,
      "mainGoal": "Sit at your lunch table at Tile 7",
      "subGoals": [
        {
          "id": "pump_ketchup",
          "title": "Pump Ketchup",
          "triggerX": 3,
          "requiredAction": "PUMP_KETCHUP"
        }
      ],
      "hazards": [
        { "type": "puddle", "x": 5 }
      ]
    },
    {
      "levelNumber": 9,
      "title": "Table Cleanup Duty",
      "zone": "The Cafeteria",
      "description": "Lunch is over! Help clean up. Walk to the recycling area, wiping a messy table using student.wipeTable(); and tossing an apple core into the bin using student.tossTrash();.",
      "gridSize": 8,
      "startX": 0,
      "targetX": 7,
      "mainGoal": "Reach the exit doors at Tile 7",
      "subGoals": [
        {
          "id": "wipe_table",
          "title": "Wipe Messy Table",
          "triggerX": 2,
          "requiredAction": "WIPE_TABLE"
        },
        {
          "id": "toss_core",
          "title": "Toss Apple Core",
          "triggerX": 5,
          "requiredAction": "TOSS_TRASH"
        }
      ],
      "hazards": []
    },
    {
      "levelNumber": 10,
      "title": "Recycle Bin Sorting",
      "zone": "The Cafeteria",
      "description": "Last step before science class! Navigate to the main bin array and pick up two separate stray plastic bottles using student.pickUpBottle();.",
      "gridSize": 8,
      "startX": 0,
      "targetX": 7,
      "mainGoal": "Report to the Science wing corridor at Tile 7",
      "subGoals": [
        {
          "id": "bottle_one",
          "title": "Pick Up Bottle 1",
          "triggerX": 2,
          "requiredAction": "PICK_UP_BOTTLE"
        },
        {
          "id": "bottle_two",
          "title": "Pick Up Bottle 2",
          "triggerX": 4,
          "requiredAction": "PICK_UP_BOTTLE"
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
