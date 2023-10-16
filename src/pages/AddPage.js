import { useContext } from 'react';
import { View, TextInput } from 'react-native';
import GloblaStyle from '../themes/GlobalStyles';
import { todoContext } from '../store/TodoContext';

export const AddPage = () => {


    const { title, desc, setTitle, setDesc } = useContext(todoContext);

    return (
        <View style={GloblaStyle.container}>
            <View style={{ marginVertical: 20 }}>
                <TextInput
                    style={GloblaStyle.inputTitle}
                    placeholder='Title'
                    autoCorrect
                    autoFocus
                    value={title}
                    onChangeText={(titl) => setTitle(titl)}
                />

                <TextInput
                    style={GloblaStyle.inputDescription}
                    placeholder='Description'
                    value={desc}
                    multiline
                    onChangeText={(des) => setDesc(des)}
                />
            </View>
        </View>
    )
}
