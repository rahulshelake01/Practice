function getData(name, cb) {

    return new Promise(function(resolve, reject) {


        setTimeout(function(){
            var respo = {
                name: name,
                mob: 84554545454
            }

            resolve(respo)
    
        }, 4000)


    })
    
}

getData("Rahul").then((res) => {

    console.log("In then .......")
    console.log(res)

}).catch((err) => {

    console.log("In catch .......")
    console.log(err)

})



