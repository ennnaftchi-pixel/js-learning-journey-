// Day 4 — Student Score Manager

const scores = [12, 9, 15, 8, 14];

function addScore(scores, newScore) {
    scores.push(newScore);
}

function calculateAverage(scores) {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }
    return total / scores.length;
}

function findMin(scores) {
    let min = Infinity;
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] < min) min = scores[i];
    }
    return min;
}

function findMax(scores) {
    let max = -Infinity;
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > max) max = scores[i];
    }
    return max;
}

function classifyAverage(avg) {
    if (avg > 16) {
        return "Excellent";
    } else if (avg >= 10) {
        return "Pass";
    } else {
        return "Fail";
    }
}

// ----- Main program -----

addScore(scores, 17);

const avg = calculateAverage(scores);
const min = findMin(scores);
const max = findMax(scores);
const result = classifyAverage(avg);

console.log("Scores:", scores);
console.log("Average score:", avg.toFixed(2));
console.log("Min score:", min);
console.log("Max score:", max);
console.log("Result:", result);