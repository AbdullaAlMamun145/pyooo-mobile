document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("add money click");
    // const addmoney = getInputFeildValueById();
    // console.log("value of addMoney", addmoney);
    const addmoney = getInputFeildValueById("input-add-money");
    const pinNumber = getInputFeildValueById("input-pin-set");
    console.log("for parameter", addmoney, pinNumber);
  });
