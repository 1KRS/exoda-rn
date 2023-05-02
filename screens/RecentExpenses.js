import { useContext, useEffect, useState } from 'react';
import { ExpensesOutput } from '../components';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';
import { fetchExpenses } from '../util/http';
import LoadingOverlay from '../components/UI/LoadingOverlay';

const RecentExpenses = () => {
  const [isLoading, setIsLoading] = useState(true)
  const expensesCtx = useContext(ExpensesContext);
  
  useEffect(() => {
    setIsLoading(true)
    const getExpenses = async () => {
      const expenses = await fetchExpenses();
      setIsLoading(false)
      expensesCtx.setExpenses(expenses)
    };

    getExpenses()
  }, []);

  if (isLoading) {
    return <LoadingOverlay />;
  }

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const howManyDaysAgo = getDateMinusDays(today, 7);

    return expense.date >= howManyDaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="7"
      fallbackText="No expenses registered for the last 7 days."
    />
  );
};
export default RecentExpenses;
