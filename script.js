function calculateAndDisplay () 
{
    // input values from html
    let bill = parseFloat(document.getElementById('totalBill').value)
    let numOfPpl = parseInt(document.getElementById('numOfPeople').value)
    let serviceQuality = document.getElementById('serviceQuality').value

    let tip = calculateTip(bill, serviceQuality)
    let totalBill = calculateTotalBill(bill, tip)
    let amtPerPers = calcAmtPerPrs(totalBill, numOfPpl)
  
    document.getElementById('tipResult').innerText = 'Tip: $' + tip.toFixed(2)
    document.getElementById('totalBillResult').innerText =
      'Total Bill: $' + totalBill.toFixed(2)
    document.getElementById('amtPerPersonResult').innerText =
      'Amount per person: $' + amtPerPers.toFixed(2)
}
    //Helper Function to calculate Tip based on the bill and service Quality
function calculateTip(bill, quality) {
    if (quality === 'Great') {
      return bill * 0.2
    } else if (quality === 'Good') {
      return bill * 0.15
    } else if (quality === 'Poor') {
      return bill * 0.1
    } else {
      return 0
    }
  }
  
  // calculate total bill by adding the original bill and tip
  function  calculateTotalBill(bill, tip) {
    return bill + tip
  }
  
  // calculate amount per person by dividing total bill by the number of people
  function calcAmtPerPrs(totalBill, numOfPpl) {
    return totalBill / numOfPpl
  }
  
















/* let bill = 120 
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
console.log('Amount per person $'+ amountPerPerson) */