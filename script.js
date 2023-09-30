const addBtn = document.querySelector("#btn");
const getItem = document.querySelector("#getItem");
const getAmount = document.querySelector("#getAmount");
const payAmount = document.querySelector("#payAmount");
const payBtn = document.querySelector("#payBtn");
const use = document.querySelector("#use");
const type = document.querySelector("#pay");
const table = document.querySelector("#tableList");


payBtn.addEventListener("click", function(){
    payValue = payAmount.value;
    pay = parseInt(payValue);
});

let budget = 0;
const AllBudget = [];

addBtn.addEventListener("click", function (){
    const totalBudget = {}

    item = getItem.value;
    amountValue = getAmount.value;
    amount = parseInt(amountValue);
    budget = budget + amount;
    remains = (pay - budget);

    totalBudget.item = item;
    totalBudget.amount = amount;
    totalBudget.remains = remains;

    AllBudget.push(totalBudget);

    const allbudgethtml = AllBudget.map(totalBudget=>{
        return `
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                    Item 
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${totalBudget.item}</li>
                    <li class="list-group-item">${totalBudget.amount}</li>
                </ul>
                <div class="card-header">
                    Yet to use
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${totalBudget.remains}</li>
                    <i id="delItem" class="material-symbols-outlined">delete</i>
                </ul>
                 
            </div>  
        `
    });

    const joinedallbudgethtml = allbudgethtml.join("");
    table.innerHTML = joinedallbudgethtml;

    const delitem = document.querySelectorAll("#delItem");
    delitem.addEventListener("click", trash=()=>{
        console.log("item deleted")
    });

});

