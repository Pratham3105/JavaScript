let nums = [1,2,3,4,5,6,7,8,9,10]
const total = nums.reduce(function (Accumalator,currentValue){
    console.log(`Accumalator: ${Accumalator} and currentValue: ${currentValue}`);
    
    return Accumalator+currentValue
},0)

// const total1 = nums.reduce((Accumalator,currentValue)=> Accumalator+currentValue,0)
console.log(total); // 55

const shoppingCart = [
    {
        itemName: 'js course',
        price: 4999
    },
    {
        itemName: 'py course',
        price: 5999
    },
    {
        itemName: 'data science course',
        price: 7999
    },
    {
        itemName: 'aiml course',
        price: 5999
    },
]

const priceToPay = shoppingCart.reduce((acc,item)=>(acc+item.price),0)
console.log(priceToPay); // 24996
