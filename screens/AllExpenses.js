import { useContext } from 'react';
import { ExpensesOutput } from '../components';
import { ExpensesContext } from '../store/expenses-context';

const AllExpenses = () => {
  const expensesCtx = useContext(ExpensesContext)
  return <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod={'Σύνολο'} />;
};
export default AllExpenses;
