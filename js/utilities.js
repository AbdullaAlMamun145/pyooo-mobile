// common function here
// function getInputFeildValueById() {
//   console.log("hi mama form utilities");
//   const addMoney = document.getElementById("input-add-money").value;
//   return addMoney;

const { invalidateTypeCache } = require("vue/compiler-sfc");

// }
function getInputFeildValueById(id) {
  const inputValue = document.getElementById(id).value;
  return inputValue;
}
