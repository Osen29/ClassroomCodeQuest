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
    }
  ]
};