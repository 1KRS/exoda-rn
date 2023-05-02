import { StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

const Colors = GlobalStyles.colors;

const ErrorOverlay = ({message}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An error occurred!</Text>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};
export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 24,
    backgroundColor: Colors.primary700,
  },
  text: {
    textAlign: 'center',
    marginBottom: 24,
    color: 'white'
  },
  title: {
    fontSize: 20, 
  fontWeight: 'bold'
},
});
