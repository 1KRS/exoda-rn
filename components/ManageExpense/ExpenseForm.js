import { View } from 'react-native';
import Input from './Input';

const ExpenseForm = () => {
  const amountChangeHandler = () => {};

  return (
    <View>
      <Input
        label="Date"
        textInputConfig={{
          placeholder: 'DD/MM/YYYY',
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: 'decimal-pad',
          onChangeText: amountChangeHandler,
        }}
      />
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
