var arr = [1,2,-2,8,2,3,4]
arr.sort()
console.log(arr)
var i = 0;
var j = arr.length-1
var k = 0;
var ans = -1;
while(i <= j){
    var mid = i+Math.floor((j-i)/2)
    if(arr[mid] === k){
        ans = 1
        j = mid-1
    }
    else if(arr[mid] > k){
        j = mid-1
    }
    else{
        i = mid+1
    }
}
console.log(ans)



function diff(arr){
    var i = 0;
    var j = arr.length-1
    var k = 3
while(i < j){
    console.log(arr[i]+arr[j])
    if(arr[i]+arr[j] === k){
        // i++
        // j++
        return [i,j]

        
    }
    else if(arr[i]+arr[j] > k){
        j--
    }
    else{
        i++
    }
}
}
console.log(diff([0,1,2,4,6,8,9]))