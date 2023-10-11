import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import Pressable from './Pressable';

function IconButton({ onPress, icon = 'star', color = 'white' }) {
  return (
    <Pressable onPress={onPress} fullWidth={false}>
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({});

export default IconButton;
