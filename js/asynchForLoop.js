
(async () => {

    let arr = [1,2,3,4,5]

    await Promise.all(arr.map(async (element, i )=> {

        let num = await BlockMe(element)
        console.log(num)

    }))

    console.log("Hello .....")

})()


async function BlockMe(num) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(num)
        }, 5000)
    })
}