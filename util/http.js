import axios from 'axios';

const BACKEND_ROOT_URL =
  'https://exoda-rn-course-default-rtdb.europe-west1.firebasedatabase.app';

export const addExpense = async (expenseData) => {
  const response = await axios.post(
    `${BACKEND_ROOT_URL}/expenses.json`,
    expenseData
  );
  const id = response.data.name;
  return id;
};

export const fetchExpenses = async () => {
  const response = await axios.get(`${BACKEND_ROOT_URL}/expenses.json`);

  const expenses = [];

  for (const key in response.data) {
    const expense = response.data[key];
    const expenseObj = {
      id: key,
      amount: expense.amount,
      date: new Date(expense.date),
      description: expense.description,
    };
    expenses.push(expenseObj);
  }
  return expenses;
};
