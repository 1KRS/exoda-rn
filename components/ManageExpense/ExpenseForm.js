import { View } from 'react-native';
import Input from './Input';

const ExpenseForm = () => {
const amountChangeHandler = () => {
  
}


  return (
    <View>
      <Input label="Description" textInputConfig={{
        keyboardType: 'decimal-pad',
        onChangeText: amountChangeHandler,
      }}/>
      <Input label="Amount" textInputConfig={{
        placeholder: 'DD/MM/YYYY',
        maxLength: 10,
        onChangeText: () => {},

      }}/>
      <Input label="Date" textInputConfig={{
        
      }}/>
    </View>
  );
};
export default ExpenseForm;
