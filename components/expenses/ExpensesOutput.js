import { View } from 'react-native';
import ExpensesList from './expensesList';
import ExpensesSummary from './expensesSummary';

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View>
      <ExpensesSummary expenses={expenses}  expensesPeriod={expensesPeriod}/>
      <ExpensesList />
    </View>
  );
};
export default ExpensesOutput;
