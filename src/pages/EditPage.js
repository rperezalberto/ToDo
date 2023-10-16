import { useContext, useEffect } from 'react';
import { View, TextInput } from 'react-native';
import GloblaStyle from '../themes/GlobalStyles';
import { todoContext } from '../store/TodoContext';

export const EditPage = ({ route }) => {

    const { title, desc, setTitle, setDesc, setId } = useContext(todoContext);
    const item = route.params;

    useEffect(() => {
        setTitle(item.title);
        setDesc(item.desc);
        setId(item.id);
    }, [])


    return (
        <View style={GloblaStyle.container}>
            <View style={{ marginVertical: 20 }}>
                <TextInput
                    style={GloblaStyle.inputTitle}
                    placeholder='Title'
                    autoCorrect
                    autoFocus
                    value={title}
                    onChangeText={(titl) => { setTitle(titl) }}
                />

                <TextInput
                    style={GloblaStyle.inputDescription}
                    placeholder='Description'
                    multiline
                    value={desc}
                    onChangeText={(des) => { setDesc(des) }}
                />
            </View>
        </View>
    )
}
