import { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomePage } from "../pages/HomePage";
import { AddPage } from "../pages/AddPage";
import { ButtonComponent } from "../components/button/ButtonComponent";
import { todoContext } from "../store/TodoContext";
import { useNavigation } from "@react-navigation/native";
import { EditPage } from "../pages/EditPage";


const Stack = createStackNavigator();

const GlobalStack = () => {

    const navigation = useNavigation();
    const { saveTodo, editTodo } = useContext(todoContext)

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="home"
                component={HomePage}
                options={{
                    title: "Notas",
                    // headerRight: () => homeMenu()
                }}
            />

            <Stack.Screen
                name="add"
                component={AddPage}
                options={{
                    title: 'Agregar',
                    headerRight: () => <ButtonComponent name="check" size={30} onPress={() => {
                        saveTodo();
                        navigation.goBack();
                    }} />
                }}
            />

            <Stack.Screen
                name="edit"
                component={EditPage}
                options={{
                    title: 'Editar',
                    headerRight: () => <ButtonComponent name="save" onPress={() => {
                        editTodo();
                        navigation.goBack();
                    }} />
                }}
            />
        </Stack.Navigator>
    )
}

export default GlobalStack;