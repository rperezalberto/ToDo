import { NavigationContainer } from '@react-navigation/native'
import GlobalStack from './GlobalStack'


const RootNavigation = () => {
    return (
        <NavigationContainer>
            <GlobalStack />
        </NavigationContainer>
    )
}

export default RootNavigation;