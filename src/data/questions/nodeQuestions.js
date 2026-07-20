export const nodeQuestions = [

{
    id: 1,

    examSlug: "nodejs-backend",

    question:
        "What is Node.js?",

    options: [
        "A JavaScript Runtime Environment",
        "A JavaScript Framework",
        "A Database",
        "A Programming Language"
    ],

    correctAnswer: 0,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "Node.js is a JavaScript runtime built on Google's V8 JavaScript Engine.",

    difficulty: "Easy",

    category: "Node.js Basics"
},

{
    id: 2,

    examSlug: "nodejs-backend",

    question:
        "Which JavaScript engine powers Node.js?",

    options: [
        "SpiderMonkey",
        "V8 Engine",
        "JavaScriptCore",
        "Chakra"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "Node.js uses Google's high-performance V8 JavaScript Engine.",

    difficulty: "Easy",

    category: "V8 Engine"
},

{
    id: 3,

    examSlug: "nodejs-backend",

    question:
        "Which command is used to check the installed Node.js version?",

    options: [
        "node --version",
        "node version",
        "npm version",
        "node -check"
    ],

    correctAnswer: 0,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "node --version or node -v displays the installed Node.js version.",

    difficulty: "Easy",

    category: "Installation"
},

{
    id: 4,

    examSlug: "nodejs-backend",

    question:
        "Which command initializes a new Node.js project?",

    options: [
        "npm create",
        "npm init",
        "node init",
        "npm install"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "npm init creates a package.json file for a new project.",

    difficulty: "Easy",

    category: "NPM"
},

{
    id: 5,

    examSlug: "nodejs-backend",

    question:
        "Which file stores project metadata and dependencies in Node.js?",

    options: [
        "node_modules.json",
        "package.json",
        "config.json",
        "app.json"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "package.json contains project information, scripts and dependencies.",

    difficulty: "Easy",

    category: "package.json"
},

{
    id: 6,

    examSlug: "nodejs-backend",

    question:
        "Which command installs all dependencies listed in package.json?",

    options: [
        "node install",
        "npm install",
        "npm start",
        "npm update"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "npm install installs all dependencies defined in package.json.",

    difficulty: "Easy",

    category: "NPM"
},

{
    id: 7,

    examSlug: "nodejs-backend",

    question:
        "Which folder contains installed npm packages?",

    options: [
        "packages",
        "dependencies",
        "node_modules",
        "modules"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "All installed packages are stored inside the node_modules directory.",

    difficulty: "Easy",

    category: "NPM"
},

{
    id: 8,

    examSlug: "nodejs-backend",

    question:
        "Which function is used to import a CommonJS module?",

    options: [
        "import",
        "include",
        "require()",
        "using"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "require() imports modules in the CommonJS module system.",

    difficulty: "Easy",

    category: "Modules"
},

{
    id: 9,

    examSlug: "nodejs-backend",

    question:
        "Which object is used to export functions in CommonJS?",

    options: [
        "exports.module",
        "module.exports",
        "export.default",
        "require.exports"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "module.exports exports functions, objects or values from a module.",

    difficulty: "Easy",

    category: "Modules"
},

{
    id: 10,

    examSlug: "nodejs-backend",

    question:
        "Which built-in module is used to create an HTTP server?",

    options: [
        "server",
        "express",
        "http",
        "net"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "The built-in http module is used to create HTTP servers without Express.",

    difficulty: "Easy",

    category: "HTTP"
},

{
    id: 11,

    examSlug: "nodejs-backend",

    question:
        "Which built-in module is used to work with the file system?",

    options: [
        "file",
        "fs",
        "path",
        "os"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "The fs (File System) module is used to create, read, update and delete files.",

    difficulty: "Easy",

    category: "File System"
},

{
    id: 12,

    examSlug: "nodejs-backend",

    question:
        "Which method reads a file asynchronously?",

    options: [
        "fs.read()",
        "fs.readFile()",
        "fs.openFile()",
        "fs.getFile()"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "fs.readFile() reads a file asynchronously without blocking the event loop.",

    difficulty: "Easy",

    category: "File System"
},

{
    id: 13,

    examSlug: "nodejs-backend",

    question:
        "Which method writes data to a file asynchronously?",

    options: [
        "fs.write()",
        "fs.writeFile()",
        "fs.saveFile()",
        "fs.createFile()"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "fs.writeFile() creates or overwrites a file asynchronously.",

    difficulty: "Easy",

    category: "File System"
},

{
    id: 14,

    examSlug: "nodejs-backend",

    question:
        "Which built-in module is used to work with file and directory paths?",

    options: [
        "url",
        "path",
        "fs",
        "process"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "The path module provides utilities for handling file and directory paths.",

    difficulty: "Easy",

    category: "Path Module"
},

{
    id: 15,

    examSlug: "nodejs-backend",

    question:
        "Which method joins multiple path segments into a single path?",

    options: [
        "path.combine()",
        "path.concat()",
        "path.join()",
        "path.merge()"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "path.join() joins multiple path segments using the correct separator.",

    difficulty: "Easy",

    category: "Path Module"
},

{
    id: 16,

    examSlug: "nodejs-backend",

    question:
        "Which built-in module provides information about the operating system?",

    options: [
        "system",
        "os",
        "process",
        "machine"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "The os module provides operating system related information.",

    difficulty: "Easy",

    category: "OS Module"
},

{
    id: 17,

    examSlug: "nodejs-backend",

    question:
        "Which class is used to create and handle custom events in Node.js?",

    options: [
        "EventHandler",
        "EventEmitter",
        "Emitter",
        "CustomEvent"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "The EventEmitter class is used to create and handle custom events.",

    difficulty: "Medium",

    category: "Events"
},

{
    id: 18,

    examSlug: "nodejs-backend",

    question:
        "What is the main advantage of Node.js?",

    options: [
        "It is synchronous by default",
        "It uses a non-blocking event-driven architecture",
        "It only works with SQL databases",
        "It requires Java Virtual Machine"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "Node.js uses an event-driven, non-blocking I/O model which makes it efficient for scalable applications.",

    difficulty: "Medium",

    category: "Node.js Basics"
},

{
    id: 19,

    examSlug: "nodejs-backend",

    question:
        "What is the Event Loop in Node.js?",

    options: [
        "A database engine",
        "A mechanism that handles asynchronous operations",
        "A package manager",
        "A web server"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "The Event Loop enables Node.js to perform non-blocking asynchronous operations.",

    difficulty: "Medium",

    category: "Event Loop"
},

{
    id: 20,

    examSlug: "nodejs-backend",

    question:
        "Which global object provides information about the currently running Node.js process?",

    options: [
        "window",
        "document",
        "process",
        "globalThis"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "The process object provides information and control over the current Node.js process.",

    difficulty: "Medium",

    category: "Process"
},

{
    id: 21,

    examSlug: "nodejs-backend",

    question:
        "What is a Buffer in Node.js?",

    options: [
        "A database",
        "A temporary storage for binary data",
        "A routing module",
        "An Express middleware"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "A Buffer stores raw binary data and is commonly used while working with files, streams, and network operations.",

    difficulty: "Medium",

    category: "Buffer"
},

{
    id: 22,

    examSlug: "nodejs-backend",

    question:
        "Which method is used to create a Buffer from a string?",

    options: [
        "Buffer.make()",
        "Buffer.alloc()",
        "Buffer.from()",
        "new Buffer()"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "Buffer.from() creates a Buffer from a string, array, or ArrayBuffer.",

    difficulty: "Medium",

    category: "Buffer"
},

{
    id: 23,

    examSlug: "nodejs-backend",

    question:
        "What is a Stream in Node.js?",

    options: [
        "A database connection",
        "A way to process data piece by piece",
        "A routing technique",
        "A package manager"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "Streams allow efficient processing of large amounts of data without loading everything into memory.",

    difficulty: "Medium",

    category: "Streams"
},

{
    id: 24,

    examSlug: "nodejs-backend",

    question:
        "Which method creates a readable file stream?",

    options: [
        "fs.readFile()",
        "fs.createReadStream()",
        "fs.open()",
        "fs.stream()"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "fs.createReadStream() reads large files efficiently using streams.",

    difficulty: "Medium",

    category: "Streams"
},

{
    id: 25,

    examSlug: "nodejs-backend",

    question:
        "Which method creates a writable stream?",

    options: [
        "fs.createWriteStream()",
        "fs.writeFile()",
        "fs.write()",
        "fs.outputStream()"
    ],

    correctAnswer: 0,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "fs.createWriteStream() writes data continuously into a file.",

    difficulty: "Medium",

    category: "Streams"
},

{
    id: 26,

    examSlug: "nodejs-backend",

    question:
        "Which method connects a readable stream directly to a writable stream?",

    options: [
        "stream.link()",
        "stream.connect()",
        "pipe()",
        "join()"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "pipe() transfers data from a readable stream to a writable stream efficiently.",

    difficulty: "Medium",

    category: "Streams"
},

{
    id: 27,

    examSlug: "nodejs-backend",

    question:
        "Which package is most commonly used to build web servers in Node.js?",

    options: [
        "React",
        "Express",
        "Axios",
        "Bootstrap"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "Express.js is the most popular web framework for Node.js.",

    difficulty: "Easy",

    category: "Express.js"
},

{
    id: 28,

    examSlug: "nodejs-backend",

    question:
        "Which command installs Express.js?",

    options: [
        "npm express",
        "npm install express",
        "node install express",
        "express install"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "npm install express installs the Express framework.",

    difficulty: "Easy",

    category: "Express.js"
},

{
    id: 29,

    examSlug: "nodejs-backend",

    question:
        "Which function creates an Express application?",

    options: [
        "createExpress()",
        "express()",
        "new Express()",
        "app()"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "Calling express() creates an Express application instance.",

    difficulty: "Easy",

    category: "Express.js"
},

{
    id: 30,

    examSlug: "nodejs-backend",

    question:
        "Which method is used to create a GET route in Express?",

    options: [
        "app.route()",
        "app.fetch()",
        "app.get()",
        "app.request()"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "app.get() handles HTTP GET requests in Express applications.",

    difficulty: "Easy",

    category: "Express Routing"
},
{
    id: 31,

    examSlug: "nodejs-backend",

    question:
        "Which Express method is used to handle HTTP POST requests?",

    options: [
        "app.post()",
        "app.send()",
        "app.push()",
        "app.write()"
    ],

    correctAnswer: 0,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "app.post() is used to handle HTTP POST requests for creating new resources.",

    difficulty: "Easy",

    category: "Express Routing"
},

{
    id: 32,

    examSlug: "nodejs-backend",

    question:
        "Which Express method is used to update an existing resource?",

    options: [
        "app.create()",
        "app.update()",
        "app.put()",
        "app.modify()"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "app.put() is commonly used to update an existing resource in REST APIs.",

    difficulty: "Easy",

    category: "Express Routing"
},

{
    id: 33,

    examSlug: "nodejs-backend",

    question:
        "Which Express method is used to delete a resource?",

    options: [
        "app.remove()",
        "app.delete()",
        "app.destroy()",
        "app.clear()"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "app.delete() handles HTTP DELETE requests.",

    difficulty: "Easy",

    category: "Express Routing"
},

{
    id: 34,

    examSlug: "nodejs-backend",

    question:
        "Which Express feature helps organize routes into separate files?",

    options: [
        "express.RouteFile()",
        "express.Router()",
        "express.Path()",
        "express.Module()"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "express.Router() creates modular and reusable route handlers.",

    difficulty: "Medium",

    category: "Express Router"
},

{
    id: 35,

    examSlug: "nodejs-backend",

    question:
        "What is middleware in Express.js?",

    options: [
        "A database",
        "A function that executes between the request and response cycle",
        "A frontend framework",
        "A template engine"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "Middleware functions can modify requests, responses, or end the request-response cycle.",

    difficulty: "Medium",

    category: "Middleware"
},

{
    id: 36,

    examSlug: "nodejs-backend",

    question:
        "Which function passes control to the next middleware?",

    options: [
        "continue()",
        "next()",
        "forward()",
        "pass()"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "next() passes execution to the next middleware function in the stack.",

    difficulty: "Easy",

    category: "Middleware"
},

{
    id: 37,

    examSlug: "nodejs-backend",

    question:
        "Which object contains information sent by the client?",

    options: [
        "res",
        "req",
        "app",
        "router"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "The req (request) object contains headers, body, params, query, and other client data.",

    difficulty: "Easy",

    category: "Request Object"
},

{
    id: 38,

    examSlug: "nodejs-backend",

    question:
        "Which object is used to send data back to the client?",

    options: [
        "req",
        "response",
        "res",
        "send"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "The res (response) object is used to send responses to the client.",

    difficulty: "Easy",

    category: "Response Object"
},

{
    id: 39,

    examSlug: "nodejs-backend",

    question:
        "Which method sends a JSON response in Express?",

    options: [
        "res.sendJson()",
        "res.json()",
        "res.object()",
        "res.response()"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "res.json() automatically converts JavaScript objects into JSON format.",

    difficulty: "Easy",

    category: "Response"
},

{
    id: 40,

    examSlug: "nodejs-backend",

    question:
        "Which HTTP status code indicates a successful request?",

    options: [
        "404",
        "500",
        "200",
        "401"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "HTTP Status Code 200 means the request was successfully processed.",

    difficulty: "Easy",

    category: "HTTP Status Codes"
},
{
    id: 41,

    examSlug: "nodejs-backend",

    question:
        "What does REST stand for?",

    options: [
        "Representational State Transfer",
        "Remote State Transfer",
        "Representational Server Technology",
        "Remote Server Technology"
    ],

    correctAnswer: 0,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "REST (Representational State Transfer) is an architectural style used for designing web APIs.",

    difficulty: "Medium",

    category: "REST API"
},

{
    id: 42,

    examSlug: "nodejs-backend",

    question:
        "Which HTTP method is commonly used to create a new resource in a REST API?",

    options: [
        "GET",
        "POST",
        "PUT",
        "DELETE"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "POST is used to create a new resource on the server.",

    difficulty: "Easy",

    category: "REST API"
},

{
    id: 43,

    examSlug: "nodejs-backend",

    question:
        "Which JavaScript keyword is used to wait for a Promise to resolve?",

    options: [
        "wait",
        "async",
        "await",
        "resolve"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "The await keyword pauses execution until the Promise is resolved or rejected.",

    difficulty: "Medium",

    category: "Async/Await"
},

{
    id: 44,

    examSlug: "nodejs-backend",

    question:
        "Which keyword must be used before a function to use await inside it?",

    options: [
        "promise",
        "sync",
        "async",
        "defer"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "await can only be used inside an async function (or top-level in supported ES modules).",

    difficulty: "Medium",

    category: "Async/Await"
},

{
    id: 45,

    examSlug: "nodejs-backend",

    question:
        "Which block is commonly used to handle errors with async/await?",

    options: [
        "if...else",
        "switch",
        "try...catch",
        "while"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "try...catch is the standard approach for handling errors in asynchronous code using async/await.",

    difficulty: "Easy",

    category: "Error Handling"
},

{
    id: 46,

    examSlug: "nodejs-backend",

    question:
        "What is the purpose of the CORS middleware?",

    options: [
        "Compress files",
        "Enable cross-origin requests",
        "Connect to MySQL",
        "Encrypt passwords"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "CORS (Cross-Origin Resource Sharing) allows controlled access to resources from different origins.",

    difficulty: "Medium",

    category: "CORS"
},

{
    id: 47,

    examSlug: "nodejs-backend",

    question:
        "Which package is commonly used to load environment variables from a .env file?",

    options: [
        "dotenv",
        "env",
        "config",
        "environment"
    ],

    correctAnswer: 0,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "dotenv loads variables from a .env file into process.env.",

    difficulty: "Easy",

    category: "Environment Variables"
},

{
    id: 48,

    examSlug: "nodejs-backend",

    question:
        "Which object is used to access environment variables in Node.js?",

    options: [
        "window.env",
        "process.env",
        "global.env",
        "config.env"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "Environment variables are accessed using process.env.",

    difficulty: "Easy",

    category: "Environment Variables"
},

{
    id: 49,

    examSlug: "nodejs-backend",

    question:
        "Which middleware is commonly used to log incoming HTTP requests in Express?",

    options: [
        "helmet",
        "cors",
        "morgan",
        "multer"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "Morgan is a popular HTTP request logger middleware for Express applications.",

    difficulty: "Medium",

    category: "Middleware"
},

{
    id: 50,

    examSlug: "nodejs-backend",

    question:
        "Which middleware helps improve security by setting HTTP response headers?",

    options: [
        "helmet",
        "bcrypt",
        "jsonwebtoken",
        "cookie-parser"
    ],

    correctAnswer: 0,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "Helmet helps secure Express applications by setting various HTTP security headers.",

    difficulty: "Medium",

    category: "Security"
},
{
    id: 51,

    examSlug: "nodejs-backend",

    question:
        "Which package is commonly used to generate and verify JWT tokens?",

    options: [
        "bcryptjs",
        "jsonwebtoken",
        "passport",
        "crypto"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "jsonwebtoken is the standard package used to create and verify JWT tokens.",

    difficulty: "Medium",

    category: "JWT"
},

{
    id: 52,

    examSlug: "nodejs-backend",

    question:
        "What does JWT stand for?",

    options: [
        "Java Web Token",
        "JSON Web Token",
        "JavaScript Web Token",
        "JSON Working Token"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "JWT stands for JSON Web Token and is widely used for authentication.",

    difficulty: "Easy",

    category: "JWT"
},

{
    id: 53,

    examSlug: "nodejs-backend",

    question:
        "Which function is used to create a JWT token?",

    options: [
        "jwt.create()",
        "jwt.sign()",
        "jwt.token()",
        "jwt.generate()"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "jwt.sign() creates a signed JWT token.",

    difficulty: "Medium",

    category: "JWT"
},

{
    id: 54,

    examSlug: "nodejs-backend",

    question:
        "Which function verifies a JWT token?",

    options: [
        "jwt.check()",
        "jwt.decode()",
        "jwt.verify()",
        "jwt.validate()"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "jwt.verify() validates a JWT and checks its signature.",

    difficulty: "Medium",

    category: "JWT"
},

{
    id: 55,

    examSlug: "nodejs-backend",

    question:
        "Which package is commonly used to hash passwords in Node.js?",

    options: [
        "crypto-js",
        "bcryptjs",
        "jsonwebtoken",
        "helmet"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "bcryptjs securely hashes passwords before storing them in a database.",

    difficulty: "Easy",

    category: "Authentication"
},

{
    id: 56,

    examSlug: "nodejs-backend",

    question:
        "Which bcrypt function compares a plain password with a hashed password?",

    options: [
        "bcrypt.verify()",
        "bcrypt.compare()",
        "bcrypt.match()",
        "bcrypt.check()"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "bcrypt.compare() checks whether a plain password matches a stored hash.",

    difficulty: "Medium",

    category: "Authentication"
},

{
    id: 57,

    examSlug: "nodejs-backend",

    question:
        "Authentication is used to ______.",

    options: [
        "Check user identity",
        "Assign permissions",
        "Create database tables",
        "Optimize performance"
    ],

    correctAnswer: 0,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "Authentication verifies who the user is.",

    difficulty: "Easy",

    category: "Authentication"
},

{
    id: 58,

    examSlug: "nodejs-backend",

    question:
        "Authorization determines ______.",

    options: [
        "Who the user is",
        "What the user is allowed to access",
        "The user's password",
        "Database structure"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "Authorization defines what authenticated users are allowed to do.",

    difficulty: "Easy",

    category: "Authorization"
},

{
    id: 59,

    examSlug: "nodejs-backend",

    question:
        "Which package is commonly used to parse cookies in Express?",

    options: [
        "cookie-parser",
        "cookie-manager",
        "express-cookie",
        "cookies"
    ],

    correctAnswer: 0,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "cookie-parser parses cookies attached to client requests.",

    difficulty: "Medium",

    category: "Express Middleware"
},

{
    id: 60,

    examSlug: "nodejs-backend",

    question:
        "Which middleware is commonly used for validating incoming request data?",

    options: [
        "express-validator",
        "helmet",
        "cors",
        "multer"
    ],

    correctAnswer: 0,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "express-validator provides validation and sanitization for request data.",

    difficulty: "Medium",

    category: "Validation"
},
{
    id: 61,

    examSlug: "nodejs-backend",

    question:
        "Which npm package is commonly used to connect a Node.js application with MySQL?",

    options: [
        "mysql2",
        "mongoose",
        "sequelize-cli",
        "pg"
    ],

    correctAnswer: 0,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "mysql2 is a modern MySQL client for Node.js with Promise support.",

    difficulty: "Medium",

    category: "MySQL"
},

{
    id: 62,

    examSlug: "nodejs-backend",

    question:
        "Which ODM library is commonly used with MongoDB in Node.js?",

    options: [
        "mysql2",
        "mongoose",
        "typeorm",
        "knex"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "Mongoose is an Object Data Modeling (ODM) library for MongoDB.",

    difficulty: "Easy",

    category: "MongoDB"
},

{
    id: 63,

    examSlug: "nodejs-backend",

    question:
        "Which Mongoose method is used to create a new document?",

    options: [
        "insertOne()",
        "create()",
        "add()",
        "saveOne()"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "Model.create() creates and saves a new document in MongoDB.",

    difficulty: "Medium",

    category: "Mongoose"
},

{
    id: 64,

    examSlug: "nodejs-backend",

    question:
        "Which package is commonly used for file uploads in Express.js?",

    options: [
        "helmet",
        "multer",
        "cors",
        "sharp"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "Multer is the most widely used middleware for handling multipart/form-data uploads.",

    difficulty: "Easy",

    category: "Multer"
},

{
    id: 65,

    examSlug: "nodejs-backend",

    question:
        "Which package is commonly used to send emails from a Node.js application?",

    options: [
        "mailjs",
        "express-mail",
        "nodemailer",
        "smtp-node"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "Nodemailer is the standard package used to send emails from Node.js applications.",

    difficulty: "Easy",

    category: "Nodemailer"
},

{
    id: 66,

    examSlug: "nodejs-backend",

    question:
        "Which environment variable is commonly used to define the server port?",

    options: [
        "SERVER_PORT",
        "PORT",
        "NODE_PORT",
        "APP_PORT"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "PORT is the standard environment variable used by most Node.js hosting platforms.",

    difficulty: "Easy",

    category: "Environment Variables"
},

{
    id: 67,

    examSlug: "nodejs-backend",

    question:
        "Which command is commonly used to start a Node.js application?",

    options: [
        "node app.js",
        "npm create",
        "node install",
        "express start"
    ],

    correctAnswer: 0,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "node app.js starts a Node.js application. If a start script exists, npm start can also be used.",

    difficulty: "Easy",

    category: "Node.js"
},

{
    id: 68,

    examSlug: "nodejs-backend",

    question:
        "Which tool is commonly used to automatically restart a Node.js server during development?",

    options: [
        "webpack",
        "nodemon",
        "vite",
        "gulp"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "Nodemon monitors file changes and automatically restarts the server.",

    difficulty: "Easy",

    category: "Development Tools"
},

{
    id: 69,

    examSlug: "nodejs-backend",

    question:
        "Which process manager is commonly used to run Node.js applications in production?",

    options: [
        "PM2",
        "Nodemon",
        "Webpack",
        "Parcel"
    ],

    correctAnswer: 0,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "PM2 provides process management, clustering, monitoring, and automatic restarts.",

    difficulty: "Medium",

    category: "Deployment"
},

{
    id: 70,

    examSlug: "nodejs-backend",

    question:
        "Which package enables real-time bidirectional communication between client and server?",

    options: [
        "axios",
        "socket.io",
        "cors",
        "multer"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "Socket.IO enables real-time communication using WebSockets with fallbacks.",

    difficulty: "Medium",

    category: "Socket.IO"
},

{
    id: 71,

    examSlug: "nodejs-backend",

    question:
        "Where should sensitive information like API keys and database passwords be stored?",

    options: [
        "Inside source code",
        "Inside package.json",
        "Inside a .env file",
        "Inside README.md"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "Sensitive information should be stored in environment variables using a .env file and never committed to version control.",

    difficulty: "Easy",

    category: "Security"
},

{
    id: 72,

    examSlug: "nodejs-backend",

    question:
        "Why should passwords never be stored in plain text?",

    options: [
        "Because they consume more memory",
        "Because they are difficult to read",
        "Because they can be easily stolen if the database is compromised",
        "Because Node.js does not allow it"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "Passwords should always be hashed using bcrypt or a similar algorithm before storing them.",

    difficulty: "Medium",

    category: "Security"
},

{
    id: 73,

    examSlug: "nodejs-backend",

    question:
        "Which HTTP status code is commonly returned after successfully creating a resource?",

    options: [
        "200",
        "201",
        "204",
        "404"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "HTTP 201 (Created) indicates that a new resource has been successfully created.",

    difficulty: "Medium",

    category: "REST API"
},

{
    id: 74,

    examSlug: "nodejs-backend",

    question:
        "Which HTTP status code indicates that the client is not authorized to access a protected resource?",

    options: [
        "200",
        "201",
        "401",
        "500"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "HTTP 401 Unauthorized is returned when authentication is required or has failed.",

    difficulty: "Medium",

    category: "HTTP Status Codes"
},

{
    id: 75,

    examSlug: "nodejs-backend",

    question:
        "Which practice helps build scalable and maintainable Node.js applications?",

    options: [
        "Writing all code in a single file",
        "Using modular architecture with separate routes, controllers, services, and models",
        "Storing secrets in source code",
        "Avoiding middleware completely"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "A modular architecture improves code organization, maintainability, testing, and scalability in production applications.",

    difficulty: "Hard",

    category: "Best Practices"
}


];