import { Platform } from 'react-native';

const shadow = {
  // Android
  elevation: 4,

  // iOS
  backgroundColor: 'white', // Needed for ios shadow
  shadowColor: 'black',
  shadowOpacity: 0.25,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 8,

  overflow: Platform.select({ ios: 'visible', android: 'hidden' })
};

const Styles = {
  shadow
};

export default Styles;
