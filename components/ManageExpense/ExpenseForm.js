import { StyleSheet, Text, View } from 'react-native';
import Input from './Input';

const ExpenseForm = () => {
  const amountChangeHandler = () => {};

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Expense Details</Text>
      <View style={styles.inputsRow}>
        <Input
          label="Amount"
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: amountChangeHandler,
          }}
          style={styles.input}
        />
        <Input
          label="Date"
          textInputConfig={{
            placeholder: 'DD/MM/YYYY',
            maxLength: 10,
            onChangeText: () => {},
          }}
          style={styles.input}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          autoCapitalize: 'words',
        }}
      />
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
});
