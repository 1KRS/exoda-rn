import { useContext, useLayoutEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';
import { ExpensesContext } from '../store/expenses-context';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';
import { addExpense, deleteExpense, updateExpense } from '../util/http';
import LoadingOverlay from '../components/UI/LoadingOverlay';

const Colors = GlobalStyles.colors;

const ManageExpense = ({ route, navigation }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const expensesCtx = useContext(ExpensesContext);

  const id = route.params?.expenseId;
  const isEditing = !!id; //Ίδιο με το   id ? true : false,

  const selectedExpense = expensesCtx.expenses.find(
    (expense) => expense.id === id
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = async () => {
    setIsSubmitting(true);
    await deleteExpense(id);
    setIsSubmitting(false);
    expensesCtx.deleteExpense(id);
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = async (expenseData) => {
    setIsSubmitting(true);
    if (isEditing) {
      await updateExpense(id, expenseData);
      setIsSubmitting(false);
      expensesCtx.updateExpense(id, expenseData);
    } else {
      const id = await addExpense(expenseData);
      setIsSubmitting(false);
      expensesCtx.addExpense({ ...expenseData, id: id });
    }
    navigation.goBack();
  };

  if (isSubmitting) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isEditing ? 'Αλλαγή' : 'Προσθήκη'}
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        defaultValue={selectedExpense}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            iconName="trash"
            color={Colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};
export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: Colors.primary200,
    alignItems: 'center',
  },
});
