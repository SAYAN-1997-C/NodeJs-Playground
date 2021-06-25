//object property shorthand

const name = 'Sayan'
const age = 24
// const user = {
//     name : name,
//     age : age,
//     location : 'Salap Howrah'
// }
// console.log(user)
const user = {
    name,
    age,
    location: 'Salap Howrah'
}
// console.log(user)

//Object destructuring

const product = {
    label : 'Red notebook',
    price : 3,
    stock : 201,
    salePrice : undefined,
    rating : undefined
}

// const label = product.label
// const price = product.price

// const {label:productLabel, stock, rating = 5} =  product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type,{label ,stock,rating = 5} = {}) => {
    console.log(type,label,stock)
    console.log(rating)
}
transaction('order',product)