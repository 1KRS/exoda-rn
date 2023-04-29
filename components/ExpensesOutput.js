import { StyleSheet, View } from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';
import { GlobalStyles } from '../constants/styles';

const Colors = GlobalStyles.colors;

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'Υποδήματα',
    amount: 85.99,
    date: new Date('2023-01-12'),
  },
  {
    id: 'e2',
    description: 'Μάθημα Σουηδικών',
    amount: 20,
    date: new Date('2023-01-14'),
  },
  {
    id: 'e3',
    description: 'Ωρολόι',
    amount: 1078.97,
    date: new Date('2023-06-10'),
  },
  {
    id: 'e4',
    description: 'Ταξίδι',
    amount: 454,
    date: new Date('2023-07-14'),
  },
  {
    id: 'e5',
    description: 'Ταβέρνα',
    amount: 120,
    date: new Date('2023-07-20'),
  },
  {
    id: 'e6',
    description: 'Βιβλίο',
    amount: 17.99,
    date: new Date('2023-07-21'),
  },
  {
    id: 'e7',
    description: 'Ταβέρνα',
    amount: 120,
    date: new Date('2023-07-22'),
  },
  {
    id: 'e8',
    description: 'Βιβλίο',
    amount: 17.99,
    date: new Date('2023-07-23'),
  },
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary
        expenses={DUMMY_EXPENSES}
        expensesPeriod={expensesPeriod}
      />
      <ExpensesList expenses={DUMMY_EXPENSES}  />
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
