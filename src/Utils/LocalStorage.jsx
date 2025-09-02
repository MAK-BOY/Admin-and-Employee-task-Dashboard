
// localStorage.clear()
  const admin=[ {
    "id": 1,
    "email": "admin@me.com",
    "password": "123"
  }]

const employees = [
  {
    "id": 1,
    "name": "Aman Sharma",
    "email": "employee1@example.com",
    "password": "123",
    "taskStats": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "title": "Prepare Sales Report",
        "description": "Compile the monthly sales figures into a summary report.",
        "date": "2025-09-05",
        "category": "Reporting",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Team Meeting",
        "description": "Attend the scheduled project update meeting with the team.",
        "date": "2025-09-06",
        "category": "Meeting",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Update CRM",
        "description": "Enter new client information into the CRM system.",
        "date": "2025-09-08",
        "category": "Data Entry",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "name": "Priya Verma",
    "email": "employee2@example.com",
    "password": "123",
    "taskStats": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Product Demo",
        "description": "Deliver a demo of the new software to potential clients.",
        "date": "2025-09-03",
        "category": "Client Work",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Draft Proposal",
        "description": "Write a draft proposal for the upcoming client contract.",
        "date": "2025-09-07",
        "category": "Documentation",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Fix Bug #112",
        "description": "Resolve login issue reported by QA team.",
        "date": "2025-09-09",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Database Backup",
        "description": "Perform scheduled weekly backup of production database.",
        "date": "2025-09-10",
        "category": "Maintenance",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "name": "Rohit Mehta",
    "email": "employee3@example.com",
    "password": "123",
    "taskStats": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Social Media Post",
        "description": "Create and schedule social media content for next week.",
        "date": "2025-09-04",
        "category": "Marketing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Customer Follow-up",
        "description": "Call clients who attended last week’s webinar.",
        "date": "2025-09-06",
        "category": "Client Work",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Inventory Check",
        "description": "Verify stock levels of sports equipment in warehouse.",
        "date": "2025-09-07",
        "category": "Logistics",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Write Blog Post",
        "description": "Draft article for company website on new training methods.",
        "date": "2025-09-09",
        "category": "Content",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 4,
    "name": "Sneha Kapoor",
    "email": "employee4@example.com",
    "password": "123",
    "taskStats": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Client Onboarding",
        "description": "Assist new client with account setup.",
        "date": "2025-09-02",
        "category": "Support",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Prepare Training Material",
        "description": "Create presentation slides for employee training session.",
        "date": "2025-09-05",
        "category": "Training",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Review Code",
        "description": "Perform code review on latest feature branch.",
        "date": "2025-09-06",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 5,
    "name": "Vikas Singh",
    "email": "employee5@example.com",
    "password": "123",
    "taskStats": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "title": "System Monitoring",
        "description": "Check server health and resource usage.",
        "date": "2025-09-03",
        "category": "IT",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Security Audit",
        "description": "Run security audit tools on production system.",
        "date": "2025-09-08",
        "category": "Security",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Design Banner",
        "description": "Design promotional banner for upcoming event.",
        "date": "2025-09-10",
        "category": "Design",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Clean Workspace",
        "description": "Ensure all files are organized and workspace is neat.",
        "date": "2025-09-11",
        "category": "General",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Update Documentation",
        "description": "Update user manual with latest software changes.",
        "date": "2025-09-12",
        "category": "Documentation",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  }
];


 export const setlocalstorage=()=>{
 localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))
 }
//  setlocalstorage()

 
 export const getlocalstorage=()=>{
const employees=  localStorage.getItem('employees')
const admin =  localStorage.getItem('admin')

 return { employees: JSON.parse(employees), admin: JSON.parse(admin) }
}
export default localStorage