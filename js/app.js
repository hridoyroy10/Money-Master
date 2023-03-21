function getTotalFreeById(element){
    // step:2
    const foodFreeElement = document.getElementById(element);
    const foodFreeString = foodFreeElement.value;
    const previousFoodFree = parseFloat(foodFreeString);
    return previousFoodFree;
}

function calculateExpense(){
    // step: 1
    const foodFreeElement = getTotalFreeById('food');
    const rentFreeElement = getTotalFreeById('rent');
    const clothesAmountElement = getTotalFreeById('clothes');
    // step: 3
    const currentTotalAmount = foodFreeElement + rentFreeElement + clothesAmountElement;
    const totalAmount = document.getElementById('total-expense');
    totalAmount.innerText = currentTotalAmount;

    // step: 4
    const incomeMinusElement = document.getElementById('income');
    const incomeMinusString = incomeMinusElement.value;
    const incomeMinusTotalAmount = parseInt(incomeMinusString);
    const totalMinusAmount = incomeMinusTotalAmount - totalAmount.innerText;
    // console.log(totalMinusAmount);
    const setTotalBalance = document.getElementById('balance');
    setTotalBalance.innerText = totalMinusAmount;
}

function calculateSavings(){
    const income = document.getElementById('income').value;

    const savePercentage = document.getElementById('save').value;
    // console.log(savePercentage);

    if (savePercentage < 0) {
        alert("Provide positive saving value");
        return;
    }
    // console.log(savingAmount);

    const savingAmount = (savePercentage / 100) * income;
   
    // calculate remaining balance
  const balance = document.getElementById("balance").innerText;
  const remainingBalance = balance - savingAmount;

  //   validate saving amount
  if (savingAmount > balance) {
    alert("SavingAmount is greater than balance");
  } else {
    // view saving amount and remaining balance
    document.getElementById("saving-amount").innerText = savingAmount;
    document.getElementById("remaining-balance").innerText = remainingBalance;
  }
}