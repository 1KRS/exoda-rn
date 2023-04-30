import { StyleSheet, View } from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';
import { GlobalStyles } from '../constants/styles';

const Colors = GlobalStyles.colors;



const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary
        expenses={expenses}
        expensesPeriod={expensesPeriod}
      />
      <ExpensesList expenses={expenses}  />
    </View>
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
  
});
