# Teacher Portal Integration Guide

## Overview
The Teacher Portal and Student Portal are now fully integrated. Teachers can manage students, view their progress, and track their financial literacy decisions.

## How to Use

### For Teachers:

1. **Open the Teacher Portal**
   - Open `teacher-portal.html` in your browser

2. **Add Students**
   - Click on the "➕ Add Students" tab
   - Enter a student name (e.g., "John Smith", "Sarah Jones")
   - Click "Add Student"
   - Students are automatically initialized with starting values

3. **Manage Students**
   - Click on the "📋 Manage Students" tab
   - You'll see all students with their current metrics:
     - Money, Happiness, Stress, Savings, Opportunities
     - Days completed (0-7)

4. **View Student Details**
   - Click on any student card to open detailed view
   - See all their current metrics in a grid
   - View decisions by day with each question they answered
   - Access student portal, reset progress, or delete student

5. **Student Actions**
   - **🔗 Open Student Portal**: Opens the student's personal portal in a new tab
   - **🔄 Reset Progress**: Resets the student back to starting values (money: $20, all stats reset)
   - **🗑️ Delete Student**: Permanently removes the student and all their data

### For Students:

1. **Access via Teacher**
   - Teacher clicks "Open Student Portal" from the student details
   - Student portal opens with their specific data loaded

2. **Direct Access**
   - Students can access `student-portal.html?studentId=<their_id>` directly
   - Example: `student-portal.html?studentId=john_smith`

## Data Storage

- **Teacher Data**: `ll_students` (list of all students)
- **Individual Student Data**: `ll_student_<studentId>` (each student's progress)

### Student Data Structure:
```json
{
  "money": 20,
  "stats": {
    "happiness": 50,
    "stress": 50,
    "savings": 0,
    "opportunities": 0
  },
  "day": 1,
  "answers": {
    "1": [], "2": [], "3": [], "4": [], "5": [], "6": [], "7": []
  }
}
```

## Features

### Teacher Portal Features:
- ✅ Add unlimited students
- ✅ View all students at a glance with key metrics
- ✅ Click student to see detailed progress
- ✅ View day-by-day decision summaries
- ✅ Reset student progress
- ✅ Delete students
- ✅ Open student portal with student-specific data

### Student Portal Features:
- ✅ Multi-student support via URL parameter
- ✅ Free navigation between days for demos
- ✅ Next button for sequential decision-making
- ✅ Inline summary display (not popup)
- ✅ Real-time metric updates
- ✅ Financial literacy explanations after each decision

## Demo Flow

1. Open `teacher-portal.html`
2. Add students: "Alice", "Bob", "Charlie"
3. Click on Alice → Click "Open Student Portal"
4. Alice makes decisions in Day 1
5. Return to Teacher Portal → Click on Alice
6. See Alice's decisions and updated metrics
7. Try different students to see independent progress tracking

## Technical Notes

- All data stored in browser localStorage
- No server required - fully client-side
- Student IDs are auto-generated from names (lowercase, underscores)
- Each student has completely independent state
- Teacher can view but not modify student decisions directly
