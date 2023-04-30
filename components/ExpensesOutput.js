import { StyleSheet, Text, View } from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';
import { GlobalStyles } from '../constants/styles';

const Colors = GlobalStyles.colors;

const ExpensesOutput = ({ expenses, expensesPeriod, fallbackText }) => {
  let content = <Text style={styles.text}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }

  return (
    <>
      <View style={styles.container}>
        <ExpensesSummary expenses={expenses} expensesPeriod={expensesPeriod} />
        {content}
      </View>
    </>
  );
};
export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 24,
    backgroundColor: Colors.primary700,
  },
  text: {
    marginTop: 15,
    color: Colors.accent500,
    textAlign: 'center',
    fontWeight: 'bold'
  },
});
