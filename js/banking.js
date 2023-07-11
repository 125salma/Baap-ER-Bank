//handel deposite button event
document.getElementById('deposit-button').addEventListener('click',function(){
 //get the amount deposited
 const depositInput = document.getElementById('deposit-input');

const newDepositAmountText=depositInput.value;

const newDepositAmount = parseFloat(newDepositAmountText);
//update deposit total
const depositTotal=document.getElementById('deposit-total');

const previousDepositText = depositTotal.innerText;

const previousDepositAmount = parseFloat(previousDepositText);

const newDepositeTotal = previousDepositAmount+newDepositAmount;
depositTotal.innerText= newDepositeTotal;

// update account balance
const balanceTotal = document.getElementById('balance-total');
const previousBalanceText = balanceTotal.innerText;
const previousBalanceAmount = parseFloat(previousBalanceText);

const newBalanceTotal = previousBalanceAmount+newDepositAmount;
balanceTotal.innerText =newBalanceTotal;


//clear the deposite input field
depositInput.value='';
})

//handel withdraw event handeler
document.getElementById('withdraw-button').addEventListener('click',function(){
 const withdrawInput = document.getElementById('withdraw-input');
  const newWithdrawAmountText =withdrawInput.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountText);
  console.log(newWithdrawAmount);
  
  //set withdraw total
  const withdrawTotal = document.getElementById('withdraw-total');
  const previousWithdrawText =withdrawTotal.innerText;
  const previousWithdrawAmount  = parseFloat(previousWithdrawText);


  const newWithdrawTotal=previousWithdrawAmount+newWithdrawAmount;
  withdrawTotal.innerText=newWithdrawTotal;

  //clear withdraw input
  withdrawInput.value='';

  //update balance
  const balanceTotal = document.getElementById('balance-total');
  const previousBalanceText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceText);
  const newBalanceTotal = previousBalanceTotal -  newWithdrawAmount;
  balanceTotal.innerText=newBalanceTotal;

})

