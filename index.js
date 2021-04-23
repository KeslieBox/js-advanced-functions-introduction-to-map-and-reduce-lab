// Your code here
function mapToNegativize(sourceArray) {
    let newArray = []
    for(let i = 0; i < sourceArray.length; i++){
        newArray.push(sourceArray[i] * -1) 
    }
    return newArray
}

function mapToNoChange(sourceArray){
    let a = []
    for(let i = 0; i < sourceArray.length; i++) {
        a.push(sourceArray[i])
    }
    return a
}

function mapToDouble(sourceArray) {
    let a = []
    for(let i = 0; i < sourceArray.length; i++){
        a.push(sourceArray[i] * 2) 
    }
    return a
}

function mapToSquare(sourceArray) {
    let a = []
    for(let i = 0; i < sourceArray.length; i++){
        a.push(sourceArray[i] ** 2) 
    }
    return a
}

function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint
    for(let i = 0; i < sourceArray.length; i++){
        total += sourceArray[i]
    }
    return  total
}

function reduceToAllTrue(sourceArray){
    for(let i = 0; i < sourceArray.length; i++) {
        console.log(!sourceArray[i])
        if (!sourceArray[i]) return false
    }
    return true
}

function reduceToAnyTrue(sourceArray) {
    for(let i = 0; i < sourceArray.length; i++){
        if (sourceArray[i]) return true
    }
    return false
}