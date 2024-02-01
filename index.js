"use strict";
const tipCalculator = () => {
  const billAmount = document.querySelector("#bill-amount").value;
  const numberOfBillPayers = document.querySelector(".numsOfBillPayer").value;
  const service = document.querySelector("#service").value;
  if (billAmount === "" || service === 0) {
    document.querySelector("h1").textContent = "Please enter required values";
  }
  if (numberOfBillPayers === "" || numberOfBillPayers === 0) {
    numberOfBillPayers = 1;
  }

  let totalAmount = (billAmount * service) / numberOfBillPayers;
  totalAmount = Math.trunc(totalAmount * 100) / 100;
  console.log(totalAmount);
  document.querySelector(
    "#tip"
  ).textContent = `Each have to pay: ${totalAmount} Rs/-`;
};
document.querySelector("#tip-calculator").addEventListener("click", () => {
  tipCalculator();
});
document.querySelector("#reset-values").addEventListener("click", () => {
  document.querySelector("#bill-amount").value = "";
  document.querySelector("#service").value = 0;
  document.querySelector(".numsOfBillPayer").value = "";
  document.querySelector("h1").textContent = "tip-calculator";
  document.querySelector("#tip").style.display = "none";
});
