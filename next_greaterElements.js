// var arr = [1,3,2,4]
function greater(arr){
var out = []
var stk = [arr[arr.length-1]]
for(var i = arr.length-1;i >= 0; i--){
    while(stk[stk.length-1] <= arr[i]){
        stk.pop()
    }
    if(stk.length===0){
        out.push(-1)
        stk.push(arr[i])
    }
    else if(stk.length!==0){
        out.push(stk[stk.length-1])
        stk.push(arr[i])
    }
}
return out.reverse()
}
console.log(greater([1,3,2,2]))