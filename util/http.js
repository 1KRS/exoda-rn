import axios from 'axios';

const BACKEND_ROOT_URL =
  'https://exoda-rn-course-default-rtdb.europe-west1.firebasedatabase.app';

export const addExpense = (expenseData) => {
  axios.post(`${BACKEND_ROOT_URL}/expenses.json`, expenseData);
};

export const fetchExpenses = async () => {
  const response = await axios.get(`${BACKEND_ROOT_URL}/expenses.json`);

  const expenses = [];

  for (const key in response.data) {
    const expense = response.data[key];
    const expenseObj = {
      id: key,
      amount: expense.amount,
      date: new Date(expense.date).toLocale(),
      description: expense.description,
    };
    expenses.push(expenseObj);
  }
  return expenses;
};
