export const nodeQuestions = [

    {
        id: 1,

        examSlug: "react-js-advanced",

        question:

            "Which React Hook is used to perform side effects in functional components?",

        options: [

            "useState",

            "useEffect",

            "useMemo",

            "useRef"

        ],

        correctAnswer: 2,

        marks: 2,

        negativeMarks: 0,

        explanation:

            "useEffect is used for API calls, subscriptions, DOM updates and other side effects.",

        difficulty: "Easy",

        category: "Hooks"
    },

    {
        id: 2,

        examSlug: "react-js-advanced",

        question:

            "Which hook is used to share data globally without prop drilling?",

        options: [

            "useReducer",

            "Context API",

            "useMemo",

            "useRef"

        ],

        correctAnswer: 1,

        marks: 2,

        negativeMarks: 0,

        explanation:

            "Context API allows sharing state across the component tree.",

        difficulty: "Easy",

        category: "Context API"
    },

    {
        id: 3,

        examSlug: "react-js-advanced",

        question:

            "Which Hook is used to store mutable values without re-rendering the component?",

        options: [

            "useRef",

            "useState",

            "useMemo",

            "useContext"

        ],

        correctAnswer: 0,

        marks: 2,

        negativeMarks: 0,

        explanation:

            "useRef stores mutable values without triggering a re-render.",

        difficulty: "Medium",

        category: "Hooks"
    },

    {
        id: 4,

        examSlug: "react-js-advanced",

        question:

            "Which library is commonly used for routing in React?",

        options: [

            "Axios",

            "React Router DOM",

            "Redux",

            "Bootstrap"

        ],

        correctAnswer: 1,

        marks: 2,

        negativeMarks: 0,

        explanation:

            "React Router DOM provides client-side routing.",

        difficulty: "Easy",

        category: "Routing"
    },

    {
        id: 5,

        examSlug: "react-js-advanced",

        question:

            "Which Hook is useful for memoizing expensive calculations?",

        options: [

            "useMemo",

            "useEffect",

            "useState",

            "useRef"

        ],

        correctAnswer: 0,

        marks: 2,

        negativeMarks: 0,

        explanation:

            "useMemo memoizes expensive computations.",

        difficulty: "Medium",

        category: "Performance"
    }

];