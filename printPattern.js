// Function to print the star pattern
function printStarPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern += '*'; // Add a star to the current row
        }
        console.log(pattern); // Print the current row
    }
}

// Call the function to print the pattern with 5 rows
printStarPattern(5);
