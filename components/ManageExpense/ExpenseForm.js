import { Alert, StyleSheet, Text, View } from 'react-native';
import Button from '../UI/Button';
import Input from './Input';
import { useState } from 'react';
import { GlobalStyles } from '../../constants/styles';

const Colors = GlobalStyles.colors;

const ExpenseForm = ({
  submitButtonLabel,
  onCancel,
  onSubmit,
  defaultValue,
}) => {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValue ? defaultValue.amount.toString() : '',
      isValid: true,
    },
    date: {
      value: defaultValue ? defaultValue.date.toLocaleDateString().slice(0, 10) : '',
      isValid: true,
    },
    description: {
      value: defaultValue ? defaultValue.description : '',
      isValid: true,
    },
  });

  const inputChangeHandler = (inputIdentifier, enteredValue) => {
    if (inputIdentifier === 'date') {
      const dateArray = enteredValue.split('/');
      const day = dateArray[0];
      const month = dateArray[1];
      const year = dateArray[2];
      const newDate = new Date(year + '-' + month + '-' + day);
      setInputs((curInputs) => {
        return {
          ...curInputs,
          [inputIdentifier]: { value: newDate, isValid: true },
        };
      });
    } else {
      setInputs((curInputs) => {
        return {
          ...curInputs,
          [inputIdentifier]: { value: enteredValue, isValid: true },
        };
      });
    }
  };

  const submitHandler = () => {
    const expenseData = {
      amount: +inputs.amount.value.replace(',', '.'), //to '+' μετατρέπει το κείμενο σε αριθμό
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      // Alert.alert('Invalid input!', 'Please check your information!');
      setInputs((curInputs) => {
        return {
          amount: {
            value: curInputs.amount.value,
            isValid: amountIsValid,
          },
          date: {
            value: curInputs.date.value,
            isValid: dateIsValid,
          },
          description: {
            value: curInputs.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }
    onSubmit(expenseData);
  };

  const formIsInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Expense Details</Text>
      <View style={styles.inputsRow}>
        <Input
          label="Amount"
          invalid={!inputs.amount.isValid}
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: inputChangeHandler.bind(this, 'amount'),
            value: inputs.amount.value,
          }}
          style={styles.input}
        />
        <Input
          label="Date"
          invalid={!inputs.date.isValid}
          textInputConfig={{
            placeholder: 'DD/MM/YYYY',
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, 'date'),
            value: inputs.date.value,
          }}
          style={styles.input}
        />
      </View>
      <Input
        label="Description"
        invalid={!inputs.description.isValid}
        textInputConfig={{
          multiline: true,
          autoCapitalize: 'words',
          onChangeText: inputChangeHandler.bind(this, 'description'),
          value: inputs.description.value,
        }}
      />
      {formIsInvalid && (
        <Text style={styles.errorText}>
          Invalid input! Please check your information!
        </Text>
      )}
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
  errorText: {
    textAlign: 'center',
    color: Colors.error500,
    marginBottom: 8,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
