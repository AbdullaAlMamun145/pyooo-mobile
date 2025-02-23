document.getElementById("btn-addMoney").addEventListener("click", function () {
  console.log("click here");
  showSectionId("addmoney-form");
});
document.getElementById("btn-cashOut").addEventListener("click", function () {
  showSectionId("cashOut-form");
});
document
  .getElementById("btn-transition")
  .addEventListener("click", function () {
    showSectionId("transtion");
  });
