import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import RootNavigation from './src/navigation/RootNavigation';
import { TodoContext } from './src/store/TodoContext';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <TodoContext>
        <RootNavigation />
      </TodoContext>
    </View>
  )
}

export default App;