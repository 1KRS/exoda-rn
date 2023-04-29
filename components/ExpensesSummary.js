import { StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../constants/styles';

const Colors = GlobalStyles.colors;

const ExpensesSummary = ({ expenses, expensesPeriod }) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>
        {expensesPeriod === 'Σύνολο'
          ? 'Σύνολο'
          : expensesPeriod === 1
          ? 'Προηγούμενη ημέρα'
          : `Τελευταίες ${expensesPeriod} ημέρες`}
      </Text>
      <Text style={styles.sum}>{expensesSum.toFixed(2)}€</Text>
    </View>
  );
};
export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: Colors.primary50,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  period: {
    fontWeight: 'bold',
    color: Colors.primary400,
  },
  sum:{
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary500
  }
});
