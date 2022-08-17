// var n = 4
function Number(n){
if(n < 0){
return 0
}
else if(n === 0)
{
    return 1
}
else{
    return Number(n-1)+Number(n-2)+Number(n-3)
}
}
console.log(Number(4))
