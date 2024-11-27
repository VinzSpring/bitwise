// script.js

// Problems Array
const problems = [
    // Problem 1
    // {
    //     id: 1,
    //     title: "Odd or Even Checker",
    //     description: "Write a function that takes an integer 'num' and returns 'odd' if the number is odd or 'even' if the number is even using bitwise operations.",
    //     functionSignature: "function isOddOrEven(num) {\n    // Your code here\n}",
    //     functionName: "isOddOrEven",
    //     parameters: ["num"],
    //     testCases: [
    //         { input: [3], expectedOutput: "odd" },
    //         { input: [10], expectedOutput: "even" },
    //         { input: [0], expectedOutput: "even" },
    //         { input: [-1], expectedOutput: "odd" }
    //     ],
    //     hint: "Use the bitwise AND operator '&' with 1."
    // },
    // Problem 2
    {
        id: 2,
        title: "Swap Variables Without Temp",
        description: "Write a function that swaps two integers 'a' and 'b' without using a temporary variable, using bitwise XOR. Return an array with the swapped values.",
        functionSignature: "function swapNumbers(a, b) {\n    // Your code here\n}",
        functionName: "swapNumbers",
        parameters: ["a", "b"],
        testCases: [
            { input: [5, 10], expectedOutput: [10, 5] },
            { input: [-3, 7], expectedOutput: [7, -3] }
        ],
        hint: "Use the XOR operator '^' to swap the values."
    },
    // ... (Include all problems up to 40, ensuring each has a 'functionSignature')
];

// Initialize Variables
let currentProblemIndex = 0;
let score = 0;

// DOM Elements
const problemTitle = document.getElementById('problem-title');
const problemDescription = document.getElementById('problem-description');
const runCodeBtn = document.getElementById('run-code-btn');
const hintBtn = document.getElementById('hint-btn');
const nextBtn = document.getElementById('next-btn');
const resultSection = document.getElementById('result-section');
const scoreDisplay = document.getElementById('score-display');
const problemNumberDisplay = document.getElementById('problem-number');

// Initialize CodeMirror Editor
let editor = CodeMirror.fromTextArea(document.getElementById('user-code'), {
    mode: "javascript",
    theme: "default",
    lineNumbers: true
});

// Load a Problem
function loadProblem(index) {
    const problem = problems[index];
    problemTitle.innerText = problem.title;
    problemDescription.innerText = problem.description;

    // Pre-fill the editor with the function signature
    editor.setValue(problem.functionSignature);

    resultSection.innerText = '';
    resultSection.className = '';
    hintBtn.style.display = 'inline-block';
    runCodeBtn.disabled = false;
    problemNumberDisplay.innerText = `Problem: ${index + 1} / ${problems.length}`;
}

// Run User Code
function runUserCode() {
    const problem = problems[currentProblemIndex];
    const userCode = editor.getValue();
    const functionName = problem.functionName;
    const testCases = problem.testCases;

    let allPassed = true;
    let errorMessage = '';

    try {
        // Wrap user code in a function
        const wrappedCode = `
            ${userCode}
            return ${functionName};
        `;
        // Create a new function with user's code
        const userFunction = new Function(wrappedCode)();

        // Run test cases
        for (const testCase of testCases) {
            const userOutput = userFunction(...testCase.input);
            const expectedOutput = testCase.expectedOutput;

            if (Array.isArray(expectedOutput)) {
                console.log(userOutput, expectedOutput);
                if (!Array.isArray(userOutput) || userOutput.length !== expectedOutput.length || userOutput.toString() !== expectedOutput.toString()) {
                    allPassed = false;
                    errorMessage = `Test failed for input ${JSON.stringify(testCase.input)}.\nExpected output: ${JSON.stringify(expectedOutput)},\nbut got: ${JSON.stringify(userOutput)}`;
                    break;
                }
            } else {
                if (userOutput !== expectedOutput) {
                    allPassed = false;
                    errorMessage = `Test failed for input ${JSON.stringify(testCase.input)}.\nExpected output: ${JSON.stringify(expectedOutput)},\nbut got: ${JSON.stringify(userOutput)}`;
                    break;
                }
            }
        }

        if (allPassed) {
            resultSection.innerText = 'All test cases passed!';
            resultSection.className = 'correct';
            score++;
            scoreDisplay.innerText = `Score: ${score}`;
            runCodeBtn.disabled = true;
            hintBtn.style.display = 'none';
            nextBtn.style.display = 'inline-block';
        } else {
            resultSection.innerText = errorMessage;
            resultSection.className = 'incorrect';
        }

    } catch (error) {
        resultSection.innerText = `Error: ${error.message}`;
        resultSection.className = 'incorrect';
    }
}

// Show Hint
function showHint() {
    const problem = problems[currentProblemIndex];
    alert(`Hint: ${problem.hint}`);
}

// Next Problem
function nextProblem() {
    currentProblemIndex = (currentProblemIndex + 1) % problems.length;
    loadProblem(currentProblemIndex);
}

// Event Listeners
runCodeBtn.addEventListener('click', runUserCode);
hintBtn.addEventListener('click', showHint);
nextBtn.addEventListener('click', nextProblem);

// Initial Load
window.onload = () => {
    loadProblem(currentProblemIndex);
};
