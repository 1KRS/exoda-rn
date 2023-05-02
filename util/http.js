import axios from "axios"


export const storeExpense = (expenseData) => {
  axios.post('https://exoda-rn-course-default-rtdb.europe-west1.firebasedatabase.app/expenses.json',
  expenseData)
}
