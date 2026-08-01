// EMBEDDED 2D LEVELS BLUEPRINT DATA (LEVELS 1 - 10)
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
    },
    {
      "levelNumber": 5,
      "title": "Principal's Greeting",
      "zone": "The Hallway",
      "description": "Deliver an attendance sheet to the front office. Stop by the water fountain at (3, 1) and use student.fillWater(); before leaving.",
      "gridWidth": 6,
      "gridHeight": 4,
      "startX": 0,
      "startY": 3,
      "targetX": 5,
      "targetY": 0,
      "mainGoal": "Deliver sheet to the office at (5, 0)",
      "subGoals": [
        {
          "id": "refill_bottle",
          "title": "Refill Water Bottle at (3,1)",
          "triggerX": 3,
          "triggerY": 1,
          "requiredAction": "FILL_WATER"
        }
      ],
      "hazards": [
        { "type": "desk", "x": 2, "y": 2 },
        { "type": "desk", "x": 4, "y": 2 }
      ]
    },
    {
      "levelNumber": 6,
      "title": "Tray Stack Counter",
      "zone": "The Cafeteria",
      "description": "Welcome to the Cafeteria! Navigate the counters. Grab a fork at (2, 1) using student.pickUpFork(); and napkins at (4, 3) using student.pickUpNapkins(); before reaching your tray.",
      "gridWidth": 7,
      "gridHeight": 5,
      "startX": 0,
      "startY": 2,
      "targetX": 6,
      "targetY": 2,
      "mainGoal": "Collect lunch tray at (6, 2)",
      "subGoals": [
        {
          "id": "grab_fork",
          "title": "Grab a Clean Fork at (2,1)",
          "triggerX": 2,
          "triggerY": 1,
          "requiredAction": "PICK_UP_FORK"
        },
        {
          "id": "grab_napkins",
          "title": "Grab Napkins at (4,3)",
          "triggerX": 4,
          "triggerY": 3,
          "requiredAction": "PICK_UP_NAPKINS"
        }
      ],
      "hazards": [
        { "type": "counter", "x": 3, "y": 2 }
      ]
    },
    {
      "levelNumber": 7,
      "title": "The Pizza Line",
      "zone": "The Cafeteria",
      "description": "Step up to the pizza station. Pick up chocolate milk at (2, 0) using student.pickUpMilk(); and a healthy apple at (5, 4) using student.pickUpApple();.",
      "gridWidth": 8,
      "gridHeight": 5,
      "startX": 0,
      "startY": 2,
      "targetX": 7,
      "targetY": 2,
      "mainGoal": "Reach the main Pizza Counter at (7, 2)",
      "subGoals": [
        {
          "id": "grab_milk",
          "title": "Grab Chocolate Milk at (2,0)",
          "triggerX": 2,
          "triggerY": 0,
          "requiredAction": "PICK_UP_MILK"
        },
        {
          "id": "grab_apple",
          "title": "Grab a Healthy Apple at (5,4)",
          "triggerX": 5,
          "triggerY": 4,
          "requiredAction": "PICK_UP_APPLE"
        }
      ],
      "hazards": [
        { "type": "table", "x": 3, "y": 2 },
        { "type": "table", "x": 4, "y": 2 }
      ]
    },
    {
      "levelNumber": 8,
      "title": "Condiment Pump Chaos",
      "zone": "The Cafeteria",
      "description": "Head to your lunch table! Stop at the condiment station at (3, 1) to pump ketchup using student.pumpKetchup();. Avoid the giant milk spill!",
      "gridWidth": 7,
      "gridHeight": 6,
      "startX": 0,
      "startY": 0,
      "targetX": 6,
      "targetY": 5,
      "mainGoal": "Sit at your lunch table at (6, 5)",
      "subGoals": [
        {
          "id": "pump_ketchup",
          "title": "Pump Ketchup at (3,1)",
          "triggerX": 3,
          "triggerY": 1,
          "requiredAction": "PUMP_KETCHUP"
        }
      ],
      "hazards": [
        { "type": "spill", "x": 3, "y": 3 },
        { "type": "spill", "x": 4, "y": 3 },
        { "type": "table", "x": 1, "y": 4 }
      ]
    },
    {
      "levelNumber": 9,
      "title": "Table Cleanup Duty",
      "zone": "The Cafeteria",
      "description": "Lunch is over! Walk to the exit, wiping a dirty table at (2, 3) using student.wipeTable(); and throwing your trash away at (5, 1) using student.tossTrash();.",
      "gridWidth": 8,
      "gridHeight": 5,
      "startX": 0,
      "startY": 4,
      "targetX": 7,
      "targetY": 0,
      "mainGoal": "Reach the cafeteria exit doors at (7, 0)",
      "subGoals": [
        {
          "id": "wipe_table",
          "title": "Wipe Messy Table at (2,3)",
          "triggerX": 2,
          "triggerY": 3,
          "requiredAction": "WIPE_TABLE"
        },
        {
          "id": "toss_core",
          "title": "Toss Trash at (5,1)",
          "triggerX": 5,
          "triggerY": 1,
          "requiredAction": "TOSS_TRASH"
        }
      ],
      "hazards": [
        { "type": "table", "x": 3, "y": 2 },
        { "type": "table", "x": 4, "y": 2 }
      ]
    },
    {
      "levelNumber": 10,
      "title": "Recycle Bin Sorting",
      "zone": "The Cafeteria",
      "description": "Last step before science! Navigate around the trash cans to pick up two recycled bottles at (2, 1) and (5, 3) using student.pickUpBottle();.",
      "gridWidth": 8,
      "gridHeight": 5,
      "startX": 0,
      "startY": 2,
      "targetX": 7,
      "targetY": 2,
      "mainGoal": "Report to the Science wing corridor at (7, 2)",
      "subGoals": [
        {
          "id": "bottle_one",
          "title": "Pick Up Bottle 1 at (2,1)",
          "triggerX": 2,
          "triggerY": 1,
          "requiredAction": "PICK_UP_BOTTLE"
        },
        {
          "id": "bottle_two",
          "title": "Pick Up Bottle 2 at (5,3)",
          "triggerX": 5,
          "triggerY": 3,
          "requiredAction": "PICK_UP_BOTTLE"
        }
      ],
      "hazards": [
        { "type": "bin", "x": 3, "y": 1 },
        { "type": "bin", "x": 4, "y": 3 }
      ]
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

const TILE_SIZE = 70; 
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Initializer Loading Hooks
window.addEventListener("DOMContentLoaded", () => {
    if (localLevelData && localLevelData.levels) {
        allLevels = localLevelData.levels;
        loadLevel(currentLevelIndex);
        
        // Sets starter text only once when the website boots up
        const firstLevel = allLevels[currentLevelIndex];
        document.getElementById("code-box").value = `// ${firstLevel.description}\nstudent.moveRight();\nstudent.moveDown();\n`;
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

    updateLevelDropdownUI();
    renderCanvasMap();
} // <-- This brace closes the loadLevel function
// 2D Visual Rendering Module
function renderCanvasMap() {
    const level = allLevels[currentLevelIndex];
    if (!level) return;

    canvas.width = level.gridWidth * TILE_SIZE;
    canvas.height = level.gridHeight * TILE_SIZE;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw full 2D Grid floor layout
    for (let x = 0; x < level.gridWidth; x++) {
        for (let y = 0; y < level.gridHeight; y++) {
            ctx.fillStyle = ((x + y) % 2 === 0) ? "#29292e" : "#323238";
            ctx.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
            ctx.strokeStyle = "#121214";
            ctx.strokeRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
        }
    }

    // Draw Hazards / Obstacles with dynamic coloring based on type
    if (level.hazards) {
        level.hazards.forEach(hz => {
            if (hz.type === "desk" || hz.type === "table" || hz.type === "counter") {
                ctx.fillStyle = "#8b5a2b"; // Brown for furniture
            } else if (hz.type === "puddle" || hz.type === "spill") {
                ctx.fillStyle = "#0077b6"; // Blue for liquid spills
            } else {
                ctx.fillStyle = "#4a4e69"; // Dark grey for trash cans/bins
            }
            ctx.fillRect(hz.x * TILE_SIZE + 10, hz.y * TILE_SIZE + 10, TILE_SIZE - 20, TILE_SIZE - 20);
            ctx.fillStyle = "#fff";
            ctx.font = "10px sans-serif";
            ctx.fillText(hz.type.toUpperCase(), hz.x * TILE_SIZE + 12, hz.y * TILE_SIZE + TILE_SIZE / 2 + 4);
        });
    }

    // Draw Sub-Goals
    if (level.subGoals) {
        level.subGoals.forEach(sg => {
            const isDone = completedSubGoals[sg.id];
            ctx.fillStyle = isDone ? "#55555e" : "#e9c46a"; // Greyed out if completed, gold if active
            ctx.beginPath();
            ctx.arc(sg.triggerX * TILE_SIZE + TILE_SIZE/2, sg.triggerY * TILE_SIZE + TILE_SIZE/2, 14, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "#fff";
            ctx.font = "10px sans-serif";
            ctx.fillText("⭐ Task", sg.triggerX * TILE_SIZE + 18, sg.triggerY * TILE_SIZE + TILE_SIZE - 6);
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

// Code Evaluator Execution Brain
function runStudentCode() {
    if (isAnimating) return;

    const level = allLevels[currentLevelIndex];
    studentX = level.startX;
    studentY = level.startY;
    actionQueue = [];
    completedSubGoals = {};
    loadLevel(currentLevelIndex); 

    const studentCodeText = document.getElementById("code-box").value;

    // REGISTERED ACTIONS LIST (HALLWAY + CAFETERIA API WORKING CAPABILITIES)
    const sandboxAPI = {
        moveRight: () => actionQueue.push({ type: 'MOVE', x: 1, y: 0 }),
        moveLeft: () => actionQueue.push({ type: 'MOVE', x: -1, y: 0 }),
        moveDown: () => actionQueue.push({ type: 'MOVE', x: 0, y: 1 }),
        moveUp: () => actionQueue.push({ type: 'MOVE', x: 0, y: -1 }),
        openLocker: () => actionQueue.push({ type: 'ACTION', value: 'OPEN_LOCKER' }),
        highFive: () => actionQueue.push({ type: 'ACTION', value: 'HIGH_FIVE' }),
        fillWater: () => actionQueue.push({ type: 'ACTION', value: 'FILL_WATER' }),
        pickUpFork: () => actionQueue.push({ type: 'ACTION', value: 'PICK_UP_FORK' }),
        pickUpNapkins: () => actionQueue.push({ type: 'ACTION', value: 'PICK_UP_NAPKINS' }),
        pickUpMilk: () => actionQueue.push({ type: 'ACTION', value: 'PICK_UP_MILK' }),
        pickUpApple: () => actionQueue.push({ type: 'ACTION', value: 'PICK_UP_APPLE' }),
        pumpKetchup: () => actionQueue.push({ type: 'ACTION', value: 'PUMP_KETCHUP' }),
        wipeTable: () => actionQueue.push({ type: 'ACTION', value: 'WIPE_TABLE' }),
        tossTrash: () => actionQueue.push({ type: 'ACTION', value: 'TOSS_TRASH' }),
        pickUpBottle: () => actionQueue.push({ type: 'ACTION', value: 'PICK_UP_BOTTLE' })
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

        // Obstacle Collision Checks
        if (level.hazards) {
            const hitHazard = level.hazards.find(hz => hz.x === studentX && hz.y === studentY);
            if (hitHazard) {
                renderCanvasMap();
                alert(`Oops! You ran right into a ${hitHazard.type}! Adjust your route path steps.`);
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
            alert("Main goal reached, but you missed a task requirement.");
        }
    } else {
        alert("Code finished execution, but you are not at the target coordinates.");
    }
}

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
        
        // Automatically inject fresh starter configurations text for the newly unlocked grid!
        const nextLevel = allLevels[currentLevelIndex];
        document.getElementById("code-box").value = `// ${nextLevel.description}\nstudent.moveRight();\n`;
    } else {
        alert("Phenomenal work! You completed the entire Classroom Code Quest grid system!");
    }
}

function changeLevelViaDropdown(selectedLevelIndex) {
    const index = parseInt(selectedLevelIndex);
    currentLevelIndex = index;
    loadLevel(currentLevelIndex);
    
    const chosenLevel = allLevels[currentLevelIndex];
    document.getElementById("code-box").value = `// ${chosenLevel.description}\nstudent.moveRight();\n`;
}

