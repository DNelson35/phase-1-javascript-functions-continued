// code your solution here

function saturdayFun(act = "roller-skate"){
    return `This Saturday, I want to ${act}!`
}

const mondayWork = function(act = "go to the office"){
    return `This Monday, I will ${act}.`
}

function wrapAdjective(symbol = '*'){
    return function(message = "special"){
        return `You are ${symbol}${message}${symbol}!`
    }
}

