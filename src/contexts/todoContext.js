import { createContext, useState } from "react";


export const todoContext = createContext();

const TodoContext = ({ children }) => {

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [data, setData] = useState([]);

    return (
        <todoContext.Provider value={{
            title,
            setTitle,
            description,
            setDescription,
            data,
            setData
        }}>
            {children}
        </todoContext.Provider>
    )
}

export default TodoContext;