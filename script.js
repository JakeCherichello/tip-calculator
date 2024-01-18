let bill = 120 
let numOfPpl = 5
let serviceQuality = `Great`

function calculateTip(quality){
    if(quality === `Great`){
        return bill * .2
    } 
    else if (quality === 'good'){
        return bill * 0.15
    }
    else if (quality === 'poor'){
        return bill * 0.10
    } 
    else{
    //  alert("Please enter a vlaid review")
    }
}

let tip = calculateTip (serviceQuality)

function calculateTotalBill(bill, tip){
    return bill + tip
}

let totalBill = calculateTotalBill(bill, tip)

function calculateAmountPerPerson(totalBill, numOfPpl){
    return totalBill / numOfPpl
}

let amountPerPerson = calculateAmountPerPerson (totalBill, numOfPpl)

console.log('Tip $'+ tip)
console.log('Total Bill $'+ totalBill)
console.log('Amount per person $'+ amountPerPerson)