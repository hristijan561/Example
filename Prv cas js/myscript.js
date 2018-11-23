// function temperatura(celsius) { 
//     var result = celsius * 1.8 + 32;
//     return result;
// }

// function temperatura(fahrenheit) { 
//     var result = fahrenheit(5/9)*(fahrenheit-32);
//     return result;
// }

function converter(temperature, type) { 
    var result;

    if(type === "C") { 
        result = temperature * 1.8 + 32;
    } else if (type === "F") { 
        result = 5 / 9 * (temperature - 32);
    } else { 
        result = "the value cant be converted";
    }
    
    console.log("we are done");
    return result;
}