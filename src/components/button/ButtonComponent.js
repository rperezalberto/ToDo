import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export const ButtonComponent = ({ name, size = 24, color = '#000', onPress }) => {
    return (
        <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={() => onPress()}>
            <Feather name={name} size={size} color={color} />
        </TouchableOpacity>
    )
}
