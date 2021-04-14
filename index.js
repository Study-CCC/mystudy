function solve(arr){
  let res = 0;
  arr.sort((a, b) => a[0] - b[0])
  let last = arr[0][0] + arr[0][1]
  res = last
  for (let i = 1; i < arr.length; i++){
      if(last>=arr[i][0]){
          res += arr[i][1]
      }else{
          res = res + arr[i][0]-last + arr[i][1]
      }
      last += arr[i][1]
  }
  return res;
}

function solve1(arr,x){
  let minCount = arr.length;
  let last = 1;
  let dp = []
  for(let i = 1;i <= arr.length;i++){
      if(parseInt(arr[i])-parseInt(arr[i-1])===parseInt(x)){
          last += 1;
      }else{
          dp.push([last,i-1])
          last = 1;
      }
  }
  dp.forEach(item=>{
    if (parseInt(arr[item[1]]) - item[1] * parseInt(x) > 0) {
      let count = arr.length - item[0]
          minCount = Math.min(minCount,count)
      }
  })
  return minCount;
}
console.log(solve1([1,3,5,14,16,18,20,22,24],2))