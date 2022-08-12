var arr = [2,4,6,7,1]
var i = 0;
var j = arr.length-1
var k = 6;
var ans = 0;
while(i <= j){
    var mid = i+Math.floor((j-i)/2)
    if(arr[mid] === k){
        ans = mid
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
