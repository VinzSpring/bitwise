// script.js

// Problems Array (Assuming problems are already defined with functionSignature)
const problems = [
    // Problem 3
    {
        id: 3,
        title: "Clear Specific Bit",
        description: "Write a function that clears the nth bit of a given integer 'num'. The bits are zero-indexed from the right.",
        functionName: "clearBit",
        parameters: ["num", "n"],
        testCases: [
            { input: [15, 0], expectedOutput: 14 },
            { input: [15, 1], expectedOutput: 13 },
            { input: [15, 2], expectedOutput: 11 },
            { input: [15, 3], expectedOutput: 7 },
            { input: [8, 3], expectedOutput: 0 }
        ],
        hint: "Use the bitwise AND operator '&' with a mask that has all bits set to 1 except the nth bit."
    },
    // Problem 4
    {
        id: 4,
        title: "Toggle Specific Bit",
        description: "Write a function that toggles the nth bit of a given integer 'num'. The bits are zero-indexed from the right.",
        functionName: "toggleBit",
        parameters: ["num", "n"],
        testCases: [
            { input: [8, 3], expectedOutput: 0 },
            { input: [0, 0], expectedOutput: 1 },
            { input: [5, 0], expectedOutput: 4 },
            { input: [5, 2], expectedOutput: 1 }
        ],
        hint: "Use the bitwise XOR operator '^' with a mask that has the nth bit set to 1."
    },
    // Problem 5
    {
        id: 5,
        title: "Count Set Bits",
        description: "Write a function that counts the number of bits set to 1 in a given integer 'num'.",
        functionName: "countSetBits",
        parameters: ["num"],
        testCases: [
            { input: [0], expectedOutput: 0 },
            { input: [1], expectedOutput: 1 },
            { input: [7], expectedOutput: 3 },
            { input: [15], expectedOutput: 4 },
            { input: [1023], expectedOutput: 10 }
        ],
        hint: "Iterate over each bit and use the bitwise AND operator '&' to check if a bit is set."
    },
    // Problem 6
    {
        id: 6,
        title: "Is Power of Two",
        description: "Write a function that checks if a given integer 'num' is a power of two. Return true if it is, false otherwise.",
        functionName: "isPowerOfTwo",
        parameters: ["num"],
        testCases: [
            { input: [1], expectedOutput: true },
            { input: [2], expectedOutput: true },
            { input: [3], expectedOutput: false },
            { input: [4], expectedOutput: true },
            { input: [0], expectedOutput: false }
        ],
        hint: "A number is a power of two if it has only one bit set."
    },
    // Problem 7
    {
        id: 7,
        title: "Bitwise Reverse",
        description: "Write a function that reverses the bits of a given 8-bit unsigned integer 'num'.",
        functionName: "reverseBits",
        parameters: ["num"],
        testCases: [
            { input: [0b00000000], expectedOutput: 0b00000000 },
            { input: [0b00000001], expectedOutput: 0b10000000 },
            { input: [0b11110000], expectedOutput: 0b00001111 },
            { input: [0b10101010], expectedOutput: 0b01010101 }
        ],
        hint: "Iterate over the bits from both ends towards the center and swap them."
    },
    // Problem 8
    {
        id: 8,
        title: "Extract Bits",
        description: "Write a function that extracts bits from position 'start' to 'end' (inclusive) from an integer 'num'. Bits are zero-indexed from the right.",
        functionName: "extractBits",
        parameters: ["num", "start", "end"],
        testCases: [
            { input: [0b11001100, 2, 5], expectedOutput: 0b0011 },
            { input: [0b10101010, 1, 3], expectedOutput: 0b010 },
            { input: [0b11111111, 0, 7], expectedOutput: 0b11111111 }
        ],
        hint: "Use right shift and masking to extract the desired bits."
    },
    // Problem 9
    {
        id: 9,
        title: "Set Bits in Range",
        description: "Write a function that sets all bits in 'num' from position 'start' to 'end' (inclusive) to 1. Bits are zero-indexed from the right.",
        functionName: "setBitsInRange",
        parameters: ["num", "start", "end"],
        testCases: [
            { input: [0b00000000, 1, 3], expectedOutput: 0b00001110 },
            { input: [0b10100000, 0, 2], expectedOutput: 0b10100111 },
            { input: [0b00000000, 0, 7], expectedOutput: 0b11111111 }
        ],
        hint: "Create a mask with bits set in the given range and use bitwise OR."
    },
    // Problem 10
    {
        id: 10,
        title: "Parity of Number",
        description: "Write a function that determines the parity (even or odd) of the number of set bits in 'num'. Return 'even' or 'odd'.",
        functionName: "parity",
        parameters: ["num"],
        testCases: [
            { input: [0b00000000], expectedOutput: "even" },
            { input: [0b00000001], expectedOutput: "odd" },
            { input: [0b10101010], expectedOutput: "even" },
            { input: [0b11110000], expectedOutput: "even" },
            { input: [0b11110001], expectedOutput: "odd" }
        ],
        hint: "Count the number of set bits and check if it's divisible by 2."
    },
    // Problem 11
    {
        id: 11,
        title: "Nearest Power of Two",
        description: "Write a function that rounds up a given integer 'num' to the next highest power of two.",
        functionName: "nextPowerOfTwo",
        parameters: ["num"],
        testCases: [
            { input: [1], expectedOutput: 1 },
            { input: [5], expectedOutput: 8 },
            { input: [17], expectedOutput: 32 },
            { input: [32], expectedOutput: 32 }
        ],
        hint: "Use bitwise operations to manipulate the bits and find the next power of two."
    },
    // Problem 12
    {
        id: 12,
        title: "Bitwise Multiply",
        description: "Write a function that multiplies two positive integers 'a' and 'b' using bitwise operations.",
        functionName: "bitwiseMultiply",
        parameters: ["a", "b"],
        testCases: [
            { input: [3, 5], expectedOutput: 15 },
            { input: [7, 6], expectedOutput: 42 },
            { input: [0, 10], expectedOutput: 0 },
            { input: [1, 1], expectedOutput: 1 }
        ],
        hint: "Use bitwise shifts and addition to perform multiplication."
    },
    // Problem 13
    {
        id: 13,
        title: "Bitwise Division",
        description: "Write a function that divides two positive integers 'dividend' and 'divisor' using bitwise operations and returns the quotient.",
        functionName: "bitwiseDivide",
        parameters: ["dividend", "divisor"],
        testCases: [
            { input: [10, 2], expectedOutput: 5 },
            { input: [15, 4], expectedOutput: 3 },
            { input: [100, 10], expectedOutput: 10 },
            { input: [7, 7], expectedOutput: 1 }
        ],
        hint: "Use bitwise shifts to subtract multiples of the divisor from the dividend."
    },
    // Problem 14
    {
        id: 14,
        title: "Gray Code Conversion",
        description: "Write a function that converts a given non-negative integer 'num' to its corresponding Gray code.",
        functionName: "toGrayCode",
        parameters: ["num"],
        testCases: [
            { input: [0], expectedOutput: 0 },
            { input: [1], expectedOutput: 1 },
            { input: [2], expectedOutput: 3 },
            { input: [3], expectedOutput: 2 },
            { input: [4], expectedOutput: 6 }
        ],
        hint: "Gray code can be obtained by XOR'ing the number with itself shifted right by one."
    },
    // Problem 15
    {
        id: 15,
        title: "Hamming Distance",
        description: "Write a function that calculates the Hamming distance between two integers 'x' and 'y'. The Hamming distance is the number of positions at which the corresponding bits are different.",
        functionName: "hammingDistance",
        parameters: ["x", "y"],
        testCases: [
            { input: [1, 4], expectedOutput: 2 },
            { input: [3, 1], expectedOutput: 1 },
            { input: [0, 0], expectedOutput: 0 },
            { input: [255, 0], expectedOutput: 8 }
        ],
        hint: "Use XOR to find differing bits and count the number of set bits."
    },
    // Problem 16
    {
        id: 16,
        title: "Rotate Bits Left",
        description: "Write a function that rotates the bits of an 8-bit unsigned integer 'num' to the left by 'n' positions.",
        functionName: "rotateLeft",
        parameters: ["num", "n"],
        testCases: [
            { input: [0b00000001, 1], expectedOutput: 0b00000010 },
            { input: [0b10000000, 1], expectedOutput: 0b00000001 },
            { input: [0b10101010, 4], expectedOutput: 0b10101010 },
            { input: [0b11110000, 2], expectedOutput: 0b11000011 }
        ],
        hint: "Use left shift and handle the overflow by shifting right."
    },
    // Problem 17
    {
        id: 17,
        title: "Check if Bits are Alternate",
        description: "Write a function that checks if the bits of a given integer 'num' are alternating (e.g., 0b10101010). Return true if they are, false otherwise.",
        functionName: "hasAlternatingBits",
        parameters: ["num"],
        testCases: [
            { input: [0b10101010], expectedOutput: true },
            { input: [0b01010101], expectedOutput: true },
            { input: [0b11110000], expectedOutput: false },
            { input: [0b11001100], expectedOutput: false }
        ],
        hint: "Check if num XOR (num shifted right by 1) has all bits set to 1."
    },
    // Problem 18
    {
        id: 18,
        title: "Find Rightmost Set Bit",
        description: "Write a function that returns the position (1-indexed from right) of the rightmost set bit in 'num'. If 'num' is zero, return 0.",
        functionName: "rightmostSetBitPosition",
        parameters: ["num"],
        testCases: [
            { input: [0b00000000], expectedOutput: 0 },
            { input: [0b00001000], expectedOutput: 4 },
            { input: [0b10000000], expectedOutput: 8 },
            { input: [0b00000001], expectedOutput: 1 }
        ],
        hint: "Use num & (-num) to isolate the rightmost set bit."
    },
    // Problem 19
    {
        id: 19,
        title: "Flip All Bits",
        description: "Write a function that flips all bits of a 32-bit unsigned integer 'num'.",
        functionName: "flipBits",
        parameters: ["num"],
        testCases: [
            { input: [0], expectedOutput: 0xFFFFFFFF },
            { input: [0xFFFFFFFF], expectedOutput: 0 },
            { input: [0x12345678], expectedOutput: 0xEDCBA987 }
        ],
        hint: "Use the bitwise NOT operator '~'."
    },
    // Problem 20
    {
        id: 20,
        title: "Add Without Plus",
        description: "Write a function that adds two integers 'a' and 'b' without using the '+' operator.",
        functionName: "addWithoutPlus",
        parameters: ["a", "b"],
        testCases: [
            { input: [1, 1], expectedOutput: 2 },
            { input: [5, 7], expectedOutput: 12 },
            { input: [-3, 3], expectedOutput: 0 },
            { input: [-4, -6], expectedOutput: -10 }
        ],
        hint: "Use bitwise XOR for addition and bitwise AND plus shifts for carry."
    },
    // Problem 21
    {
        id: 21,
        title: "Detect Opposite Signs",
        description: "Write a function that checks if two integers 'x' and 'y' have opposite signs. Return true if they do, false otherwise.",
        functionName: "oppositeSigns",
        parameters: ["x", "y"],
        testCases: [
            { input: [1, -1], expectedOutput: true },
            { input: [-5, 7], expectedOutput: true },
            { input: [3, 4], expectedOutput: false },
            { input: [-2, -8], expectedOutput: false }
        ],
        hint: "Check the sign bit by XOR'ing x and y and checking if the result is negative."
    },
    // Problem 22
    {
        id: 22,
        title: "Turn Off Rightmost Set Bit",
        description: "Write a function that turns off the rightmost set bit of a given integer 'num'.",
        functionName: "turnOffRightmostSetBit",
        parameters: ["num"],
        testCases: [
            { input: [0b00001000], expectedOutput: 0b00000000 },
            { input: [0b10101100], expectedOutput: 0b10101000 },
            { input: [0b11111111], expectedOutput: 0b11111110 }
        ],
        hint: "Use num & (num - 1) to turn off the rightmost set bit."
    },
    // Problem 23
    {
        id: 23,
        title: "Isolate Rightmost Set Bit",
        description: "Write a function that isolates the rightmost set bit of a given integer 'num'.",
        functionName: "isolateRightmostSetBit",
        parameters: ["num"],
        testCases: [
            { input: [0b00001010], expectedOutput: 0b00000010 },
            { input: [0b10110000], expectedOutput: 0b00010000 },
            { input: [0b10000000], expectedOutput: 0b10000000 }
        ],
        hint: "Use num & (-num) to isolate the rightmost set bit."
    },
    // Problem 24
    {
        id: 24,
        title: "Swap Even and Odd Bits",
        description: "Write a function that swaps even and odd bits of a given 8-bit unsigned integer 'num'.",
        functionName: "swapEvenOddBits",
        parameters: ["num"],
        testCases: [
            { input: [0b10101010], expectedOutput: 0b01010101 },
            { input: [0b11110000], expectedOutput: 0b11110000 },
            { input: [0b00001111], expectedOutput: 0b00001111 },
            { input: [0b11001100], expectedOutput: 0b11001100 }
        ],
        hint: "Use masks to separate even and odd bits and shift them appropriately."
    },
    // Problem 25
    {
        id: 25,
        title: "Bitwise Modulo Power of Two",
        description: "Write a function that computes 'num' modulo 'powerOfTwo', where 'powerOfTwo' is a power of two, using bitwise operations.",
        functionName: "bitwiseModulo",
        parameters: ["num", "powerOfTwo"],
        testCases: [
            { input: [77, 8], expectedOutput: 5 },
            { input: [123, 64], expectedOutput: 59 },
            { input: [255, 256], expectedOutput: 255 },
            { input: [256, 256], expectedOutput: 0 }
        ],
        hint: "Use the bitwise AND operator '&' with (powerOfTwo - 1)."
    },
    // Problem 26
    {
        id: 26,
        title: "Calculate Absolute Value",
        description: "Write a function that computes the absolute value of an integer 'num' without using branching.",
        functionName: "absoluteValue",
        parameters: ["num"],
        testCases: [
            { input: [5], expectedOutput: 5 },
            { input: [-5], expectedOutput: 5 },
            { input: [0], expectedOutput: 0 },
            { input: [-123], expectedOutput: 123 }
        ],
        hint: "Use the right shift operator to obtain the sign and XOR."
    },
    // Problem 27
    {
        id: 27,
        title: "Minimum of Two Numbers",
        description: "Write a function that returns the minimum of two integers 'a' and 'b' without using comparison operators.",
        functionName: "minimum",
        parameters: ["a", "b"],
        testCases: [
            { input: [5, 10], expectedOutput: 5 },
            { input: [0, -10], expectedOutput: -10 },
            { input: [7, 7], expectedOutput: 7 },
            { input: [-5, -3], expectedOutput: -5 }
        ],
        hint: "Use subtraction and bitwise operations to determine the minimum."
    },
    // Problem 28
    {
        id: 28,
        title: "Check If Integer Is Negative",
        description: "Write a function that checks if an integer 'num' is negative without using comparison operators. Return true if it is negative, false otherwise.",
        functionName: "isNegative",
        parameters: ["num"],
        testCases: [
            { input: [-1], expectedOutput: true },
            { input: [0], expectedOutput: false },
            { input: [10], expectedOutput: false },
            { input: [-100], expectedOutput: true }
        ],
        hint: "Check the sign bit using right shift."
    },
    // Problem 29
    {
        id: 29,
        title: "Multiply by 3.5",
        description: "Write a function that multiplies a given integer 'num' by 3.5 using bitwise operations.",
        functionName: "multiplyByThreePointFive",
        parameters: ["num"],
        testCases: [
            { input: [2], expectedOutput: 7 },
            { input: [4], expectedOutput: 14 },
            { input: [10], expectedOutput: 35 },
            { input: [0], expectedOutput: 0 }
        ],
        hint: "Use shifts to multiply by 2 and 1, and add accordingly."
    },
    // Problem 30
    {
        id: 30,
        title: "Count Trailing Zeros",
        description: "Write a function that counts the number of trailing zeros in the binary representation of an integer 'num'.",
        functionName: "countTrailingZeros",
        parameters: ["num"],
        testCases: [
            { input: [0b00010000], expectedOutput: 4 },
            { input: [0b10000000], expectedOutput: 7 },
            { input: [0b00000001], expectedOutput: 0 },
            { input: [0], expectedOutput: 0 }
        ],
        hint: "Iteratively shift right until a set bit is found."
    },
    // Problem 31
    {
        id: 31,
        title: "Compute Modulus Without % Operator",
        description: "Write a function that computes 'a' modulo 'b' without using the '%' operator.",
        functionName: "modulus",
        parameters: ["a", "b"],
        testCases: [
            { input: [10, 3], expectedOutput: 1 },
            { input: [100, 7], expectedOutput: 2 },
            { input: [15, 5], expectedOutput: 0 },
            { input: [9, 2], expectedOutput: 1 }
        ],
        hint: "Use subtraction and bitwise shifts to compute modulus."
    },
    // Problem 32
    {
        id: 32,
        title: "Determine if Number Has Only One Bit Set",
        description: "Write a function that checks if 'num' has exactly one bit set to 1. Return true if it does, false otherwise.",
        functionName: "hasOnlyOneBitSet",
        parameters: ["num"],
        testCases: [
            { input: [1], expectedOutput: true },
            { input: [2], expectedOutput: true },
            { input: [3], expectedOutput: false },
            { input: [0], expectedOutput: false },
            { input: [8], expectedOutput: true }
        ],
        hint: "Check if num is not zero and num & (num -1) equals zero."
    },
    // Problem 33
    {
        id: 33,
        title: "Merge Two Numbers",
        description: "Write a function that merges bits from two integers 'm' and 'n' into a single integer. Bits from 'm' occupy the even positions and bits from 'n' occupy the odd positions.",
        functionName: "mergeBits",
        parameters: ["m", "n"],
        testCases: [
            { input: [0b1010, 0b0101], expectedOutput: 0b1111 },
            { input: [0b1100, 0b0011], expectedOutput: 0b1111 },
            { input: [0b0000, 0b1111], expectedOutput: 0b10101010 }
        ],
        hint: "Use masks and shifts to interleave bits from both numbers."
    },
    // Problem 34
    {
        id: 34,
        title: "Find Log Base 2",
        description: "Write a function that computes the integer log base 2 of a given positive integer 'num'.",
        functionName: "logBase2",
        parameters: ["num"],
        testCases: [
            { input: [1], expectedOutput: 0 },
            { input: [2], expectedOutput: 1 },
            { input: [8], expectedOutput: 3 },
            { input: [16], expectedOutput: 4 },
            { input: [31], expectedOutput: 4 }
        ],
        hint: "Count the position of the highest set bit."
    },
    // Problem 35
    {
        id: 35,
        title: "Reverse Bits in a Byte",
        description: "Write a function that reverses the bits in an 8-bit unsigned integer 'num'.",
        functionName: "reverseByte",
        parameters: ["num"],
        testCases: [
            { input: [0b00000000], expectedOutput: 0b00000000 },
            { input: [0b11111111], expectedOutput: 0b11111111 },
            { input: [0b00011000], expectedOutput: 0b00011000 },
            { input: [0b10000000], expectedOutput: 0b00000001 }
        ],
        hint: "Use swapping of bits or a lookup table for faster performance."
    },
    // Problem 36
    {
        id: 36,
        title: "Calculate Average Without '/' Operator",
        description: "Write a function that calculates the average of two integers 'a' and 'b' without using the '/' operator.",
        functionName: "average",
        parameters: ["a", "b"],
        testCases: [
            { input: [4, 6], expectedOutput: 5 },
            { input: [7, 3], expectedOutput: 5 },
            { input: [10, 20], expectedOutput: 15 },
            { input: [0, 0], expectedOutput: 0 }
        ],
        hint: "Use bitwise right shift after adding the numbers."
    },
    // Problem 37
    {
        id: 37,
        title: "Bit Masking to Get nth Bit",
        description: "Write a function that returns the value of the nth bit of an integer 'num'. Bits are zero-indexed from the right.",
        functionName: "getBit",
        parameters: ["num", "n"],
        testCases: [
            { input: [0b10101010, 1], expectedOutput: 1 },
            { input: [0b10101010, 0], expectedOutput: 0 },
            { input: [0b00000001, 0], expectedOutput: 1 },
            { input: [0b10000000, 7], expectedOutput: 1 }
        ],
        hint: "Use right shift and bitwise AND to isolate the nth bit."
    },
    // Problem 38
    {
        id: 38,
        title: "Compute Sign of Integer",
        description: "Write a function that returns 1 if 'num' is positive, -1 if 'num' is negative, and 0 if 'num' is zero.",
        functionName: "computeSign",
        parameters: ["num"],
        testCases: [
            { input: [10], expectedOutput: 1 },
            { input: [-5], expectedOutput: -1 },
            { input: [0], expectedOutput: 0 },
            { input: [-100], expectedOutput: -1 }
        ],
        hint: "Use the sign bit and bitwise operations to determine the sign."
    },
    // Problem 39
    {
        id: 39,
        title: "Clear All Bits from MSB to nth Bit",
        description: "Write a function that clears all bits from the most significant bit (MSB) to the nth bit (inclusive) of an integer 'num'. Bits are zero-indexed from the right.",
        functionName: "clearBitsMSBtoN",
        parameters: ["num", "n"],
        testCases: [
            { input: [0b11111111, 4], expectedOutput: 0b00001111 },
            { input: [0b10101010, 5], expectedOutput: 0b00001010 },
            { input: [0b11110000, 7], expectedOutput: 0b00000000 }
        ],
        hint: "Create a mask with bits set below the nth bit and use bitwise AND."
    },
    // Problem 40
    {
        id: 40,
        title: "Check if Number is Multiple of 3",
        description: "Write a function that checks if a given integer 'num' is a multiple of 3 using bitwise operations. Return true if it is, false otherwise.",
        functionName: "isMultipleOfThree",
        parameters: ["num"],
        testCases: [
            { input: [3], expectedOutput: true },
            { input: [10], expectedOutput: false },
            { input: [21], expectedOutput: true },
            { input: [0], expectedOutput: true },
            { input: [7], expectedOutput: false }
        ],
        hint: "Use the difference between counts of odd and even set bits."
    },
];

// Initialize Variables
let currentProblemIndex = 0;
let score = 0;
let level = 1;

// DOM Elements
const problemTitle = document.getElementById('problem-title');
const problemDescription = document.getElementById('problem-description');
const runCodeBtn = document.getElementById('run-code-btn');
const hintBtn = document.getElementById('hint-btn');
const nextBtn = document.getElementById('next-btn');
const resultSection = document.getElementById('result-section');
const scoreDisplay = document.getElementById('score-display');
const problemNumberDisplay = document.getElementById('problem-number');
const resetBtn = document.getElementById('reset-btn');

// Main Menu Elements
const mainMenu = document.getElementById('main-menu');
const startGameBtn = document.getElementById('start-game-btn');
const instructionsBtn = document.getElementById('instructions-btn');
const highScoresBtn = document.getElementById('high-scores-btn');
const gameScreen = document.getElementById('game-screen');
const levelDisplay = document.getElementById('level-display');

// Modals
const instructionsModal = document.getElementById('instructions');
const highScoresModal = document.getElementById('high-scores');
const closeInstructionsBtn = document.getElementById('close-instructions');
const closeHighScoresBtn = document.getElementById('close-high-scores');
const scoresList = document.getElementById('scores-list');

// Initialize CodeMirror Editor
let editor = CodeMirror.fromTextArea(document.getElementById('user-code'), {
    mode: "javascript",
    theme: "monokai", // Changed to a more visually appealing theme
    lineNumbers: false, // Disable line numbers
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
    indentUnit: 4,
    tabSize: 4,
    lineWrapping: true,
    autoCloseBrackets: true,
    matchBrackets: true
});

// Function to generate function signature
function generateFunctionSignature(functionName, parameters) {
    const params = parameters.join(', ');
    return `function ${functionName}(${params}) {\n    // Your code here\n}`;
}

// Function to save progress to localStorage
function saveProgress() {
    // Save user's code for the current problem
    const userSolutions = JSON.parse(localStorage.getItem('userSolutions')) || {};
    userSolutions[problems[currentProblemIndex].id] = editor.getValue();
    localStorage.setItem('userSolutions', JSON.stringify(userSolutions));

    // Save current problem index, score, and level
    localStorage.setItem('currentProblemIndex', currentProblemIndex);
    localStorage.setItem('score', score);
    localStorage.setItem('level', level);
}

// Function to load progress from localStorage
function loadProgress() {
    // Load saved currentProblemIndex, score, and level
    const savedProblemIndex = localStorage.getItem('currentProblemIndex');
    const savedScore = localStorage.getItem('score');
    const savedLevel = localStorage.getItem('level');
    if (savedProblemIndex !== null) {
        currentProblemIndex = parseInt(savedProblemIndex);
    }
    if (savedScore !== null) {
        score = parseInt(savedScore);
        scoreDisplay.innerText = `Score: ${score}`;
    }
    if (savedLevel !== null) {
        level = parseInt(savedLevel);
        levelDisplay.innerText = level;
    }
}

// Load a Problem
function loadProblem(index) {
    const problem = problems[index];
    problemTitle.innerText = problem.title;
    problemDescription.innerText = problem.description;

    // Load saved code from localStorage if it exists
    const userSolutions = JSON.parse(localStorage.getItem('userSolutions')) || {};
    const savedCode = userSolutions[problem.id] || generateFunctionSignature(problem.functionName, problem.parameters);
    editor.setValue(savedCode);

    resultSection.innerText = '';
    resultSection.className = '';
    hintBtn.style.display = 'inline-block';
    runCodeBtn.disabled = false;
    nextBtn.style.display = 'none';
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
        // Wrap user code in a function and evaluate it
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
            score += 10; // Increase score
            level++; // Increase level
            scoreDisplay.innerText = `Score: ${score}`;
            levelDisplay.innerText = level;
            runCodeBtn.disabled = true;
            hintBtn.style.display = 'none';
            nextBtn.style.display = 'inline-block';

            // Save high score
            saveHighScore();

        } else {
            resultSection.innerText = errorMessage;
            resultSection.className = 'incorrect';
        }

        // Save progress after running code
        saveProgress();

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
    // Save the current code before moving to next problem
    saveProgress();

    // Move to next problem
    currentProblemIndex = (currentProblemIndex + 1) % problems.length;
    loadProblem(currentProblemIndex);
}

// Reset Progress
function resetProgress() {
    if (confirm('Are you sure you want to reset your progress?')) {
        localStorage.removeItem('userSolutions');
        localStorage.removeItem('currentProblemIndex');
        localStorage.removeItem('score');
        localStorage.removeItem('level');
        currentProblemIndex = 0;
        score = 0;
        level = 1;
        scoreDisplay.innerText = `Score: ${score}`;
        levelDisplay.innerText = level;
        loadProblem(currentProblemIndex);
    }
}

// Save High Score
function saveHighScore() {
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    highScores.push({ score: score, date: new Date().toLocaleString() });
    // Keep only top 5 scores
    highScores.sort((a, b) => b.score - a.score);
    if (highScores.length > 5) highScores.pop();
    localStorage.setItem('highScores', JSON.stringify(highScores));
}

// Display High Scores
function displayHighScores() {
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    scoresList.innerHTML = '';
    highScores.forEach((entry) => {
        const li = document.createElement('li');
        li.innerText = `Score: ${entry.score} - ${entry.date}`;
        scoresList.appendChild(li);
    });
}

// Event Listeners
runCodeBtn.addEventListener('click', runUserCode);
hintBtn.addEventListener('click', showHint);
nextBtn.addEventListener('click', nextProblem);
resetBtn.addEventListener('click', resetProgress);

// Main Menu Event Listeners
startGameBtn.addEventListener('click', () => {
    mainMenu.style.display = 'none';
    gameScreen.style.display = 'block';
    loadProgress();
    loadProblem(currentProblemIndex);
});

instructionsBtn.addEventListener('click', () => {
    instructionsModal.style.display = 'block';
});

highScoresBtn.addEventListener('click', () => {
    displayHighScores();
    highScoresModal.style.display = 'block';
});

closeInstructionsBtn.addEventListener('click', () => {
    instructionsModal.style.display = 'none';
});

closeHighScoresBtn.addEventListener('click', () => {
    highScoresModal.style.display = 'none';
});

// Close modals when clicking outside of them
window.addEventListener('click', (event) => {
    if (event.target == instructionsModal) {
        instructionsModal.style.display = 'none';
    }
    if (event.target == highScoresModal) {
        highScoresModal.style.display = 'none';
    }
});

// Initial Load
window.onload = () => {
    // Load main menu
    mainMenu.style.display = 'block';
    gameScreen.style.display = 'none';
};