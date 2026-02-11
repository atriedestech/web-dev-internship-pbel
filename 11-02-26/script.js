let myName = "Rahul";
let count = 0;
let vowels = "aeiouAEIOU";

for (let i = 0; i < myName.length; i++) {
    let letter = myName[i];

    if (vowels.includes(letter)) {
        count = count + 1;
    }
}

console.log("Name:", myName);
console.log("Vowel Count:", count);
