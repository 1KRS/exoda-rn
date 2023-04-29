import { Pressable, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const IconButton = ({ iconName, color, size, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <Ionicons name={iconName} color={color} size={size} />
      </View>
    </Pressable>
  );
};
export default IconButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 6,
    marginVertical: 2,
  },
  pressed: {
    opacity: 0.75,
  },
});
