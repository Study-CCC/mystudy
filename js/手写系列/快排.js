function quickSort(nums) {
  const sort = (left, right) => {
    if (left >= right) return;
    let index = partition(left, right)
    sort(left, index - 1)
    sort(index + 1, right)
  }
  const partition = (left, right) => {
    let temp = nums[left]
    while (left < right) {
      while (left < right && nums[right] >= temp) right--;
      nums[left] = nums[right]
      while (left < right && nums[left] <= temp) left++;
      nums[right] = nums[left]
    }
    nums[left] = temp
    return left
  }
  sort(0, nums.length - 1)
  return nums
}
