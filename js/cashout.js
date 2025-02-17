document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashOutMoney = document.querySelector("#input-cash-out").value;
    const cashOutPinSet = document.querySelector("#input-cashout-pin").value;
    if (cashOutPinSet === "111") {
      const totalCashOut = document.getElementById("account-balance").innerText;
      const totalCashOutNum = parseFloat(totalCashOut);
      const cashOutNum = parseFloat(cashOutMoney);
      const newCashOut = totalCashOutNum - cashOutNum;
      document.getElementById("account-balance").innerText = newCashOut;
    } else {
      alert("error");
    }
  });
