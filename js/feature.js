// for cash Out
document.getElementById("btn-cashOut").addEventListener("click", function () {
  document.getElementById("cashOut-form").classList.remove("hidden");
  document.getElementById("addmoney-form").classList.add("hidden");
});
// for add Money
document.getElementById("btn-addMoney").addEventListener("click", function () {
  document.getElementById("addmoney-form").classList.remove("hidden");
  document.getElementById("cashOut-form").classList.add("hidden");
});
