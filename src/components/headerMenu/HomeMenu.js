import { View } from 'react-native';
import GloblaStyle from '../../themes/GlobalStyles';
import { ButtonComponent } from '../button/ButtonComponent';

export const homeMenu = () => {
    return (
        <View style={GloblaStyle.headerMenu}>
            <ButtonComponent name={"search"} />
            <ButtonComponent name={"more-vertical"} />
        </View>
    )
}
