function CountStrWordsAsPerOrder() {
    let inputStr = "sdfsdghbgffff"
    a = inputStr.split("").sort().reduce((total, letter) => {total[letter] ? total[letter]++ : total[letter]=1; return total}, {})
    return Object.keys(a).reduce((result, w)=> result=result+w+ a[w], "")
}
console.log(CountStrWordsAsPerOrder())

function ParagraphCountAsPerWord() {
    var paragraph = "In in this method, we' use predefined sort method of JavaScript to sort the array of string. This method is used only when the string is alphabetic. It will produce wrong results if we store numbers in an array and apply this method"
    return paragraph.replace(/,|'|\./g, "").split(" ").reduce((total, w)=> {
        total[w.toLocaleLowerCase()] ? total[w.toLocaleLowerCase()]++ : total[w.toLocaleLowerCase()]=1
        return total
    }, {})
}

console.log(ParagraphCountAsPerWord())