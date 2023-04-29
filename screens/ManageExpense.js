import { useLayoutEffect } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const ManageExpense = ({ route, navigation }) => {
  const id = route.params?.expenseId;
  const isEditing = !!id;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  return (
    <Pressable>
      <View>
        <Text>Manage Expense</Text>
      </View>
    </Pressable>
  );
};
export default ManageExpense;

const styles = StyleSheet.create({
  container: {},
});
