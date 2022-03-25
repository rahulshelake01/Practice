package main

import (
	"fmt"
	"sort"
	"strings"
)

func WinLos() {

	votes := "aab"

	voteMaps := make(map[string]int)       //{a:4,b:3, c:2}
	votesArray := strings.Split(votes, "") // [a,a,a,a,c,....]

	for _, v := range votesArray {
		c, _ := voteMaps[v]
		voteMaps[v] = c + 1
	}

	var voteValues []int

	for _, value := range voteMaps {
		voteValues = append(voteValues, value)
	}

	sort.Ints(voteValues)

	if len(voteValues) > 1 {

		max := voteValues[len(voteValues)-1]
		min := voteValues[0]

		maxCount := 0
		minCount := 0

		winner := ""
		losser := ""

		for word, v := range voteMaps {

			if v == max {
				maxCount++
				winner = word
			}

			if v == min {
				minCount++
				losser = word
			}

		}

		if maxCount > 1 {
			fmt.Println("No winner")
		} else {
			fmt.Println("Winner is --> ", winner)
		}

		if minCount > 1 {
			fmt.Println("No losser")
		} else {
			fmt.Println("losser is --> ", losser)
		}

	} else {
		fmt.Println("No winner, No losser")
	}
}
