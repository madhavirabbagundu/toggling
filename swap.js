var n = 4
var arr = [4,3,1,2]
    let swaps = 0;

    const tmp = {};
    arr.forEach((v, i) => tmp[v] = i);;
    // console.log(v,i)

    arr.forEach((v, i) => {
        // because they are consecutives, I can see if the number is where it belongs
        if (arr[i] !== i+1) {
            swaps += 1
            const t = arr[i]
            arr[i] = i+1
            arr[tmp[i+1]] = t
            
             tmp[t] = tmp[i+1]
        }
    });

    console.log(swaps)

