import { useContext } from 'react';
import { ExpensesOutput } from '../components';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const howManyDaysAgo = getDateMinusDays(today, 7);

    return (expense.date >= howManyDaysAgo) && (expense.date <= today);
  });

  return <ExpensesOutput expenses={recentExpenses} expensesPeriod={'7'} />;
};
export default RecentExpenses;
