import { useContext, useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { ImgHome } from '../assets/svg/img';
import { useNavigation } from '@react-navigation/native';
import GloblaStyle from '../themes/GlobalStyles';
import { todoContext } from '../store/TodoContext';

export const HomePage = () => {

    const navigation = useNavigation();
    const { width } = Dimensions.get('screen');

    const widthTotal = (width / 2) - 15;

    const { todo, loadTodo, deleteTodo, title, desc } = useContext(todoContext);


    const morize = useMemo(() => loadTodo(), [title, desc]);


    renderITem = (item) => {
        return (
            <TouchableWithoutFeedback onPress={() => navigation.navigate('edit', item)} onLongPress={() => deleteTodo(item)}>
                <View style={[GloblaStyle.card, { width: widthTotal }]}>
                    <Text style={GloblaStyle.cardTitle} numberOfLines={1}>{item.title}</Text>
                    <Text style={[GloblaStyle.cardDescription, { paddingTop: 10 }]} numberOfLines={7}>{item.desc}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }


    return (
        <View style={styles.container}>

            {
                (todo.length === 0) ?

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ImgHome />
                    </View>
                    :

                    <FlatList
                        data={todo}
                        renderItem={({ item }) => renderITem(item)}
                        numColumns={2}
                    />
            }

            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('add')}>
                <MaterialIcons name="add" size={24} color="#fff" />
            </TouchableOpacity>
        </View >
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 20,
        marginHorizontal: 10,
    },
    btn: {
        position: 'absolute',
        bottom: '4%',
        right: 0,
        backgroundColor: '#00B2FF',
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 200
    }
});

