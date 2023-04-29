import { Pressable, StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../constants/styles';
import { getFormattedDate } from '../util/date';
import { useNavigation } from '@react-navigation/native';

const Colors = GlobalStyles.colors;

const ExpenseItem = ({ description, date, amount }) => {
  const navigation = useNavigation();

  const expensePressHandler = () => {
    navigation.navigate('ManageExpense');
  };

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}€</Text>
        </View>
      </View>
    </Pressable>
  );
};
export default ExpenseItem;

const styles = StyleSheet.create({
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.primary500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    elevation: 3,
    shadowColor: Colors.gray500,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: Colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {
    color: Colors.primary500,
    fontWeight: 'bold',
  },
  pressed: {
    opacity: 0.75,
  },
});
