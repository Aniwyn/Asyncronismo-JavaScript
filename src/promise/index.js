const somethingsWillHappen = () => {
    const confirm = true
    return new Promise((resolve, reject) => {
        if (confirm) {
            resolve('Hey!')
        } else {
            reject('Whooops!')
        }
    })
}

somethingsWillHappen()
    .then(response => console.log(response))
    .catch(error => console.error(error))

const somethingsWillHappen2 = () => {
    const confirm = true
    return new Promise((resolve, reject) => {
        if (confirm) {
            setTimeout(() => {
                resolve('True')
            }, 2000)
        } else {
            const error = new Error('Whooops!')
            reject(error)
        }
    })
}

somethingsWillHappen2()
    .then(response => console.log(response))
    .catch(error => console.error(error))


Promise.all([somethingsWillHappen(), somethingsWillHappen2()])
    .then(response => {
        console.log('Array of results', response)
    })
    .catch(error => {
        console.error(error)
    })