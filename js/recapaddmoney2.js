document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addmoney = getInputFeildValueById("input-add-money");
    const pinNumber = getInputFeildValueById("input-pin-set");
    // console.log("from 2", addmoney, pinNumber);
    if (isNaN(addmoney)) {
      alert("error.. failed loading");
      return;
    }
    if (pinNumber === 111) {
      const balance = getTextfeildValueById("account-balance");
      console.log(balance);
      const newBalance = addmoney + balance;

      document.getElementById("account-balance").innerText = newBalance;
      //   to add transaction
      const p = document.createElement("p");
      p.innerText = `added ${addmoney} tk., New balance ${newBalance}`;
      //   console.log(p);
      document.getElementById("transtion-container").appendChild(p);
    } else {
      alert("wrong pass");
    }
  });
