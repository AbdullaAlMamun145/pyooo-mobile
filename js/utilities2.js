function getInputFeildValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);
  return inputNumber;
}
function getTextfeildValueById(textId) {
  const textVlaue = document.getElementById(textId).innerText;
  const textNumber = parseFloat(textVlaue);
  return textNumber;
}
function showSectionId(id) {
  document.getElementById("addmoney-form").classList.add("hidden");
  document.getElementById("cashOut-form").classList.add("hidden");
  document.getElementById("transtion").classList.add("hidden");
  // show button by clicked
  document.getElementById(id).classList.remove("hidden");
}
