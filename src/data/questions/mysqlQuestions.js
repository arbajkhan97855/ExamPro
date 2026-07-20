export const mysqlQuestions = [

{
    id: 1,

    examSlug: "mysql-fundamentals",

    question: "What does SQL stand for?",

    options: [
        "Structured Query Language",
        "Simple Query Language",
        "Standard Question Language",
        "Sequential Query Language"
    ],

    correctAnswer: 0,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "SQL stands for Structured Query Language and is used to manage relational databases.",

    difficulty: "Easy",

    category: "SQL Basics"
},

{
    id: 2,

    examSlug: "mysql-fundamentals",

    question: "Which SQL statement is used to retrieve data from a table?",

    options: [
        "GET",
        "SELECT",
        "FETCH",
        "SHOW"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "The SELECT statement is used to retrieve records from one or more tables.",

    difficulty: "Easy",

    category: "SQL Basics"
},

{
    id: 3,

    examSlug: "mysql-fundamentals",

    question: "Which SQL command is used to insert new records into a table?",

    options: [
        "ADD",
        "INSERT INTO",
        "CREATE",
        "UPDATE"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "INSERT INTO adds one or more new rows to a table.",

    difficulty: "Easy",

    category: "DML"
},

{
    id: 4,

    examSlug: "mysql-fundamentals",

    question: "Which SQL command is used to modify existing records?",

    options: [
        "CHANGE",
        "ALTER",
        "UPDATE",
        "MODIFY"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "UPDATE modifies existing records in a table.",

    difficulty: "Easy",

    category: "DML"
},

{
    id: 5,

    examSlug: "mysql-fundamentals",

    question: "Which SQL command is used to delete records from a table?",

    options: [
        "REMOVE",
        "DELETE",
        "DROP",
        "CLEAR"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "DELETE removes selected rows from a table.",

    difficulty: "Easy",

    category: "DML"
},

{
    id: 6,

    examSlug: "mysql-fundamentals",

    question: "Which SQL statement is used to create a new table?",

    options: [
        "MAKE TABLE",
        "CREATE TABLE",
        "NEW TABLE",
        "ADD TABLE"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "CREATE TABLE creates a new table in the database.",

    difficulty: "Easy",

    category: "DDL"
},

{
    id: 7,

    examSlug: "mysql-fundamentals",

    question: "Which SQL command is used to remove an entire table?",

    options: [
        "DELETE TABLE",
        "REMOVE TABLE",
        "DROP TABLE",
        "CLEAR TABLE"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "DROP TABLE permanently removes the table and its data.",

    difficulty: "Easy",

    category: "DDL"
},

{
    id: 8,

    examSlug: "mysql-fundamentals",

    question: "Which clause is used to filter records?",

    options: [
        "ORDER BY",
        "GROUP BY",
        "WHERE",
        "HAVING"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "WHERE filters rows based on specified conditions.",

    difficulty: "Easy",

    category: "SQL Clauses"
},

{
    id: 9,

    examSlug: "mysql-fundamentals",

    question: "Which clause is used to sort query results?",

    options: [
        "GROUP BY",
        "ORDER BY",
        "SORT BY",
        "ARRANGE BY"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "ORDER BY sorts records in ascending or descending order.",

    difficulty: "Easy",

    category: "SQL Clauses"
},

{
    id: 10,

    examSlug: "mysql-fundamentals",

    question: "Which wildcard represents multiple characters in a LIKE query?",

    options: [
        "_",
        "*",
        "%",
        "#"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "The % wildcard matches zero or more characters in a LIKE condition.",

    difficulty: "Easy",

    category: "Operators"
},
{
    id: 11,

    examSlug: "mysql-fundamentals",

    question: "Which SQL function returns the total number of rows?",

    options: [
        "SUM()",
        "COUNT()",
        "TOTAL()",
        "ROWS()"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "COUNT() returns the number of rows matching the specified condition.",

    difficulty: "Easy",

    category: "Aggregate Functions"
},

{
    id: 12,

    examSlug: "mysql-fundamentals",

    question: "Which SQL function returns the highest value in a column?",

    options: [
        "TOP()",
        "HIGH()",
        "MAX()",
        "UPPER()"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "MAX() returns the maximum value from a column.",

    difficulty: "Easy",

    category: "Aggregate Functions"
},

{
    id: 13,

    examSlug: "mysql-fundamentals",

    question: "Which SQL function returns the lowest value in a column?",

    options: [
        "LOW()",
        "MIN()",
        "SMALL()",
        "FIRST()"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "MIN() returns the smallest value in a column.",

    difficulty: "Easy",

    category: "Aggregate Functions"
},

{
    id: 14,

    examSlug: "mysql-fundamentals",

    question: "Which SQL function calculates the average value of a numeric column?",

    options: [
        "AVERAGE()",
        "AVG()",
        "MEAN()",
        "CALC()"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "AVG() returns the average of numeric values.",

    difficulty: "Easy",

    category: "Aggregate Functions"
},

{
    id: 15,

    examSlug: "mysql-fundamentals",

    question: "Which SQL function calculates the total of a numeric column?",

    options: [
        "COUNT()",
        "TOTAL()",
        "SUM()",
        "ADD()"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "SUM() adds all numeric values in the specified column.",

    difficulty: "Easy",

    category: "Aggregate Functions"
},

{
    id: 16,

    examSlug: "mysql-fundamentals",

    question: "Which clause groups rows that have the same values?",

    options: [
        "ORDER BY",
        "WHERE",
        "GROUP BY",
        "HAVING"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "GROUP BY groups rows based on one or more columns.",

    difficulty: "Medium",

    category: "SQL Clauses"
},

{
    id: 17,

    examSlug: "mysql-fundamentals",

    question: "Which clause filters grouped records?",

    options: [
        "WHERE",
        "HAVING",
        "ORDER BY",
        "LIMIT"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "HAVING filters grouped data after GROUP BY has been applied.",

    difficulty: "Medium",

    category: "SQL Clauses"
},

{
    id: 18,

    examSlug: "mysql-fundamentals",

    question: "Which JOIN returns only matching rows from both tables?",

    options: [
        "LEFT JOIN",
        "RIGHT JOIN",
        "INNER JOIN",
        "FULL JOIN"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "INNER JOIN returns only rows with matching values in both tables.",

    difficulty: "Medium",

    category: "Joins"
},

{
    id: 19,

    examSlug: "mysql-fundamentals",

    question: "Which JOIN returns all rows from the left table and matching rows from the right table?",

    options: [
        "RIGHT JOIN",
        "LEFT JOIN",
        "INNER JOIN",
        "CROSS JOIN"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "LEFT JOIN returns every row from the left table and matching rows from the right table.",

    difficulty: "Medium",

    category: "Joins"
},

{
    id: 20,

    examSlug: "mysql-fundamentals",

    question: "Which JOIN returns all rows from the right table and matching rows from the left table?",

    options: [
        "LEFT JOIN",
        "INNER JOIN",
        "RIGHT JOIN",
        "SELF JOIN"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "RIGHT JOIN returns every row from the right table and matching rows from the left table.",

    difficulty: "Medium",

    category: "Joins"
},
{
    id: 21,

    examSlug: "mysql-fundamentals",

    question: "Which constraint uniquely identifies each record in a table?",

    options: [
        "FOREIGN KEY",
        "PRIMARY KEY",
        "UNIQUE",
        "CHECK"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "A PRIMARY KEY uniquely identifies every row in a table and cannot contain NULL values.",

    difficulty: "Easy",

    category: "Constraints"
},

{
    id: 22,

    examSlug: "mysql-fundamentals",

    question: "Which constraint establishes a relationship between two tables?",

    options: [
        "PRIMARY KEY",
        "UNIQUE",
        "FOREIGN KEY",
        "NOT NULL"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "A FOREIGN KEY links one table to another by referencing the PRIMARY KEY of the parent table.",

    difficulty: "Medium",

    category: "Constraints"
},

{
    id: 23,

    examSlug: "mysql-fundamentals",

    question: "Which constraint prevents duplicate values in a column?",

    options: [
        "UNIQUE",
        "CHECK",
        "DEFAULT",
        "NOT NULL"
    ],

    correctAnswer: 0,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "The UNIQUE constraint ensures that all values in a column are different.",

    difficulty: "Easy",

    category: "Constraints"
},

{
    id: 24,

    examSlug: "mysql-fundamentals",

    question: "Which constraint does not allow NULL values in a column?",

    options: [
        "DEFAULT",
        "NOT NULL",
        "UNIQUE",
        "CHECK"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "NOT NULL ensures that every row must contain a value for that column.",

    difficulty: "Easy",

    category: "Constraints"
},

{
    id: 25,

    examSlug: "mysql-fundamentals",

    question: "Which attribute automatically generates a unique numeric value for each new record?",

    options: [
        "DEFAULT",
        "UNIQUE",
        "AUTO_INCREMENT",
        "IDENTITY"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "AUTO_INCREMENT automatically increments numeric values for new rows.",

    difficulty: "Easy",

    category: "Table Design"
},

{
    id: 26,

    examSlug: "mysql-fundamentals",

    question: "What is the main purpose of an INDEX in MySQL?",

    options: [
        "Reduce table size",
        "Increase query performance",
        "Delete duplicate records",
        "Encrypt data"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "Indexes improve the speed of data retrieval operations.",

    difficulty: "Medium",

    category: "Indexes"
},

{
    id: 27,

    examSlug: "mysql-fundamentals",

    question: "What is a VIEW in MySQL?",

    options: [
        "A physical table",
        "A virtual table based on a SQL query",
        "A database backup",
        "An index"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "A VIEW is a virtual table created from the result of a SELECT query.",

    difficulty: "Medium",

    category: "Views"
},

{
    id: 28,

    examSlug: "mysql-fundamentals",

    question: "Which normal form removes partial dependency from a table?",

    options: [
        "1NF",
        "2NF",
        "3NF",
        "BCNF"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "Second Normal Form (2NF) removes partial dependency and requires the table to already be in 1NF.",

    difficulty: "Hard",

    category: "Normalization"
},

{
    id: 29,

    examSlug: "mysql-fundamentals",

    question: "Which SQL command permanently saves the current transaction?",

    options: [
        "SAVE",
        "COMMIT",
        "ROLLBACK",
        "END"
    ],

    correctAnswer: 1,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "COMMIT permanently saves all changes made during the current transaction.",

    difficulty: "Medium",

    category: "Transactions"
},

{
    id: 30,

    examSlug: "mysql-fundamentals",

    question: "Which SQL command is used to undo changes that have not yet been committed?",

    options: [
        "UNDO",
        "RESET",
        "ROLLBACK",
        "CANCEL"
    ],

    correctAnswer: 2,

    marks: 2,

    negativeMarks: 0,

    explanation:
        "ROLLBACK restores the database to the state before the current transaction if it has not been committed.",

    difficulty: "Medium",

    category: "Transactions"
}


];