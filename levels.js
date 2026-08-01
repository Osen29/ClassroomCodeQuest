const levelData = {
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
      "description": "Welcome to the Cafeteria! Use your actions to navigate the lunch counter. Make sure to pick up a clean fork and napkins before grabbing your tray.",
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
      "description": "The lunch line is moving! Step up to the pizza station. Snag a chocolate milk container and a healthy apple from the side coolers as you pass them.",
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
      "description": "Time to dress your lunch! Head to your table, but stop at the condiment station to pump ketchup. Watch out for the messy puddle on the floor nearby!",
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
        { "type": "spill", "x": 4 }
      ]
    },
    {
      "levelNumber": 9,
      "title": "Table Cleanup Duty",
      "zone": "The Cafeteria",
      "description": "Lunch is over! Help clean up. Walk to the recycling area, clearing off trash from the messy tables and tossing an apple core into the bin.",
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
      "description": "Last step before science class! Navigate to the main bin array. Collect stray plastic bottles scattered across the tile grid.",
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
