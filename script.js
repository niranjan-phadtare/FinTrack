let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

function addTransaction() {
    const desc = document.getElementById("desc").value;
    const amount = Number(document.getElementById("amount").value);
    const type = document.getElementById("type").value;

    if (desc === "" || amount === "") {
        alert("Please fill all fields");
        return;
    }

    transactions.push({ desc, amount, type });
    localStorage.setItem("transactions", JSON.stringify(transactions));

    updateUI();
}

function updateUI() {
    let income = 0, expense = 0;
    const list = document.getElementById("transactionList");
    list.innerHTML = "";

    transactions.forEach(t => {
        const li = document.createElement("li");
        li.innerHTML = `${t.desc} <span>₹${t.amount}</span>`;
        list.appendChild(li);

        t.type === "income" ? income += t.amount : expense += t.amount;
    });

    document.getElementById("income").innerText = `₹${income}`;
    document.getElementById("expense").innerText = `₹${expense}`;
    document.getElementById("balance").innerText = `₹${income - expense}`;
}

updateUI();
