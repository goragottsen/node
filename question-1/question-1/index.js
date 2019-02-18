function multiplyNumbers(v){
    var p = new Promise((resolve, reject) => {
        let res = v.filter((i) => typeof i == 'number').map(i => i*5);

        if(res && res.length > 0){
            resolve(res)
        } else {
            reject("No numbers found!")
        }
    });

    return p;
}

const mixedArray = ['Matrix', 1, true, 2, false, 3];

multiplyNumbers(mixedArray).then(data => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})