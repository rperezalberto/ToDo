import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const todoContext = createContext();


export const TodoContext = ({ children }) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [id, setId] = useState();

    const [todo, setTodo] = useState([]);

    const cleanInput = () => {
        setTitle("");
        setDesc("");
    }
    // Cargar los datos del home
    const loadTodo = async () => {
        const value = await AsyncStorage.getItem('@todo');
        const jsonValue = JSON.parse(value);
        setTodo(jsonValue);
    }

    // Boto de guardar todo
    const saveTodo = async () => {

        const newTodo = {
            id: Math.floor(Math.random() * 1000000),
            title: title,
            desc: desc
        }

        const va = (todo !== null) ? todo : [];

        try {
            const jsonValue = JSON.stringify([newTodo, ...va]);
            await AsyncStorage.setItem('@todo', jsonValue);
            cleanInput();

        } catch (error) {
            console.log(error)
        }
    }

    // Boton para editar todo
    const editTodo = async () => {
        const getValue = todo.filter((value) => value.id !== id);

        const changeTodo = {
            id: id,
            title: title,
            desc: desc,
        }

        const jsonValue = JSON.stringify([changeTodo, ...getValue]);
        await AsyncStorage.setItem('@todo', jsonValue);
        cleanInput();
    }

    // Boton para cargar el todo a eliminar
    const loadChangeDelete = async (item) => {
        const getDataDelete = todo.filter((value) => value.id !== item.id);
        const jsonValue = JSON.stringify(getDataDelete);

        await AsyncStorage.setItem('@todo', jsonValue);
        setTitle(' ');
        cleanInput();
        console.log(getDataDelete)
    }

    const deleteTodo = async (item) => {
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
                    onPress: () => loadChangeDelete(item),
                }
            ]
        );
    }


    return (
        <todoContext.Provider value={{
            loadTodo,
            setTitle,
            setDesc,
            setId,
            title,
            desc,
            todo,
            saveTodo,
            editTodo,
            deleteTodo
        }}>
            {children}
        </todoContext.Provider>
    );
}