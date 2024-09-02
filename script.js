const button = document.querySelector("#btn");
button.addEventListener("click", calculateAmount);

const buttonTip = document.querySelector("#addTip");
buttonTip.addEventListener("click", showTip);

function showTip(e) {
    e.preventDefault();

    tip.style.display = "block";
}

function calculateAmount(e) {
    e.preventDefault();

    const bill = document.querySelector("#bill").value;
    const people = document.querySelector("#people").value;
    const tip = document.querySelector("#tip").value;

    if (bill === "" || people === "") {
        Swal.fire({
            icon: "error",
            title: "Ошибка!",
            text: "Введите информацию!",
        });

    }

    let amountPerPerson = (bill / people);
    let tipPerPerson = (bill * tip) / people;
    let totalSum = amountPerPerson + tipPerPerson;


    document.querySelector("#dividedBill").textContent = amountPerPerson.toFixed(2);
    document.querySelector("#dividedTip").textContent = tipPerPerson.toFixed(2);
    document.querySelector("#billAndTip").textContent = totalSum.toFixed(2);

}