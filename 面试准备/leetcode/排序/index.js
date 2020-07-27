// 冒泡排序  时间复杂度 O(n^2) 空间复杂度 O(1)
function bubbleSort(arr) {
    let len = arr.length
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
}

// 选择排序 时间复杂度 O(n^2) 空间复杂度 O(1)
function selectionSort(arr) {
    let len = arr.length
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i
        for (let j = i; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
}

// 插入排序 时间复杂度O(n^2) 空间复杂度 O(1)
function insertionSort(arr) {
    let len = arr.length
    for (let i = 1; i < len; i++) {
        index = i
        for (let j = i - 1; j >= 0; j--) {
            if (arr[index] < arr[j]) {
                [arr[index], arr[j]] = [arr[j], arr[index]]
                index = j
            } else break;
        }
    }
}

// 快速排序 时间复杂度O(nlogn) 空间复杂度O(logn)
function quickSort(arr, left, right) {
    if (left < right) {
        let start = left
        let end = right
        let x = arr[start]
        while (start < end) {
            while (x < arr[end]) {
                end--;
                if (end == start) break;
            }
            while (x >= arr[start]) {
                if (end == start) break;
                start++;
            }
            [arr[start], arr[end]] = [arr[end], arr[start]]
        }
        arr[start] = x
        quickSort(arr, left, start - 1)
        quickSort(arr, end + 1, right)
    }
}
quickSort(arr, 0, 6)

// 希尔排序 时间复杂度O(nlogn) 空间复杂度O(1)
function shellSort(arr) {
    let len = arr.length
}
let arr = [1, 4, 2, 5, 12, 532, 2]
console.log(arr)