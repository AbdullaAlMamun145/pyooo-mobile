document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const inputCashOut = getInputFeildValueById("input-cash-out");
    const inputPin = getInputFeildValueById("input-cashout-pin");
    if (isNaN(inputCashOut)) {
      alert("error, failed loading...");
    }
    if (inputPin === 111) {
      const balance = getTextfeildValueById("account-balance");
      const newBalance = balance - inputCashOut;
      document.getElementById("account-balance").innerText = newBalance;
      //   add to transaction history
      const div = document.createElement("div");
      div.classList.add("bg-yellow-300");
      div.innerHTML = `
        <h4 class"text-2xl font-bold">cash Out</h4>
        <p>${inputCashOut} withdraw. New balance${newBalance}
        
        `;
      document.getElementById("transtion-container").appendChild(div);
    } else {
      alert("error");
      return;
    }
  });
