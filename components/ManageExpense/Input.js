import { StyleSheet, Text, TextInput, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

const Colors = GlobalStyles.colors;

const Input = ({ label, invalid, textInputConfig, style }) => {
  
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  if (invalid) {
    inputStyles.push(styles.invalidInput)
  }

  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>{label}</Text>
      <TextInput {...textInputConfig} style={inputStyles} />
    </View>
  );
};
export default Input;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    color: Colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: Colors.primary100,
    color: Colors.primary700,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  invalidLabel: {
    color: Colors.error500,
  },
  invalidInput: {
    backgroundColor: Colors.error50,
  },
});
