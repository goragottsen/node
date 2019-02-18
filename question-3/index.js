const delayedPromise = num => {
    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num * num);
        }, 500);
    })
    return p;
}

const delayedPromise2 = num => {
    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num * num);
        }, 500);
    })

    return p;
}

const resolveAll = () => {
    const p = new Promise(function(resolve, reject) {
        return Promise.all([delayedPromise(6), delayedPromise2(7)])
            .then(nums => console.log(nums));
    })

    return p;
}

resolveAll()