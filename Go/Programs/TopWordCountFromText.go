package main

import (
	"fmt"
	"sort"
	"strings"
)

func GetTopWordCountText(text string) {

	wordsMap := make(map[string]int)

	for _, w := range strings.Split(text, " ") {
		c, _ := wordsMap[w]
		wordsMap[w] = 1 + c
	}

	n := make(map[int][]string)

	var numbers []int

	for value, nums := range wordsMap {
		n[nums] = append(n[nums], value)
	}

	for no := range n {
		numbers = append(numbers, no)
	}

	sort.Slice(numbers, func(i, j int) bool { return numbers[i] > numbers[j] })

	result := make(map[string]int)

	c := 0

	for _, k := range numbers {
		for _, w := range n[k] {
			if c >= 2 {
				continue
			}
			result[w] = k
			c++
		}
	}

	fmt.Println(result)

}
