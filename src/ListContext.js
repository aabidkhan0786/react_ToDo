import React, { createContext,useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


const ListContext = createContext();

const ListContextProvider=(props)=>{
    const [tasks, setTasks] = useState(
        [
            // {title:"write code", id:1},
            // {title:"write maths", id:2},
            // {title:" gym", id:3},
            
    ]
    )
    const [editItem,setEditItem] = useState(null);

    const addTasks =(title)=>{
        console.log(uuidv4());
        return setTasks([...tasks,{title,id:uuidv4()}])
        
    }

    const removeTasks = id =>{
        setTasks(tasks.filter(task => task.id !== id));
    }

    const findTasks = id =>{
        const items = tasks.find(task => task.id === id);
        setEditItem(items);
    }

    const editTasks = (title,id) =>{
        const newTasks = tasks.map(task =>
            (task.id === id ? {title,id} : task)
        )
        setTasks(newTasks);
        setEditItem(null);
    }
       return(
        <ListContext.Provider value={{tasks,addTasks,removeTasks,findTasks,editItem,editTasks}}>
            {props.children}
        </ListContext.Provider>
    )
}

export default ListContextProvider;
export {ListContext};