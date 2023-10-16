
import { Alert } from 'react-native'

export const TodoAlertComponenent = (item, todo) => {
    Alert.alert(
        "Deseas eliminar esta nota",
        `${item.title}`,
        [
            {
                text: "Cancelar",
                style: 'cancel'
            },
            {
                text: "Ok",
                onPress: () => console.log(todo),

            }
        ]
    );
}
