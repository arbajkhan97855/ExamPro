export const javascriptQuestions = [

{
id: 1,
examSlug: "javascript-fundamentals",
question: "Which keyword is used to declare a variable in JavaScript?",
options: ["int", "var", "let", "Both var and let"],
correctAnswer: 3,
marks: 2,
negativeMarks: 0,
explanation: "Both var and let can declare variables. let is preferred in modern JavaScript.",
difficulty: "Easy",
category: "Variables"
},

{
id: 2,
examSlug: "javascript-fundamentals",
question: "Which keyword is used to declare a constant variable?",
options: ["let", "var", "const", "constant"],
correctAnswer: 2,
marks: 2,
negativeMarks: 0,
explanation: "const creates variables whose reference cannot be reassigned.",
difficulty: "Easy",
category: "Variables"
},

{
id: 3,
examSlug: "javascript-fundamentals",
question: "Which operator is used for strict equality comparison?",
options: ["==", "=", "===", "!="],
correctAnswer: 2,
marks: 2,
negativeMarks: 0,
explanation: "=== compares both value and datatype.",
difficulty: "Easy",
category: "Operators"
},

{
id: 4,
examSlug: "javascript-fundamentals",
question: "What is the output of typeof null?",
options: ["null", "object", "undefined", "boolean"],
correctAnswer: 1,
marks: 2,
negativeMarks: 0,
explanation: "typeof null returns 'object' due to a historical JavaScript bug.",
difficulty: "Medium",
category: "Data Types"
},

{
id: 5,
examSlug: "javascript-fundamentals",
question: "Which method adds an element to the end of an array?",
options: ["push()", "pop()", "shift()", "unshift()"],
correctAnswer: 0,
marks: 2,
negativeMarks: 0,
explanation: "push() adds elements at the end.",
difficulty: "Easy",
category: "Arrays"
},

{
id: 6,
examSlug: "javascript-fundamentals",
question: "Which method removes the last element from an array?",
options: ["shift()", "splice()", "pop()", "slice()"],
correctAnswer: 2,
marks: 2,
negativeMarks: 0,
explanation: "pop() removes the last element.",
difficulty: "Easy",
category: "Arrays"
},

{
id: 7,
examSlug: "javascript-fundamentals",
question: "Which loop executes at least once?",
options: ["for", "while", "do...while", "for...of"],
correctAnswer: 2,
marks: 2,
negativeMarks: 0,
explanation: "do...while executes once before checking the condition.",
difficulty: "Easy",
category: "Loops"
},

{
id: 8,
examSlug: "javascript-fundamentals",
question: "Which statement is used to stop a loop?",
options: ["continue", "break", "return", "exit"],
correctAnswer: 1,
marks: 2,
negativeMarks: 0,
explanation: "break immediately terminates the loop.",
difficulty: "Easy",
category: "Loops"
},

{
id: 9,
examSlug: "javascript-fundamentals",
question: "Which function converts JSON string into JavaScript object?",
options: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.convert()"],
correctAnswer: 0,
marks: 2,
negativeMarks: 0,
explanation: "JSON.parse() converts JSON string into object.",
difficulty: "Easy",
category: "JSON"
},

{
id: 10,
examSlug: "javascript-fundamentals",
question: "Which method converts JavaScript object into JSON string?",
options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toString()"],
correctAnswer: 1,
marks: 2,
negativeMarks: 0,
explanation: "JSON.stringify() converts object into JSON string.",
difficulty: "Easy",
category: "JSON"
},

{
id: 11,
examSlug: "javascript-fundamentals",
question: "Which method is used to select an element by id?",
options: ["querySelector()", "getElementById()", "getElementsByClassName()", "getElement()"],
correctAnswer: 1,
marks: 2,
negativeMarks: 0,
explanation: "getElementById() returns an element by id.",
difficulty: "Easy",
category: "DOM"
},

{
id: 12,
examSlug: "javascript-fundamentals",
question: "Which event occurs when a user clicks an element?",
options: ["hover", "click", "load", "submit"],
correctAnswer: 1,
marks: 2,
negativeMarks: 0,
explanation: "click event fires when an element is clicked.",
difficulty: "Easy",
category: "Events"
},

{
id: 13,
examSlug: "javascript-fundamentals",
question: "Which array method creates a new array by applying a function?",
options: ["filter()", "map()", "reduce()", "forEach()"],
correctAnswer: 1,
marks: 2,
negativeMarks: 0,
explanation: "map() returns a transformed array.",
difficulty: "Medium",
category: "Arrays"
},

{
id: 14,
examSlug: "javascript-fundamentals",
question: "Which array method filters elements based on a condition?",
options: ["map()", "reduce()", "filter()", "find()"],
correctAnswer: 2,
marks: 2,
negativeMarks: 0,
explanation: "filter() returns matching elements.",
difficulty: "Medium",
category: "Arrays"
},

{
id: 15,
examSlug: "javascript-fundamentals",
question: "Which keyword refers to the current object?",
options: ["self", "this", "current", "object"],
correctAnswer: 1,
marks: 2,
negativeMarks: 0,
explanation: "this refers to the current execution context.",
difficulty: "Medium",
category: "Objects"
},

{
id: 16,
examSlug: "javascript-fundamentals",
question: "Which function delays execution once?",
options: ["setInterval()", "setTimeout()", "delay()", "timer()"],
correctAnswer: 1,
marks: 2,
negativeMarks: 0,
explanation: "setTimeout() executes only once.",
difficulty: "Medium",
category: "Timers"
},

{
id: 17,
examSlug: "javascript-fundamentals",
question: "Which function repeats execution after an interval?",
options: ["setTimeout()", "repeat()", "setInterval()", "loop()"],
correctAnswer: 2,
marks: 2,
negativeMarks: 0,
explanation: "setInterval() executes repeatedly.",
difficulty: "Medium",
category: "Timers"
},

{
id: 18,
examSlug: "javascript-fundamentals",
question: "Which symbol is used for arrow functions?",
options: ["=>", "->", "==>", "<="],
correctAnswer: 0,
marks: 2,
negativeMarks: 0,
explanation: "Arrow functions use => syntax.",
difficulty: "Medium",
category: "Functions"
},

{
id: 19,
examSlug: "javascript-fundamentals",
question: "What does NaN stand for?",
options: ["No assigned Number", "Not a Number", "New Number", "Null and Number"],
correctAnswer: 1,
marks: 2,
negativeMarks: 0,
explanation: "NaN means Not a Number.",
difficulty: "Easy",
category: "Numbers"
},

{
id: 20,
examSlug: "javascript-fundamentals",
question: "Which method joins array elements into a string?",
options: ["concat()", "join()", "split()", "merge()"],
correctAnswer: 1,
marks: 2,
negativeMarks: 0,
explanation: "join() combines array elements into a string.",
difficulty: "Medium",
category: "Arrays"
},

{
id: 21,
examSlug: "javascript-fundamentals",
question: "Which method converts a string into an array?",
options: ["join()", "split()", "slice()", "splice()"],
correctAnswer: 1,
marks: 2,
negativeMarks: 0,
explanation: "split() converts string into array.",
difficulty: "Medium",
category: "Strings"
},

{
id: 22,
examSlug: "javascript-fundamentals",
question: "Which keyword is used to handle exceptions?",
options: ["catch", "try", "throw", "All of these"],
correctAnswer: 3,
marks: 2,
negativeMarks: 0,
explanation: "JavaScript uses try, catch and throw for exception handling.",
difficulty: "Medium",
category: "Error Handling"
},

{
id: 23,
examSlug: "javascript-fundamentals",
question: "Which method returns the first matching element?",
options: ["filter()", "find()", "map()", "reduce()"],
correctAnswer: 1,
marks: 2,
negativeMarks: 0,
explanation: "find() returns the first matching element.",
difficulty: "Medium",
category: "Arrays"
},

{
id: 24,
examSlug: "javascript-fundamentals",
question: "What is the default value of an uninitialized variable?",
options: ["null", "0", "undefined", "false"],
correctAnswer: 2,
marks: 2,
negativeMarks: 0,
explanation: "Variables declared without value are undefined.",
difficulty: "Easy",
category: "Variables"
},

{
id: 25,
examSlug: "javascript-fundamentals",
question: "Which operator is used to spread array elements?",
options: ["...", "*", "=>", "&"],
correctAnswer: 0,
marks: 2,
negativeMarks: 0,
explanation: "Spread operator (...) expands iterable elements.",
difficulty: "Medium",
category: "ES6"
},

{
id: 26,
examSlug: "javascript-fundamentals",
question: "Which keyword is used to create a class?",
options: ["object", "prototype", "class", "Class"],
correctAnswer: 2,
marks: 2,
negativeMarks: 0,
explanation: "ES6 introduced the class keyword.",
difficulty: "Medium",
category: "Classes"
},

{
id: 27,
examSlug: "javascript-fundamentals",
question: "Which keyword is used for inheritance in classes?",
options: ["implements", "inherits", "extends", "super"],
correctAnswer: 2,
marks: 2,
negativeMarks: 0,
explanation: "extends is used for inheritance.",
difficulty: "Medium",
category: "Classes"
},

{
id: 28,
examSlug: "javascript-fundamentals",
question: "Which keyword calls the parent constructor?",
options: ["this", "parent", "base", "super"],
correctAnswer: 3,
marks: 2,
negativeMarks: 0,
explanation: "super() calls the parent constructor.",
difficulty: "Medium",
category: "Classes"
},

{
id: 29,
examSlug: "javascript-fundamentals",
question: "Which API is used to make network requests in modern JavaScript?",
options: ["fetch()", "ajax()", "request()", "http()"],
correctAnswer: 0,
marks: 2,
negativeMarks: 0,
explanation: "fetch() is the modern API for HTTP requests.",
difficulty: "Medium",
category: "API"
},

{
id: 30,
examSlug: "javascript-fundamentals",
question: "Promises are mainly used for?",
options: ["Loops", "Asynchronous programming", "Arrays", "Objects"],
correctAnswer: 1,
marks: 2,
negativeMarks: 0,
explanation: "Promises handle asynchronous operations.",
difficulty: "Medium",
category: "Promises"
},

{
id: 31,
examSlug: "javascript-fundamentals",
question: "Which keyword waits for a Promise to resolve?",
options: ["wait", "async", "await", "resolve"],
correctAnswer: 2,
marks: 2,
negativeMarks: 0,
explanation: "await pauses execution until Promise resolves.",
difficulty: "Hard",
category: "Async/Await"
},

{
id: 32,
examSlug: "javascript-fundamentals",
question: "Which keyword is required before using await?",
options: ["function", "async", "await", "promise"],
correctAnswer: 1,
marks: 2,
negativeMarks: 0,
explanation: "await can only be used inside async functions.",
difficulty: "Hard",
category: "Async/Await"
},

{
id: 33,
examSlug: "javascript-fundamentals",
question: "Which scope does let have?",
options: ["Global only", "Block Scope", "Function Scope", "No Scope"],
correctAnswer: 1,
marks: 2,
negativeMarks: 0,
explanation: "let variables are block scoped.",
difficulty: "Medium",
category: "Scope"
},

{
id: 34,
examSlug: "javascript-fundamentals",
question: "Which scope does var have?",
options: ["Block Scope", "Function Scope", "Class Scope", "Module Scope"],
correctAnswer: 1,
marks: 2,
negativeMarks: 0,
explanation: "var is function scoped.",
difficulty: "Medium",
category: "Scope"
},

{
id: 35,
examSlug: "javascript-fundamentals",
question: "Closures are created when?",
options: ["A function remembers outer variables", "Creating arrays", "Using objects", "Using loops"],
correctAnswer: 0,
marks: 2,
negativeMarks: 0,
explanation: "Closures allow functions to access outer scope variables.",
difficulty: "Hard",
category: "Closures"
},

{
id: 36,
examSlug: "javascript-fundamentals",
question: "What is event bubbling?",
options: ["Event moves from child to parent", "Parent to child", "Stops event", "Creates event"],
correctAnswer: 0,
marks: 2,
negativeMarks: 0,
explanation: "Events propagate upward from child to parent.",
difficulty: "Hard",
category: "Events"
},

{
id: 37,
examSlug: "javascript-fundamentals",
question: "Which storage persists even after browser restart?",
options: ["sessionStorage", "localStorage", "cookies", "cache"],
correctAnswer: 1,
marks: 2,
negativeMarks: 0,
explanation: "localStorage persists until manually cleared.",
difficulty: "Medium",
category: "Web Storage"
},

{
id: 38,
examSlug: "javascript-fundamentals",
question: "Which storage is cleared after the browser tab is closed?",
options: ["localStorage", "sessionStorage", "cookies", "cache"],
correctAnswer: 1,
marks: 2,
negativeMarks: 0,
explanation: "sessionStorage exists only for the current tab session.",
difficulty: "Medium",
category: "Web Storage"
},

{
id: 39,
examSlug: "javascript-fundamentals",
question: "Which method prevents default browser behavior?",
options: ["stopPropagation()", "preventDefault()", "stop()", "cancelEvent()"],
correctAnswer: 1,
marks: 2,
negativeMarks: 0,
explanation: "preventDefault() stops default browser action.",
difficulty: "Hard",
category: "Events"
},

{
id: 40,
examSlug: "javascript-fundamentals",
question: "Which JavaScript version introduced let, const, classes, arrow functions and promises?",
options: ["ES3", "ES5", "ES6 (ES2015)", "ES7"],
correctAnswer: 2,
marks: 2,
negativeMarks: 0,
explanation: "ES6 introduced many modern JavaScript features.",
difficulty: "Hard",
category: "ES6"
}

];