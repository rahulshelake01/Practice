function isBalanced(input) {

    var strArray = input.split("")
    var stack = []

    for (var i=0;i<strArray.length; i++) {

        let check;

        switch (strArray[i]) {
            case "(":
            case "{":
            case "[":
                stack.push(strArray[i])
                continue
            case ")":
                check = "("
                break
            case "}":
                check = "{"
                break
            case "]":
                check = "["
                break
        }

        if (stack.length == 0) return false
        lastChar = stack.pop()

        if (lastChar != check) {
            return false
        }
    }

    return stack.length == 0
}

var input = "{}{([])}()"
console.log(isBalanced(input))