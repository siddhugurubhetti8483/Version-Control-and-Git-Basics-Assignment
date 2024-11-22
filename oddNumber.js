
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Odd numbers
for(i = 0; i <= arr.length - 1; i++) {
    let odd = "";
    if (arr[i] % 2 !== 0) {
        odd = arr[i] + " ";
    }
    console.log(odd);
}