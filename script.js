const payAmount = document.querySelector('#payCheck');
const getItem = document.querySelector('#getItem');
const getAmount = document.querySelector('#getAmount');
const addBtn = document.querySelector('#addBtn');
const table = document.querySelector('#table');
const remainingHead = document.querySelector('#remaining');
const totalHead = document.querySelector('#total');

let total = 0;
const allExpense = [];

const expense = function (){
    let expenses = {};
    
    payValue = payAmount.value;
    payCheck = parseInt(payValue);
    let item = getItem.value;
    let amountValue = getAmount.value;
    let amount = parseInt(amountValue);

    total = total + amount;
    
    remaining = payCheck - total;

    expenses.item = item;
    expenses.amount = amount;
    expenses.total = total;
    expenses.remaining = remaining;

    allExpense.push(expenses);

    const listTable = function ({item, amount}){
        return `
        <ul>
            <li>Item @: ${item} </li>
            <li>Spent : ${amount} ₹</li>
        </ul>`
    }

    const AllExpenses = allExpense.map(expenses => listTable(expenses));
    const joinedAllExpenses = AllExpenses.join("");

    table.innerHTML = joinedAllExpenses;
    remainingHead.innerHTML = `Yet to Use : ${remaining} ₹`;
    totalHead.innerHTML = `Total : ${total} ₹`;
}


addBtn.addEventListener('click', expense, false);
