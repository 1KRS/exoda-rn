import { StyleSheet, Text, View } from 'react-native';
import Button from '../UI/Button';
import Input from './Input';
import { useState } from 'react';

const ExpenseForm = ({ submitButtonLabel, onCancel, onSubmit, defaultValue }) => {
  const [inputValues, setInputValues] = useState({
    amount: defaultValue ? defaultValue.amount.toString() : '',
    date: defaultValue ? defaultValue.date.toISOString().slice(0,10) : '',
    description: defaultValue ? defaultValue.description : '',
  });

  const inputChangeHandler = (inputIdentifier, enteredValue) => {
    // if (inputIdentifier === 'date') {
    //   console.log('EV', enteredValue);
    //   console.log(typeof enteredValue);
    //   const dateArray = enteredValue.split('/');
    //   const day = dateArray[0];
    //   const month = dateArray[1];
    //   const year = dateArray[2];
    //   const reformedDate = year + '-' + month + '-' + day;
    //   console.log('RD', reformedDate);
    //   console.log(typeof enteredValue);
    //   setInputValues((curInputValues) => {
    //     return {
    //       ...curInputValues,
    //       [inputIdentifier]: reformedDate,
    //     };
    //   });
    // } else {
      setInputValues((curInputValues) => {
        return {
          ...curInputValues,
          [inputIdentifier]: enteredValue,
        };
      });
    // }
  };

  const submitHandler = () => {
    const expenseData = {
      amount: +inputValues.amount.replace(',', '.'), //to '+' μετατρέπει το κείμενο σε αριθμό
      date: new Date(inputValues.date),
      description: inputValues.description,
    };
    onSubmit(expenseData);
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
            // placeholder: 'DD/MM/YYYY',
            placeholder: 'YYYY-MM-DD',
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
        <Button style={styles.button} onPress={submitHandler}>
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
