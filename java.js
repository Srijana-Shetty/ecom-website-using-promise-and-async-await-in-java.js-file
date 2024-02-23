//promise

function createUser(){
    //fetch
    //axios
    //db requests
    //api
    return new Promise(function(resolve, reject){
        const userId = new Date().getTime()

        resolve(userId)
    })
}

function createOrder(userId){
    if(userId){
        return new Promise(function(resolve, reject){
            const orderId = new Date().getTime()
            resolve(orderId)
        })
    }
}

function createCart(orderId){
    if(orderId){
        return new Promise(function(resolve, reject){
            const cart =["A", "B"]
            resolve(cart)
        })
    }
}

function createPayment(cart){
    if(cart.length){
        return new Promise(function(resolve, reject){

            resolve(454212221212)
        })
    }
}


function createShipMent(id){
    if(id){
        return new Promise(function(resolve, reject){

            resolve(653232323232)
        })
    }
}

let finalVar =0
createUser()
.then(userId=>{
    return createOrder(userId)
    
})
.then(orderId=>{
    return createCart(orderId)
})
.then(cart=>{
   return createPayment(cart)
})
.then(paymentId=>{
 return createShipMent(paymentId)
})
.then(data=>{
    console.log(data)
    finalVar = data
})
.catch(err=>console.log(err))


console.log(finalVar)

setTimeout(()=>{
    console.log(finalVar, "SetTimeout")
}, 5000)



//async - await

function createUser(){
    //fetch
    //axios
    //db requests
    //api
    return new Promise(function(resolve, reject){
        const userId = new Date().getTime()

        resolve(userId)
    })
}

function createOrder(userId){
    if(userId){
        return new Promise(function(resolve, reject){
            const orderId = new Date().getTime()
            resolve(orderId)
        })
    }
}

function createCart(orderId){
    if(orderId){
        return new Promise(function(resolve, reject){
            const cart =["A", "B"]
            resolve(cart)
        })
    }
}

function createPayment(cart){
    if(cart.length){
        return new Promise(function(resolve, reject){

            resolve(454212221212)
        })
    }
}


function createShipMent(id){
    if(id){
        return new Promise(function(resolve, reject){

            resolve(653232323232)
        })
    }
}

let finalVar =0
createUser()
.then(userId=>{
    return createOrder(userId)
    
})
.then(orderId=>{
    return createCart(orderId)
})
.then(cart=>{
   return createPayment(cart)
})
.then(paymentId=>{
 return createShipMent(paymentId)
})
.then(data=>{
    // console.log(data)
    finalVar = data
})
.catch(err=>console.log(err))

async function getData (){
    const userId = await createUser()
        const orderId = await createOrder(userId)
        const cart = await createCart(orderId)
        const pay = await createPayment(cart)
        const p = await Promise.race([createUser(), createOrder(userId)]);
        console.log(p)

  
}
const payment  = getData().then(data=>{
    console.log(data)
})
// console.log(payment);