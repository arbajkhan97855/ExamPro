import {
    FaJs,
    FaPython,
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaHtml5
} from "react-icons/fa";

export const exams = [

/* =======================================================
FREE EXAM 1
======================================================= */

{
    id:"javascript-fundamentals",

    slug:"javascript-fundamentals",

    name:"JavaScript Fundamentals",

    shortDescription:
    "Master JavaScript from basics to advanced concepts.",

    description:
    "This examination evaluates your JavaScript knowledge including variables, functions, DOM, ES6, asynchronous programming and problem solving.",

    icon:FaJs,

    color:"#F7DF1E",

    image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",

    banner:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",

    tier:"Free",

    price:0,

    discount:0,

    finalPrice:0,

    category:"Programming",

    difficulty:"Beginner",

    language:"English",

    duration:60,

    questions:40,

    totalMarks:80,

    passingMarks:32,

    attempts:3,

    certificate:true,

    lifetimeAccess:true,

    negativeMarking:false,

    instructor:"ExamPro Team",

    enrolledStudents:5200,

    rating:4.8,

    reviews:420,

    lastUpdated:"July 2026",

    topics:[
        "Variables",
        "Operators",
        "Functions",
        "Arrays",
        "Objects",
        "DOM",
        "Events",
        "ES6"
    ],

    requirements:[
        "Basic Computer Knowledge"
    ],

    learningOutcomes:[
        "JavaScript Fundamentals",
        "DOM Manipulation",
        "ES6 Concepts",
        "Problem Solving"
    ]

},

/* =======================================================
FREE EXAM 2
======================================================= */

{
    id:"python-fundamentals",

    slug:"python-fundamentals",

    name:"Python Programming",

    shortDescription:
    "Learn Python programming fundamentals.",

    description:
    "Test your knowledge of Python syntax, loops, functions, file handling and object oriented programming.",

    icon:FaPython,

    color:"#3776AB",

    image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",

    banner:"https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=900&q=80",

    tier:"Free",

    price:0,

    discount:0,

    finalPrice:0,

    category:"Programming",

    difficulty:"Beginner",

    language:"English",

    duration:50,

    questions:35,

    totalMarks:70,

    passingMarks:28,

    attempts:3,

    certificate:true,

    lifetimeAccess:true,

    negativeMarking:false,

    instructor:"ExamPro Team",

    enrolledStudents:4100,

    rating:4.7,

    reviews:305,

    lastUpdated:"July 2026",

    topics:[
        "Variables",
        "Loops",
        "Functions",
        "Lists",
        "Tuples",
        "Dictionary",
        "OOP"
    ],

    requirements:[
        "Basic Computer Knowledge"
    ],

    learningOutcomes:[
        "Python Basics",
        "Functions",
        "Loops",
        "Object Oriented Programming"
    ]

},

/* =======================================================
FREE EXAM 3
======================================================= */

{
    id:"mysql-fundamentals",

    slug:"mysql-fundamentals",

    name:"MySQL Database",

    shortDescription:
    "Learn SQL and Database concepts.",

    description:
    "Evaluate your SQL knowledge including joins, constraints, normalization, indexes and queries.",

    icon:FaDatabase,

    color:"#00758F",

    image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",

    banner:"https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=900&q=80",

    tier:"Premium",

    price:299,

    discount:20,

    finalPrice:239,

    category:"Database",

    difficulty:"Intermediate",

    language:"English",

    duration:45,

    questions:30,

    totalMarks:60,

    passingMarks:24,

    attempts:3,

    certificate:true,

    lifetimeAccess:true,

    negativeMarking:false,

    instructor:"ExamPro Team",

    enrolledStudents:3100,

    rating:4.6,

    reviews:215,

    lastUpdated:"July 2026",

    topics:[
        "SQL",
        "DDL",
        "DML",
        "Joins",
        "Constraints",
        "Views",
        "Indexes"
    ],

    requirements:[
        "Basic Computer Knowledge"
    ],

    learningOutcomes:[
        "Database Design",
        "SQL Queries",
        "Joins",
        "Normalization"
    ]

},

/* =======================================================
PREMIUM EXAM 1
======================================================= */

{
    id:"react-advanced",

    slug:"react-js-advanced",

    name:"React JS Advanced",

    shortDescription:
    "Industry level React certification exam.",

    description:
    "Master React Hooks, Context API, Routing, Redux Toolkit, Authentication, Performance Optimization and Advanced Patterns.",

    icon:FaReact,

    color:"#61DAFB",

    image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",

    banner:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",

    tier:"Premium",

    price:299,

    discount:20,

    finalPrice:239,

    category:"Frontend",

    difficulty:"Advanced",

    language:"English",

    duration:90,

    questions:60,

    totalMarks:120,

    passingMarks:48,

    attempts:1,

    certificate:true,

    lifetimeAccess:true,

    negativeMarking:false,

    instructor:"ExamPro Team",

    enrolledStudents:2450,

    rating:4.9,

    reviews:325,

    lastUpdated:"July 2026",

    topics:[
        "React",
        "Hooks",
        "Context API",
        "Redux Toolkit",
        "React Router",
        "Authentication",
        "Performance",
        "Project Architecture"
    ],

    requirements:[
        "HTML",
        "CSS",
        "JavaScript ES6"
    ],

    learningOutcomes:[
        "Advanced React",
        "Redux",
        "Routing",
        "Authentication",
        "Production Projects"
    ]

},

/* =======================================================
PREMIUM EXAM 2
======================================================= */

{
    id:"nodejs-backend",

    slug:"nodejs-backend",

    name:"Node JS Backend",

    shortDescription:
    "Complete backend development certification.",

    description:
    "Build scalable REST APIs using Node.js, Express, JWT Authentication, MySQL, MongoDB and deployment.",

    icon:FaNodeJs,

    color:"#3C873A",

    image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",

    banner:"https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",

    tier:"Premium",

    price:399,

    discount:25,

    finalPrice:299,

    category:"Backend",

    difficulty:"Advanced",

    language:"English",

    duration:120,

    questions:75,

    totalMarks:150,

    passingMarks:60,

    attempts:1,

    certificate:true,

    lifetimeAccess:true,

    negativeMarking:false,

    instructor:"ExamPro Team",

    enrolledStudents:1980,

    rating:4.9,

    reviews:280,

    lastUpdated:"July 2026",

    topics:[
        "Node.js",
        "Express",
        "REST API",
        "JWT",
        "Authentication",
        "MySQL",
        "MongoDB",
        "Deployment"
    ],

    requirements:[
        "JavaScript",
        "Basic Backend Knowledge"
    ],

    learningOutcomes:[
        "REST API Development",
        "Authentication",
        "Database Integration",
        "Backend Deployment"
    ]

},

/* =======================================================
FREE EXAM 4
======================================================= */

{
    id: "html-css-fundamentals",

    slug: "html-css-fundamentals",

    name: "HTML & CSS Fundamentals",

    shortDescription:
    "Learn HTML5 and CSS3 from beginner to advanced level.",

    description:
    "This examination evaluates your knowledge of HTML5, CSS3, semantic elements, forms, tables, Flexbox, Grid, responsive design, animations and modern web development practices.",

    icon: FaHtml5,

    color: "#E34F26",

    image:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",

    banner:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",

    tier: "Free",

    price: 0,

    discount: 0,

    finalPrice: 0,

    category: "Frontend",

    difficulty: "Beginner",

    language: "English",

    duration: 60,

    questions: 40,

    totalMarks: 80,

    passingMarks: 32,

    attempts: 3,

    certificate: true,

    lifetimeAccess: true,

    negativeMarking: false,

    instructor: "ExamPro Team",

    enrolledStudents: 6800,

    rating: 4.9,

    reviews: 520,

    lastUpdated: "July 2026",

    topics: [
        "HTML5",
        "Semantic Tags",
        "Forms",
        "Tables",
        "CSS Selectors",
        "Box Model",
        "Flexbox",
        "CSS Grid",
        "Position",
        "Animations",
        "Transitions",
        "Media Queries",
        "Responsive Design"
    ],

    requirements: [
        "Basic Computer Knowledge"
    ],

    learningOutcomes: [
        "HTML5 Fundamentals",
        "Modern CSS3",
        "Responsive Website Design",
        "Flexbox & Grid",
        "Professional Web Layouts"
    ]
},


];