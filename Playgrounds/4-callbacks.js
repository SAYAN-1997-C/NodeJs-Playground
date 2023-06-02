// setTimeout(() => {
//     console.log('Two second up ')
// },2000)

const names = ['sayan','samrat','koushik']
const shortNames = names.filter((name) => {
    return name.length <= 5
})

const geocode = (address,callback) => {
    
    setTimeout(()=>{
        const data = {
            latitude : 0,
            longitude : 0
        }

        callback(data)
    },2000)
}
geocode('salap',(data) => {
    console.log(data)
})

const add = (a,b,callback) =>{
    callback(a+b)
}
add(1,4,(sum) => {
    console.log(sum)
})