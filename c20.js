// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {
    for(obj of dishData){
        var finalPrice;
        if(taxBoolean===true){
            finalPrice = obj.price * tax;
        }
        else if(taxBoolean===false){
            finalPrice = obj.price
        }
        else{
            console.log("You need to pass a boolean to the getPrices call!");
            return
        };
        console.log(`Dish: ${obj.name} Price: ${finalPrice}`)
        console.log(`Dish: ${dish.name} Price: $${finalPrice}`);

    }
}


// Implement getDiscount()
function getDiscount(taxBoolean,guests) {
    getPrices(taxBoolean);
    if(typeof(guests)==='number' && 0<guests<30){
        var discount = 0;
        if(guests<5){
            discount = 5;
        }
        else if(guests>=5){
            discount = 10;
        };
        console.log(`Discount is: $${discount}`);
        
    }
    else{
        console.log('The second argument must be a number between 0 and 30')
    }
}

// Call getDiscount()// Given variables
getDiscount(true, 2);
getDiscount(false, 10);




//copied code
// const dishData = [
//     {
//         name: "Italian pasta",
//         price: 9.55
//     },
//     {
//         name: "Rice with veggies",
//         price: 8.65
//     },
//     {
//         name: "Chicken with potatoes",
//         price: 15.55
//     },
//     {
//         name: "Vegetarian Pizza",
//         price: 6.45
//     },
// ]
// const tax = 1.20;

// // Implement getPrices()
// function getPrices(taxBoolean) {
//     for (dish of dishData) {           
//         if (taxBoolean == true) {        
//             finalPrice = dish.price * tax;       
//         } else if (taxBoolean === false) {
//             finalPrice = dish.price;
//         } else {
//             console.log('You need to pass a boolean to the getPrices call!')
//             return;
//         }
//         console.log(`Dish: ${dish.name} Price: $${finalPrice}`);
//     }

// }

// // Implement getDiscount()
// function getDiscount(taxBoolean, guests) {
//     getPrices(taxBoolean);   
//     let condition1 = typeof (guests) == 'number' && guests > 0;
//     let condition2 = typeof (guests) == 'number' && guests <= 30;
// if (condition1 && condition2) {
// //if (typeof (guests) == 'number' && guests>0 && guests <= 30) { /* can be substitue */
//         discount = 0;
//         if (guests < 5) {
//             discount = 5;
//         } else if(guests >=5) {
//             discount = 10; 
//         }
//         console.log('Discount is: $' + discount);
//     } else 
//         console.log('The second argument must be a number between 0 and 30');
    

// }

// // Call getDiscount()

// getDiscount(true, 2);
// getDiscount(false, 10)



