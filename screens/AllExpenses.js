import { useContext, useEffect, useState } from 'react';
import { ExpensesOutput } from '../components';
import { ExpensesContext } from '../store/expenses-context';
import ErrorOverlay from '../components/UI/ErrorOverlay';
import LoadingOverlay from '../components/UI/LoadingOverlay';

const AllExpenses = () => {
  
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();
  
  useEffect(() => {
    const getExpenses = async () => {
      setIsFetching(true);
      try {
        const expensesCtx = useContext(ExpensesContext);
        expensesCtx ? true : false;
      } catch (error) {
        setError('Could not fetch expenses!');
      }
      setIsFetching(false);
    };

    getExpenses();
  }, []);

  if (error && !isFetching) {
    return <ErrorOverlay message={error} />;
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }
  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod="Σύνολο"
      fallbackText="No expenses found"
    />
  );
};
export default AllExpenses;
