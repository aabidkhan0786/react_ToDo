import React,{useContext} from 'react'
import {ListContext} from "./ListContext"
import Task from "./Task.js"

const TaskList = () => {
    const {tasks} = useContext(ListContext)
    return (
        <>
        <ul class="list-group list-group-flush">
      
                {tasks.map((task)=>{
                    
                        return <Task task={task}/>
                    }
                )}
            
            </ul>
       
        
        </>
    )
}

export default TaskList;
