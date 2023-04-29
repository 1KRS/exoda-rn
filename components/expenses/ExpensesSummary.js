import { Text, View } from 'react-native';

const ExpensesSummary = ({ expenses, expensesPeriod }) => {

const expensesSum = expenses.reduce((sum, expense)=> {
  return sum + expense.amount
}, 0)

  return (
    <View>
      <Text>
        {expensesPeriod === 1
          ? 'Προηγούμενη ημέρα'
          : `Τελευταίες ${expensesPeriod} ημέρες`}
      </Text>
      <Text>{expensesSum.toFixed(2)}€</Text>
    </View>
  );
};
export default ExpensesSummary;
