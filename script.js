const addBtn = document.getElementById("addBtn");
const expenseList = document.getElementById("expenseList");
const total = document.getElementById("total");

let totalExpense = 0;

const categoryData = {
    Food: 0,
    Travel: 0,
    Shopping: 0,
    Entertainment: 0,
    Utilities: 0
};

const expenseChart = new Chart(
    document.getElementById("expenseChart"),
    {
        type: "pie",
        data: {
            labels: [
                "Food",
                "Travel",
                "Shopping",
                "Entertainment",
                "Utilities"
            ],
            datasets: [{
                data: [0, 0, 0, 0, 0],
                backgroundColor: [
                    "#36A2EB",
                    "#4BC0C0",
                    "#FF9F40",
                    "#FF6384",
                    "#9966FF"
                ]
            }]
        }
    }
);

addBtn.addEventListener("click", () => {

    const title = document.getElementById("title").value;
    const amount = Number(document.getElementById("amount").value);
    const category = document.getElementById("category").value;

    if (title === "" || amount <= 0) {
        alert("Enter valid details");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML =
        `💸 ${title} - ₹${amount} (${category})`;

    expenseList.appendChild(li);

    totalExpense += amount;

    total.textContent = totalExpense;

    categoryData[category] += amount;

    expenseChart.data.datasets[0].data = [
        categoryData.Food,
        categoryData.Travel,
        categoryData.Shopping,
        categoryData.Entertainment,
        categoryData.Utilities
    ];

    expenseChart.update();

    document.getElementById("title").value = "";
    document.getElementById("amount").value = "";
});
