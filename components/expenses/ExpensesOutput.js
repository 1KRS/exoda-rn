import { View } from 'react-native';
import ExpensesList from './expensesList';
import ExpensesSummary from './expensesSummary';

const ExpensesOutput = ({ expenses }) => {
  return (
    <View>
      <ExpensesSummary />
      <ExpensesList />
    </View>
  );
};
export default ExpensesOutput;
