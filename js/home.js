// add money to the pyoo
// s-1 add event handler on add money button
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // s-2 get money added to the account
    const addMoneyInput = document.getElementById("input-add-money").value;

    // get pin number
    const getPinNum = document.getElementById("input-pin-set").value;
    console.log(addMoneyInput, getPinNum);
    if (getPinNum === "1234") {
      const balance = document.getElementById("account-balance").innerText;
      console.log(balance);
      // const newBalance = balance + addMoneyInput;
      // console.log(newBalance);
      const addMoneyNumber = parseFloat(addMoneyInput);
      const totalAmount = parseFloat(balance);
      console.log(addMoneyNumber, totalAmount);
      const newBalance = addMoneyNumber + totalAmount;
      console.log(newBalance);
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("wrong password");
    }
  });
