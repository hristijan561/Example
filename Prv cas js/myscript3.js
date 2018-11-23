// function iphonePrice(number, type, price) {
//     var price = 899.95;
//     var tax = (price * 5)/100;
//     var tax1 = (price * 2)/100;
//     var custom = (price * 18)/100;
//     var realPrice = price + tax + custom;

//     if(type === "A") { 
//         var realPrice = number *  (price + tax1 + custom);
//     }else if(type ==="IOS") { 
//         var realPrice = number *  (price + tax + custom);
//     }

//     return realPrice
// }

// var vrednost = iphonePrice(30,"IOS", 1000);
// alert(vrednost);






// function phoneImport(items, price, type){
//     var result = items * price;

//     if (type === "IOS") { 
//         result += result * 0.05;
//         result += result * 0.18;
//         result -= result * 0.05;
        

//     } else if (type === "DROID") { 
//         result += result * 0.05;
//         result += result * 0.18;
//         result -= result * 0.05;
//     }else { 
//         result += result * 0.05;
//         result += result * 0.18;

//     }
//     return result
// }
function pari(){ 
var cash=prompt("Imas li pari?");
if (cash > 100) { 
    cash="imas";
} else if(cash < 100){ 
    cash= " nemas";
}else { 
    cash="zver";
}

alert(cash);
return cash;

}

pari();


