import { Pressable as NativePressable, StyleSheet } from 'react-native';

function Pressable({ children, onPress, fullWidth = true }) {
  return (
    <NativePressable
      android_ripple={{ color: '#ccc' }}
      style={({ pressed }) => [
        fullWidth && styles.pressable,
        pressed ? styles.pressed : null
      ]}
      onPress={onPress}
    >
      {children}
    </NativePressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    flex: 1
  },
  pressed: {
    opacity: 0.5
  }
});

export default Pressable;
