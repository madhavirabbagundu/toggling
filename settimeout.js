function first(){
    console.log("settimeout")
}
setTimeout(first,3000)
setInterval(second,2000)
function second(){
    console.log("setinterval")
}