
import { StyleSheet } from 'react-native';



const color = {
    black: '#000',
    white: '#FFF'
}

const GloblaStyle = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    headerMenu: {
        flexDirection: 'row',
        marginRight: 5
    },
    card: {
        minHeight: 155,
        marginVertical: 5,
        backgroundColor: '#fff',
        borderRadius: 15,
        marginRight: 10,
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    cardTitle: {
        color: color.black,
        fontSize: 16,
        fontWeight: '500'
    },
    cardDescription: {
        color: color.black,
        fontSize: 12,
        fontWeight: '400',
    },
    inputTitle: {
        fontSize: 20,
        fontWeight: '700',
        paddingVertical: 10,
        // textTransform: 'capitalize'
    },
    inputDescription: {
        fontSize: 16,
        fontWeight: '500'
    }
});

export default GloblaStyle;