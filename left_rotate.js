var arr = [1,2,3,4,5]
var  n = 3
for(var i = 0; i < n; i++){
    var first = arr[0]
    for(var j = 0; j < arr.length-1; j++){
        arr[j] = arr[j+1]
    }
    arr[j] = first
}
console.log(arr)