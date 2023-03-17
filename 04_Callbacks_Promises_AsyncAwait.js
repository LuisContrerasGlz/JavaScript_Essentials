// --Sync code--
// function print(string){
//     console.log(string)
// }

// print('Start')
// print('Printing something')
// print('Finish')


// --Async code--
// function print(string){
//     setTimeout( () => {
//         console.log(string)
//     }, Math.floor(Math.random() * 100)) 
// }

// print('Start')
// print('Printing something')
// print('Finish')


// --Callback--
// function print(string, callback) {
//     setTimeout(() => {
//         console.log(string)
//         callback()
//     }, Math.floor(Math.random() * 100))
// }

// print('Start', () => {
//     print('Printing something', () => {
//         print('Finish', () => { })
//     })
// })


// --Promise--
// function print(string) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(string)
//             resolve()
//         }, Math.floor(Math.random() * 100))
//     })
// }

// print('Start')
//     .then(() => print('Printing something'))
//     .then(() => print('Finish'))


// --Async-Await--
function print(string) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(string)
            resolve()
        }, Math.floor(Math.random() * 100))
    })
}

async function printAll() {
await print('Start')
await print('Printing something')
await print('Finish')
}

printAll()