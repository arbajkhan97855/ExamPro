export const reactQuestions = [

{
    id: 1,

    examSlug: "react-js-advanced",

    question: "What is React primarily used for?",

    options: [
        "Database Management",
        "Building User Interfaces",
        "Backend Development",
        "Operating Systems"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "React is a JavaScript library used for building user interfaces.",

    difficulty: "Easy",

    category: "React Basics"
},

{
    id: 2,

    examSlug: "react-js-advanced",

    question: "Who developed React?",

    options: [
        "Google",
        "Microsoft",
        "Meta (Facebook)",
        "Twitter"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "React was developed by Meta (formerly Facebook).",

    difficulty: "Easy",

    category: "React Basics"
},

{
    id: 3,

    examSlug: "react-js-advanced",

    question: "Which method is used to create a React project nowadays?",

    options: [
        "create-react-app",
        "vite",
        "Both Create React App and Vite",
        "npm react"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "Both CRA and Vite can create React apps, though Vite is now generally preferred.",

    difficulty: "Easy",

    category: "Setup"
},

{
    id: 4,

    examSlug: "react-js-advanced",

    question: "JSX stands for?",

    options: [
        "JavaScript XML",
        "Java Syntax Extension",
        "Java XML",
        "JSON XML"
    ],

    correctAnswer: 0,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "JSX stands for JavaScript XML.",

    difficulty: "Easy",

    category: "JSX"
},

{
    id: 5,

    examSlug: "react-js-advanced",

    question: "Which hook is used to manage state?",

    options: [
        "useEffect",
        "useMemo",
        "useState",
        "useRef"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "useState is used for state management in functional components.",

    difficulty: "Easy",

    category: "Hooks"
},

{
    id: 6,

    examSlug: "react-js-advanced",

    question: "Which hook is used for side effects?",

    options: [
        "useRef",
        "useState",
        "useEffect",
        "useMemo"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "useEffect handles side effects like API calls and subscriptions.",

    difficulty: "Easy",

    category: "Hooks"
},

{
    id: 7,

    examSlug: "react-js-advanced",

    question: "Props in React are?",

    options: [
        "Mutable",
        "Read Only",
        "Database Values",
        "CSS Variables"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "Props are read-only and cannot be modified by child components.",

    difficulty: "Easy",

    category: "Props"
},

{
    id: 8,

    examSlug: "react-js-advanced",

    question: "Which hook returns a mutable object that persists across renders?",

    options: [
        "useMemo",
        "useRef",
        "useEffect",
        "useState"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "useRef returns a mutable ref object.",

    difficulty: "Medium",

    category: "Hooks"
},

{
    id: 9,

    examSlug: "react-js-advanced",

    question: "Which hook is used to memoize expensive calculations?",

    options: [
        "useEffect",
        "useMemo",
        "useState",
        "useContext"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "useMemo caches computed values for better performance.",

    difficulty: "Medium",

    category: "Performance"
},

{
    id: 10,

    examSlug: "react-js-advanced",

    question: "Which hook memoizes a function?",

    options: [
        "useMemo",
        "useCallback",
        "useRef",
        "useReducer"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "useCallback prevents unnecessary function recreation.",

    difficulty: "Medium",

    category: "Hooks"
},

{
    id: 11,

    examSlug: "react-js-advanced",

    question: "Which Hook is used for complex state management in React?",

    options: [
        "useMemo",
        "useReducer",
        "useRef",
        "useEffect"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "useReducer is useful when state logic is complex or has multiple related values.",

    difficulty: "Medium",

    category: "Hooks"
},

{
    id: 12,

    examSlug: "react-js-advanced",

    question: "Which Hook is used to share data without prop drilling?",

    options: [
        "useContext",
        "useMemo",
        "useState",
        "useRef"
    ],

    correctAnswer: 0,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "useContext allows components to access shared data without passing props manually.",

    difficulty: "Medium",

    category: "Context API"
},

{
    id: 13,

    examSlug: "react-js-advanced",

    question: "What is a Custom Hook?",

    options: [
        "A built-in React Hook",
        "A JavaScript library",
        "A reusable function that uses React Hooks",
        "A Redux function"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "Custom Hooks let you reuse stateful logic across components.",

    difficulty: "Medium",

    category: "Custom Hooks"
},

{
    id: 14,

    examSlug: "react-js-advanced",

    question: "Which Hook should only be called at the top level of a component?",

    options: [
        "Only useState",
        "Only useEffect",
        "All React Hooks",
        "Only useRef"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "React Hooks must always be called at the top level to maintain hook order.",

    difficulty: "Medium",

    category: "Hooks"
},

{
    id: 15,

    examSlug: "react-js-advanced",

    question: "Which attribute is commonly used to create controlled form inputs in React?",

    options: [
        "defaultValue",
        "value",
        "placeholder",
        "selected"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "Controlled components use the value prop together with onChange.",

    difficulty: "Medium",

    category: "Forms"
},

{
    id: 16,

    examSlug: "react-js-advanced",

    question: "Which event is commonly used to update input state in React?",

    options: [
        "onClick",
        "onSubmit",
        "onChange",
        "onLoad"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "onChange is used to update state as the input value changes.",

    difficulty: "Easy",

    category: "Events"
},

{
    id: 17,

    examSlug: "react-js-advanced",

    question: "Which statement is commonly used for conditional rendering in JSX?",

    options: [
        "if...else only",
        "switch only",
        "Ternary operator (condition ? A : B)",
        "goto"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "The ternary operator is widely used for conditional rendering in JSX.",

    difficulty: "Easy",

    category: "Rendering"
},

{
    id: 18,

    examSlug: "react-js-advanced",

    question: "Which method is commonly used to render a list of items in React?",

    options: [
        "forEach()",
        "map()",
        "filter()",
        "find()"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "map() returns a new array of JSX elements for rendering.",

    difficulty: "Easy",

    category: "Lists"
},

{
    id: 19,

    examSlug: "react-js-advanced",

    question: "Why should each item in a rendered list have a unique key?",

    options: [
        "To improve CSS styling",
        "To help React identify changed elements efficiently",
        "To increase API speed",
        "To make JSX shorter"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "Keys help React efficiently update and reorder list items.",

    difficulty: "Medium",

    category: "Lists"
},

{
    id: 20,

    examSlug: "react-js-advanced",

    question: "Which React component allows grouping multiple elements without adding an extra DOM node?",

    options: [
        "<Container>",
        "<Wrapper>",
        "<Fragment>",
        "<Section>"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "React.Fragment (or <></>) groups elements without creating an additional DOM element.",

    difficulty: "Medium",

    category: "JSX"
},
{
    id: 11,

    examSlug: "react-js-advanced",

    question: "Which Hook is used for complex state management in React?",

    options: [
        "useMemo",
        "useReducer",
        "useRef",
        "useEffect"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "useReducer is useful when state logic is complex or has multiple related values.",

    difficulty: "Medium",

    category: "Hooks"
},

{
    id: 12,

    examSlug: "react-js-advanced",

    question: "Which Hook is used to share data without prop drilling?",

    options: [
        "useContext",
        "useMemo",
        "useState",
        "useRef"
    ],

    correctAnswer: 0,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "useContext allows components to access shared data without passing props manually.",

    difficulty: "Medium",

    category: "Context API"
},

{
    id: 13,

    examSlug: "react-js-advanced",

    question: "What is a Custom Hook?",

    options: [
        "A built-in React Hook",
        "A JavaScript library",
        "A reusable function that uses React Hooks",
        "A Redux function"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "Custom Hooks let you reuse stateful logic across components.",

    difficulty: "Medium",

    category: "Custom Hooks"
},

{
    id: 14,

    examSlug: "react-js-advanced",

    question: "Which Hook should only be called at the top level of a component?",

    options: [
        "Only useState",
        "Only useEffect",
        "All React Hooks",
        "Only useRef"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "React Hooks must always be called at the top level to maintain hook order.",

    difficulty: "Medium",

    category: "Hooks"
},

{
    id: 15,

    examSlug: "react-js-advanced",

    question: "Which attribute is commonly used to create controlled form inputs in React?",

    options: [
        "defaultValue",
        "value",
        "placeholder",
        "selected"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "Controlled components use the value prop together with onChange.",

    difficulty: "Medium",

    category: "Forms"
},

{
    id: 16,

    examSlug: "react-js-advanced",

    question: "Which event is commonly used to update input state in React?",

    options: [
        "onClick",
        "onSubmit",
        "onChange",
        "onLoad"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "onChange is used to update state as the input value changes.",

    difficulty: "Easy",

    category: "Events"
},

{
    id: 17,

    examSlug: "react-js-advanced",

    question: "Which statement is commonly used for conditional rendering in JSX?",

    options: [
        "if...else only",
        "switch only",
        "Ternary operator (condition ? A : B)",
        "goto"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "The ternary operator is widely used for conditional rendering in JSX.",

    difficulty: "Easy",

    category: "Rendering"
},

{
    id: 18,

    examSlug: "react-js-advanced",

    question: "Which method is commonly used to render a list of items in React?",

    options: [
        "forEach()",
        "map()",
        "filter()",
        "find()"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "map() returns a new array of JSX elements for rendering.",

    difficulty: "Easy",

    category: "Lists"
},

{
    id: 19,

    examSlug: "react-js-advanced",

    question: "Why should each item in a rendered list have a unique key?",

    options: [
        "To improve CSS styling",
        "To help React identify changed elements efficiently",
        "To increase API speed",
        "To make JSX shorter"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "Keys help React efficiently update and reorder list items.",

    difficulty: "Medium",

    category: "Lists"
},

{
    id: 20,

    examSlug: "react-js-advanced",

    question: "Which React component allows grouping multiple elements without adding an extra DOM node?",

    options: [
        "<Container>",
        "<Wrapper>",
        "<Fragment>",
        "<Section>"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "React.Fragment (or <></>) groups elements without creating an additional DOM element.",

    difficulty: "Medium",

    category: "JSX"
},

{
    id: 31,

    examSlug: "react-js-advanced",

    question: "Which function is used to create a Context in React?",

    options: [
        "createStore()",
        "createContext()",
        "useContext()",
        "ContextProvider()"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "createContext() creates a Context object that can be shared across components.",

    difficulty: "Medium",

    category: "Context API"
},

{
    id: 32,

    examSlug: "react-js-advanced",

    question: "Which component makes Context data available to child components?",

    options: [
        "<Consumer>",
        "<Provider>",
        "<Context>",
        "<Store>"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "The Provider component supplies Context values to all descendant components.",

    difficulty: "Medium",

    category: "Context API"
},

{
    id: 33,

    examSlug: "react-js-advanced",

    question: "Which Hook is used to consume Context values?",

    options: [
        "useReducer()",
        "useContext()",
        "useState()",
        "useMemo()"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "useContext() allows functional components to access Context values.",

    difficulty: "Easy",

    category: "Context API"
},

{
    id: 34,

    examSlug: "react-js-advanced",

    question: "What problem does Context API primarily solve?",

    options: [
        "API Calls",
        "Prop Drilling",
        "Routing",
        "Animations"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "Context API reduces the need to pass props through multiple component levels.",

    difficulty: "Medium",

    category: "Context API"
},

{
    id: 35,

    examSlug: "react-js-advanced",

    question: "Which package provides Redux Toolkit?",

    options: [
        "redux",
        "@reduxjs/toolkit",
        "react-redux",
        "redux-toolkit"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "@reduxjs/toolkit is the official package for Redux Toolkit.",

    difficulty: "Medium",

    category: "Redux Toolkit"
},

{
    id: 36,

    examSlug: "react-js-advanced",

    question: "Which function creates a Redux store in Redux Toolkit?",

    options: [
        "createStore()",
        "configureStore()",
        "createReducer()",
        "setupStore()"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "configureStore() is the recommended way to create a Redux store.",

    difficulty: "Medium",

    category: "Redux Toolkit"
},

{
    id: 37,

    examSlug: "react-js-advanced",

    question: "Which function is used to create reducers and actions together in Redux Toolkit?",

    options: [
        "createReducer()",
        "createStore()",
        "createSlice()",
        "combineReducers()"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "createSlice() automatically generates reducers and action creators.",

    difficulty: "Medium",

    category: "Redux Toolkit"
},

{
    id: 38,

    examSlug: "react-js-advanced",

    question: "Which Hook is used to read data from the Redux store?",

    options: [
        "useStore()",
        "useDispatch()",
        "useSelector()",
        "useContext()"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "useSelector() reads state values from the Redux store.",

    difficulty: "Easy",

    category: "Redux Toolkit"
},

{
    id: 39,

    examSlug: "react-js-advanced",

    question: "Which Hook is used to dispatch Redux actions?",

    options: [
        "useSelector()",
        "useReducer()",
        "useDispatch()",
        "dispatchAction()"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "useDispatch() returns the dispatch function for sending actions to the Redux store.",

    difficulty: "Easy",

    category: "Redux Toolkit"
},

{
    id: 40,

    examSlug: "react-js-advanced",

    question: "What is the main advantage of Redux Toolkit over traditional Redux?",

    options: [
        "Requires more boilerplate code",
        "Simplifies Redux setup with less boilerplate",
        "Removes reducers completely",
        "Works only with TypeScript"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "Redux Toolkit reduces boilerplate and follows Redux best practices by default.",

    difficulty: "Medium",

    category: "Redux Toolkit"
},

{
    id: 41,

    examSlug: "react-js-advanced",

    question: "Which Hook is commonly used to fetch API data after a component mounts?",

    options: [
        "useRef()",
        "useEffect()",
        "useMemo()",
        "useCallback()"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "useEffect() is commonly used to perform API calls after a component renders.",

    difficulty: "Easy",

    category: "API"
},

{
    id: 42,

    examSlug: "react-js-advanced",

    question: "Which API is built into modern browsers for making HTTP requests?",

    options: [
        "Axios",
        "Fetch API",
        "jQuery AJAX",
        "XML"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "Fetch API is built into modern browsers and is commonly used in React applications.",

    difficulty: "Easy",

    category: "API"
},

{
    id: 43,

    examSlug: "react-js-advanced",

    question: "Which library is commonly used in React for making HTTP requests?",

    options: [
        "Redux",
        "Axios",
        "ReactDOM",
        "Framer Motion"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "Axios is a popular HTTP client for React and JavaScript applications.",

    difficulty: "Easy",

    category: "API"
},

{
    id: 44,

    examSlug: "react-js-advanced",

    question: "Which React feature helps prevent unnecessary re-rendering of functional components?",

    options: [
        "React.memo()",
        "useState()",
        "useEffect()",
        "createContext()"
    ],

    correctAnswer: 0,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "React.memo() memoizes a component and skips re-rendering if props have not changed.",

    difficulty: "Medium",

    category: "Performance"
},

{
    id: 45,

    examSlug: "react-js-advanced",

    question: "When should useMemo() generally be used?",

    options: [
        "To store API URLs",
        "To memoize expensive calculations",
        "To create routes",
        "To update state"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "useMemo() caches expensive computed values until dependencies change.",

    difficulty: "Medium",

    category: "Performance"
},

{
    id: 46,

    examSlug: "react-js-advanced",

    question: "When should useCallback() generally be used?",

    options: [
        "To memoize functions",
        "To store CSS",
        "To create Context",
        "To fetch API data"
    ],

    correctAnswer: 0,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "useCallback() prevents unnecessary recreation of functions between renders.",

    difficulty: "Medium",

    category: "Performance"
},

{
    id: 47,

    examSlug: "react-js-advanced",

    question: "What is the primary purpose of an Error Boundary in React?",

    options: [
        "Improve routing",
        "Catch JavaScript errors in the component tree",
        "Optimize performance",
        "Manage Redux state"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "Error Boundaries catch rendering errors and display a fallback UI instead of crashing the app.",

    difficulty: "Hard",

    category: "Error Handling"
},

{
    id: 48,

    examSlug: "react-js-advanced",

    question: "Which React feature is commonly used for code splitting?",

    options: [
        "React.lazy()",
        "useReducer()",
        "useContext()",
        "createRoot()"
    ],

    correctAnswer: 0,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "React.lazy() loads components only when they are needed.",

    difficulty: "Hard",

    category: "Performance"
},

{
    id: 49,

    examSlug: "react-js-advanced",

    question: "Which component is required to display a fallback UI while a lazy-loaded component is loading?",

    options: [
        "<Loader>",
        "<Fallback>",
        "<Suspense>",
        "<Fragment>"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "Suspense displays fallback content until the lazy component finishes loading.",

    difficulty: "Medium",

    category: "Performance"
},

{
    id: 50,

    examSlug: "react-js-advanced",

    question: "Which practice generally improves the performance of large React applications?",

    options: [
        "Rendering everything at once",
        "Using React.memo, lazy loading, and memoization where appropriate",
        "Using only class components",
        "Avoiding component reuse"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "Combining memoization, lazy loading, and reusable components helps improve performance.",

    difficulty: "Hard",

    category: "Performance"
},

{
    id: 51,

    examSlug: "react-js-advanced",

    question: "What is the primary purpose of Protected Routes in React applications?",

    options: [
        "Improve CSS performance",
        "Restrict access to authenticated users",
        "Optimize API requests",
        "Create dynamic routes"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "Protected Routes allow only authenticated users to access specific pages.",

    difficulty: "Medium",

    category: "Authentication"
},

{
    id: 52,

    examSlug: "react-js-advanced",

    question: "Where should API URLs and secret configuration values generally be stored in a React project?",

    options: [
        "Inside every component",
        "Environment Variables (.env)",
        "package.json",
        "CSS files"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "Environment variables help manage configuration separately from the source code.",

    difficulty: "Medium",

    category: "Environment"
},

{
    id: 53,

    examSlug: "react-js-advanced",

    question: "What is the main advantage of creating a Custom Hook?",

    options: [
        "Increase bundle size",
        "Reuse stateful logic across components",
        "Replace Context API",
        "Replace Redux"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "Custom Hooks improve code reusability and organization.",

    difficulty: "Medium",

    category: "Custom Hooks"
},

{
    id: 54,

    examSlug: "react-js-advanced",

    question: "What is the Virtual DOM?",

    options: [
        "A copy of the real DOM kept in memory",
        "A browser extension",
        "A database",
        "A CSS engine"
    ],

    correctAnswer: 0,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "React updates the Virtual DOM first and then efficiently updates the real DOM.",

    difficulty: "Hard",

    category: "Virtual DOM"
},

{
    id: 55,

    examSlug: "react-js-advanced",

    question: "What is React Reconciliation?",

    options: [
        "Database synchronization",
        "The process of comparing Virtual DOM trees and updating the real DOM efficiently",
        "Redux state management",
        "React Router navigation"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "Reconciliation is React's algorithm for updating the UI efficiently.",

    difficulty: "Hard",

    category: "Virtual DOM"
},

{
    id: 56,

    examSlug: "react-js-advanced",

    question: "Which type of key is recommended when rendering lists in React?",

    options: [
        "Array index in every situation",
        "A stable and unique ID",
        "Random numbers",
        "Current timestamp"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "Stable unique IDs help React correctly identify list items during updates.",

    difficulty: "Medium",

    category: "Lists"
},

{
    id: 57,

    examSlug: "react-js-advanced",

    question: "What is the purpose of React.StrictMode?",

    options: [
        "Improve CSS styling",
        "Highlight potential problems during development",
        "Increase production performance",
        "Handle API requests"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "StrictMode performs additional development checks and warnings without affecting production builds.",

    difficulty: "Medium",

    category: "Best Practices"
},

{
    id: 58,

    examSlug: "react-js-advanced",

    question: "Which command creates an optimized production build in a Vite React project?",

    options: [
        "npm run dev",
        "npm run build",
        "npm start",
        "npm install"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "npm run build generates an optimized production-ready build.",

    difficulty: "Easy",

    category: "Deployment"
},

{
    id: 59,

    examSlug: "react-js-advanced",

    question: "Which approach is considered a React best practice?",

    options: [
        "Keep all logic inside one large component",
        "Create small reusable components",
        "Avoid using Hooks",
        "Store everything in global state"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "Reusable, modular components improve maintainability and scalability.",

    difficulty: "Medium",

    category: "Best Practices"
},

{
    id: 60,

    examSlug: "react-js-advanced",

    question: "For a large React application, which architecture is generally recommended?",

    options: [
        "Put every file in a single folder",
        "Organize by features with reusable components and proper state management",
        "Keep all code inside App.jsx",
        "Avoid separating business logic"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "Feature-based architecture with reusable components and proper state management improves scalability and maintainability.",

    difficulty: "Hard",

    category: "Architecture"
}

];