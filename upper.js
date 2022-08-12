var arr = [6,5,2,8,9]
var i = 0;
var j = arr.length-1
var k = 5;
var ans = 0;
while(i <= j){
    var mid = i+Math.floor((j-i)/2)
    if(arr[mid] > k){
        ans = mid
        j = mid-1
    }
    else{
        i = mid+1
    }
}
console.log(ans)