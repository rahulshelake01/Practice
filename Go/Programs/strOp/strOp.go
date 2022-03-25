package strOp

import (
	"fmt"
	"strings"
)

func StrOpStart() {

	fmt.Println("String operation started ......")

	var myStr string = `
	Go Go Go is a a statically typed, compiled programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson.
	Go is syntactically similar to C, but with memory safety, garbage collection, structural typing, and CSP-style concurrency.
	`

	var strLinesArray = strings.Split(myStr, ".")

	fmt.Println("Total lines ----> ", len(strLinesArray))

	var wordsCount map[string]int = map[string]int{}

	for _, line := range strLinesArray {

		var lineWords []string
		lineWords = strings.Split(line, " ")

		for _, word := range lineWords {
			var w = strings.TrimSpace(word)
			if w == "" {
				continue
			}

			if _, ok := wordsCount[w]; ok {
				wordsCount[w] += 1
			} else {
				wordsCount[w] = 1
			}

		}

	}

	fmt.Println(wordsCount)

	for w, k := range wordsCount {

		fmt.Println(fmt.Sprintf("%s : %d ", w, k))

	}

}
