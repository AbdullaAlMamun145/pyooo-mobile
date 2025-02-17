// recap add money
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const inputGetAmount = document.getElementById("input-add-money").value;
    const inputPin = document.getElementById("input-pin-set").value;
    if (inputPin === "11") {
      const totalAmount = document.getElementById("account-balance").innerText;
      const totalAmountNum = parseFloat(totalAmount);
      const inputGetAmountNum = parseFloat(inputGetAmount);
      const newBalance = totalAmountNum + inputGetAmountNum;
      console.log(newBalance);
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("please correct your password");
    }
  });
