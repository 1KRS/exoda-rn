import { StyleSheet, Text, View } from 'react-native';
import Button from '../UI/Button';
import Input from './Input';
import { useState } from 'react';

const ExpenseForm = ({ submitButtonLabel, onCancel, onSubmit }) => {
  const [inputValues, setInputValues] = useState({
    amount: '',
    date: '',
    description: '',
  });

  const inputChangeHandler = (inputIdentifier, enteredValue) => {
    setInputValues((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: enteredValue,
      };
    });
  };

  const confirmHandler = (amount, date, description) => {
    if (isEditing) {
      expensesCtx.updateExpense(id, {
        amount: 32.99,
        date: new Date(),
        description: 'Αλλαγή',
      });
    } else {
      expensesCtx.addExpense({
        amount: 19.99,
        date: new Date(),
        description: 'Καινούργιο',
      });
    }
    navigation.goBack();
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Expense Details</Text>
      <View style={styles.inputsRow}>
        <Input
          label="Amount"
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: inputChangeHandler.bind(this, 'amount'),
            value: inputValues.amount,
          }}
          style={styles.input}
        />
        <Input
          label="Date"
          textInputConfig={{
            placeholder: 'DD/MM/YYYY',
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, 'date'),
            value: inputValues.date,
          }}
          style={styles.input}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          autoCapitalize: 'words',
          onChangeText: inputChangeHandler.bind(this, 'description'),
          value: inputValues.description,
        }}
      />
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} >
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
};
export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginVertical: 20,
  },
  inputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
