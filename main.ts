// Assalamualaikum @everyone 👋

// 🚀 Day 36 Challenge: Start Coding! 🚀

// Question 106: Determine if a given year is a leap year using comparison operators.
function leapYear(year: number): boolean{
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(leapYear(2024));
console.log(leapYear(2023));
console.log(`\n`);

// Question 107: Write a condition using logical operators that checks if a number is divisible by both 2 and 3.
function divisibleByTwoAndThree(num: number): boolean{
    return num % 2 === 0 && num % 3 === 0;
}
console.log(divisibleByTwoAndThree(24));
console.log(divisibleByTwoAndThree(20));
console.log(`\n`);

// Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.
function areStringsEqualIgnoringCase(str1: string, str2: string): boolean{
    return str1.toLowerCase() === str2.toLowerCase();
}
console.log(areStringsEqualIgnoringCase("pakistan", "Pakistan"));
console.log(areStringsEqualIgnoringCase("Karachi", "Carachi"));
