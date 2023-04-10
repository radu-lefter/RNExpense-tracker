import axios from 'axios';

export function storeExpense(expenseData) {
  axios.post(
    'https://expenses-app-2f853-default-rtdb.europe-west1.firebasedatabase.app/expenses.json',
    expenseData
  );
}