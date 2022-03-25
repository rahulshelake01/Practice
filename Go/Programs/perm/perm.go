package perm

import (
	"fmt"
)

func StartPermutation() {

	var input = []string{"A", "B", "C", "A"}

	var uniqueInput []string
	var uniqueMap = make(map[string]bool)

	for _, char := range input {
		if _, ok := uniqueMap[char]; !ok {
			uniqueMap[char] = true
			uniqueInput = append(uniqueInput, char)
		}
	}

	generate(uniqueInput, 0, len(uniqueInput))

}

func generate(arr []string, start int, end int) {
	if start >= end {
		fmt.Println(arr)
	}
	for i := start; i < end; i++ {
		swap(arr, i, start)
		generate(arr, start+1, end)
		swap(arr, start, i)
	}
}

func swap(arr []string, i int, j int) {
	arr[i], arr[j] = arr[j], arr[i]
}
