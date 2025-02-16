console.log("hi, im connected");
document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const phoneNumber = document.getElementById("phone-num").value;
    const phonePin = document.getElementById("phone-pin").value;
    if (phoneNumber === "0" && phonePin === "1234") {
      console.log("you are loged in");
      window.location.href = "/home.html";
    } else {
      alert("please correct your pin");
    }
  });
