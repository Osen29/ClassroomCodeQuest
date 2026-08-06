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
    },
    {
      "levelNumber": 11,
      "title": "The Acid Puddle Check",
      "zone": "The Science Lab",
      "description": "Chemical spill detected! Walk straight. Use an 'if' statement combined with student.seeFloor() to detect an 'acid' spill. If acid is found, execute student.pourNeutralizer(); before stepping forward.",
      "gridWidth": 7,
      "gridHeight": 4,
      "startX": 0,
      "startY": 1,
      "targetX": 6,
      "targetY": 1,
      "mainGoal": "Reach the safety exit door at (6, 1)",
      "subGoals": [
        {
          "id": "neutralize_spill",
          "title": "Neutralize Acid Spill",
          "triggerX": 3,
          "triggerY": 1,
          "requiredAction": "POUR_NEUTRALIZER"
        }
      ],
      "hazards": [
        { "type": "acid", "x": 3, "y": 1 }
      ]
    },
    {
      "levelNumber": 12,
      "title": "Microscope Slide Sorting",
      "zone": "The Science Lab",
      "description": "Examine biological samples. Navigate to the workbench. Inspect slides with student.checkSlide(). If a slide reads 'contaminated', run student.sterilize(); else run student.logClean();.",
      "gridWidth": 6,
      "gridHeight": 5,
      "startX": 0,
      "startY": 2,
      "targetX": 5,
      "targetY": 2,
      "mainGoal": "Process specimen data and report to (5, 2)",
      "subGoals": [
        {
          "id": "process_slide",
          "title": "Sterilize Contaminated Slide at (2,2)",
          "triggerX": 2,
          "triggerY": 2,
          "requiredAction": "STERILIZE"
        }
      ],
      "hazards": []
    },
    {
      "levelNumber": 13,
      "title": "Smoke Detector Override",
      "zone": "The Science Lab",
      "description": "The heat lamps triggered a false alarm! Walk down the panel path. Read the digital air sensor toggle using student.checkAir(). If it reads 'smoke', run student.pullLever();.",
      "gridWidth": 7,
      "gridHeight": 4,
      "startX": 0,
      "startY": 2,
      "targetX": 6,
      "targetY": 2,
      "mainGoal": "Override alarm array at grid exit",
      "subGoals": [
        {
          "id": "pull_lever",
          "title": "Pull Safety Override Lever at (3,2)",
          "triggerX": 3,
          "triggerY": 2,
          "requiredAction": "PULL_LEVER"
        }
      ],
      "hazards": []
    },
    {
      "levelNumber": 14,
      "title": "Beaker Chemical Mixer",
      "zone": "The Science Lab",
      "description": "Synthesize a safe balancing agent. Check the reactive agent solution matrix using student.checkBeaker(). If it reads 'blue', add water; else if it reads 'yellow', add baking soda.",
      "gridWidth": 6,
      "gridHeight": 6,
      "startX": 0,
      "startY": 0,
      "targetX": 5,
      "targetY": 5,
      "mainGoal": "Safely mix formula and leave room",
      "subGoals": [
        {
          "id": "mix_chemical",
          "title": "Mix Compound Matrix at (3,2)",
          "triggerX": 3,
          "triggerY": 2,
          "requiredAction": "ADD_WATER"
        }
      ],
      "hazards": [
        { "type": "desk", "x": 2, "y": 4 }
      ]
    },
    {
      "levelNumber": 15,
      "title": "The Greenhouse Exhaust",
      "zone": "The Science Lab",
      "description": "The automated biology ecosystem is overheating! Read the internal room climate index with student.checkTemp(). If temp is greater than 80, run student.turnOnFan();.",
      "gridWidth": 8,
      "gridHeight": 5,
      "startX": 0,
      "startY": 2,
      "targetX": 7,
      "targetY": 2,
      "mainGoal": "Ventilate the facility and exit to computer bank",
      "subGoals": [
        {
          "id": "activate_fan",
          "title": "Activate Exhaust Fan at (4,2)",
          "triggerX": 4,
          "triggerY": 2,
          "requiredAction": "TURN_ON_FAN"
        }
      ],
      "hazards": [
        { "type": "plant", "x": 3, "y": 1 },
        { "type": "plant", "x": 5, "y": 3 }
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
                ctx.fillStyle = "#8b5a2b"; // Brown furniture
            } else if (hz.type === "puddle" || hz.type === "spill") {
                ctx.fillStyle = "#0077b6"; // Blue liquids
            } else if (hz.type === "acid") {
                ctx.fillStyle = "#38b000"; // Vibrant neon acid green for Zone 3!
            } else if (hz.type === "plant") {
                ctx.fillStyle = "#1b4332"; // Dark foliage forest green for greenhouse
            } else {
                ctx.fillStyle = "#4a4e69"; // Slate gray for electronics/bins
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

    // REGISTERED ACTIONS LIST (HALLWAY + CAFETERIA + SCIENCE LAB CAPABILITIES)
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
        pickUpBottle: () => actionQueue.push({ type: 'ACTION', value: 'PICK_UP_BOTTLE' }),
        
        // --- NEW ZONE 3 SCIENCE LAB ACTIONS ---
        pourNeutralizer: () => actionQueue.push({ type: 'ACTION', value: 'POUR_NEUTRALIZER' }),
        sterilize: () => actionQueue.push({ type: 'ACTION', value: 'STERILIZE' }),
        logClean: () => actionQueue.push({ type: 'ACTION', value: 'LOG_CLEAN' }),
        pullLever: () => actionQueue.push({ type: 'ACTION', value: 'PULL_LEVER' }),
        addWater: () => actionQueue.push({ type: 'ACTION', value: 'ADD_WATER' }),
        addSoda: () => actionQueue.push({ type: 'ACTION', value: 'ADD_SODA' }),
        turnOnFan: () => actionQueue.push({ type: 'ACTION', value: 'TURN_ON_FAN' }),

        // --- DATA SENSOR RETURN COMMANDS (Crucial for Conditionals) ---
        seeFloor: () => {
            // Check if there is a hazard ahead at tile 3
            return (studentX === 2 && studentY === 1) ? "acid" : "clean";
        },
        checkSlide: () => {
            return "contaminated"; // Simulating fixed telemetry readout data
        },
        checkAir: () => {
            return "smoke";
        },
        checkBeaker: () => {
            return "blue";
        },
        checkTemp: () => {
            return 85; // Returns integer checking parameter rule thresholds
        }
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

        // Visual Display System: Trigger the interactive win panel configuration
        showWinOverlay(level.zone, totalSubGoals, earnedSubGoals);
    } else {
        alert("Code finished execution, but you are not at the target coordinates.");
    }
}

// Triggers the visual rendering layout transitions for the overlay system
function showWinOverlay(zoneName, totalSubs, earnedSubs) {
    document.getElementById("win-zone-text").innerText = `${zoneName} Cleared`;
    
    // Reset star colors back to base configurations default state
    document.getElementById("star1").classList.remove("earned");
    document.getElementById("star2").classList.remove("earned");
    document.getElementById("star3").classList.remove("earned");

    // Star Tracking Loop Rules: 
    // Star 1 = Beat the level main door. 
    // Star 2 = Half or more subtasks. 
    // Star 3 = Perfect clean run.
    document.getElementById("star1").classList.add("earned");
    
    if (totalSubs > 0) {
        if (earnedSubs >= totalSubs / 2) document.getElementById("star2").classList.add("earned");
        if (earnedSubs === totalSubs) document.getElementById("star3").classList.add("earned");
    } else {
        // If the level has no custom sub-goals (like level 1), automatically award 3 stars for success!
        document.getElementById("star2").classList.add("earned");
        document.getElementById("star3").classList.add("earned");
    }

    // Set matching summary script responses based on mastery grades
    if (earnedSubs === totalSubs) {
        document.getElementById("win-message").innerText = "Perfect 3-Star Mastery! All school task requirements fully logged inside schedule pipelines!";
    } else {
        document.getElementById("win-message").innerText = "Level Cleared! Try re-writing optimized steps next time to catch missing tasks.";
    }

    // Slide overlay visible onto player desktop panels
    document.getElementById("win-overlay").classList.add("active");
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
// Triggered when a student clicks the "Next Level" action switch inside the win screen card
function closeWinOverlayAndAdvance() {
    // Hide panel smoothly
    document.getElementById("win-overlay").classList.remove("active");
    
    // Call baseline progression system
    advanceNextLevel();
}

