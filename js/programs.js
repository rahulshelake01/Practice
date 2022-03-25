function palindromNumber(number) {
    isPalindrom=true
    for (let i = 0, j = `${number}`.length-1; i <=j; i++,j--) {
        if(`${number}`[i]!=`${number}`[j]) {
            isPalindrom=false
        }
    }
    console.log(number , "is", isPalindrom ? "palindrom " : "not palindrom")
}

// palindromNumber("12343211")

function factorial(n) {
    if (n==0) return 1
    if (n > 0) return n *  factorial(n-1)
    if (n < 0) return n *  factorial(n+1)
}

console.log(factorial(1))