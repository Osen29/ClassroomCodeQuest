// Game Architecture State Configuration
let allLevels = [];
let currentLevelIndex = 0; // Starts at Level 1 (Index 0)
let studentPos = 0;
let actionQueue = [];
let isAnimating = false;

// Sub-goal tracker tracking variables
let completedSubGoals = {};

const TILE_SIZE = 100;
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// 1. Initializer: Pull JSON data mapping configuration parameters from storage
window.addEventListener("DOMContentLoaded", () => {
    fetch("levels.json")
        .then(response => response.json())
        .then(data => {
            allLevels = data.levels;
            loadLevel(currentLevelIndex);
        })
        .catch(err => {
            console.error("Critical: levels.json data layout failed to load.", err);
            document.getElementById("level-desc").innerText = "Error loading level blueprint data.";
        });
});

// 2. Map Loader: Populates text variables and resets the rendering canvas layout
function loadLevel(index) {
    if (!allLevels || allLevels.length === 0) return;
    
    const level = allLevels[index];
    studentPos = level.startX;
    actionQueue = [];
    isAnimating = false;
    completedSubGoals = {};

    // Update UI Header and Text Boxes
    document.getElementById("level-title").innerText = `Level ${level.levelNumber}: ${level.title}`;
    
    // Clear and build the dynamic task tracker UI checkbox lists
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

    // Prefill code box sample boilerplate patterns
    document.getElementById("code-box").value = `// ${level.description}\nstudent.moveRight();\n`;

    renderCanvasMap();
}

// 3. Visual Render Pipeline Loop Engine
function renderCanvasMap() {
    const level = allLevels[currentLevelIndex];
    if (!level) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Adjust canvas layout size dynamically based on map constraints
    canvas.width = level.gridSize * TILE_SIZE;

    // Draw Floor Tiles
    for (let i = 0; i < level.gridSize; i++) {
        ctx.fillStyle = (i % 2 === 0) ? "#29292e" : "#323238";
        ctx.fillRect(i * TILE_SIZE, 0, TILE_SIZE, canvas.height);
        ctx.strokeStyle = "#121214";
        ctx.strokeRect(i * TILE_SIZE, 0, TILE_SIZE, canvas.height);
    }

    // Draw Hazards (Puddles, etc.)
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

    // Draw Interactive Sub-Goal Elements
    if (level.subGoals) {
        level.subGoals.forEach(sg => {
            const isDone = completedSubGoals[sg.id];
            ctx.fillStyle = isDone ? "#55555e" : "#e9c46a";
            ctx.beginPath();
            ctx.arc(sg.triggerX * TILE_SIZE + 50, 80, 18, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "#fff";
            ctx.font = "11px sans-serif";
            ctx.fillText(sg.title.split(" ")[0], sg.triggerX * TILE_SIZE + 35, 115);
        });
    }

    // Draw Main Target Exit Gate Destination
    ctx.fillStyle = "#e63946";
    ctx.fillRect(level.targetX * TILE_SIZE + 30, 40, 40, 60);
    ctx.fillStyle = "#fff";
    ctx.font = "12px sans-serif";
    ctx.fillText("🚪 Goal", level.targetX * TILE_SIZE + 32, 125);

    // Draw Student Character Sprite Square
    ctx.fillStyle = "#00b4d8";
    ctx.fillRect(studentPos * TILE_SIZE + 35, 50, 30, 70);
}

// 4. Code Evaluator Sandbox Proxy Mapping System
function runStudentCode() {
    if (isAnimating) return;

    const level = allLevels[currentLevelIndex];
    studentPos = level.startX; // Reset map variables
    actionQueue = [];
    completedSubGoals = {};
    loadLevel(currentLevelIndex); // Clears checkmarks UI

    const studentCodeText = document.getElementById("code-box").value;

    // Define accessible commands inside sandbox execution wrappers
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
        alert("Syntax Error in Code Box: " + error.message);
    }
}

// 5. Sequential Animation Processing Frames Engine
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
        
        // Block player from traveling outside array indices configurations
        if (studentPos < 0) studentPos = 0;
        if (studentPos >= level.gridSize) studentPos = level.gridSize - 1;

        // Hazard Collision Trigger Logic Check Rules
        if (level.hazards) {
            const hitHazard = level.hazards.find(hz => hz.x === studentPos);
            if (hitHazard && currentCommand.type !== 'JUMP') {
                renderCanvasMap();
                alert(`Oops! You stepped right into a ${hitHazard.type}! Adjust your movements.`);
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
                    // Check box visually green highlight markers on layout sidebar panels
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
    setTimeout(tickAnimationLoop, 600); // 0.6 second delay pacing between steps
}

// 6. Win Conditions Verification Framework
function evaluateWinCondition() {
    const level = allLevels[currentLevelIndex];
    
    if (studentPos === level.targetX) {
        // Validate if all available sub-goals listed were completed properly
        let totalSubGoals = level.subGoals ? level.subGoals.length : 0;
        let earnedSubGoals = Object.keys(completedSubGoals).filter(k => completedSubGoals[k]).length;

        if (totalSubGoals === earnedSubGoals) {
            alert("Level Completed! Outstanding 3-Star Execution! 🎉🏆");
            advanceNextLevel();
        } else {
            alert("Main target reached, but you missed a sub-goal target. Retry to unlock full credit!");
        }
    } else {
        alert("Execution finished, but you didn't reach the classroom door goal coordinate.");
    }
}

function advanceNextLevel() {
    if (currentLevelIndex < allLevels.length - 1) {
        currentLevelIndex++;
        loadLevel(currentLevelIndex);
    } else {
        alert("Phenomenal work! You completed all matching school level structures programmed!");
    }
}
