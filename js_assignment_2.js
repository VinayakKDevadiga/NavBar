// Counting Even Numbers

function countEvenNumbers(numbers) {
    let count=0
    for (var i=0;i<numbers.length;i++){
        if (numbers[i]%2==0){
            count++
        }
    }
    return count
    
}
    // Example usage
    console.log(countEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: 3
    
