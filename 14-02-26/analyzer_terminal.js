var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var marks = [];
var i = 0;

var takeInput = function () {
    if (i < 5) {
        rl.question("Enter marks for Subject " + (i + 1) + ": ", function (answer) {
            var num = Number(answer);
            marks.push(num);
            i++;
            takeInput();
        });
    } else {
        rl.close();

        var total = 0;
        for (var j = 0; j < marks.length; j++) {
            total = total + marks[j];
        }

        var avg = total / 5;
        var grade;

        if (avg >= 90) {
            grade = "A+";
        } else if (avg >= 75) {
            grade = "A";
        } else if (avg >= 60) {
            grade = "B";
        } else if (avg >= 40) {
            grade = "C";
        } else {
            grade = "Fail";
        }

        console.log("Total Marks: " + total);
        console.log("Avg: " + avg);
        console.log("Grade: " + grade);
    }
};

takeInput();
