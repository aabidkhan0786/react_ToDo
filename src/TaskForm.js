import React,{useContext,useState, useEffect} from 'react'
import {ListContext} from './ListContext.js'
import "../src/App.css"



const TaskForm = () => {
    const {addTasks,editItem,editTasks} = useContext(ListContext);
    const [title,setTitle] = useState("");

    const handleChange=(event)=>{
        event.preventDefault();
        if(editItem === null){
            addTasks(title);
            setTitle("");
        }else{
            editTasks(title,editItem.id);
        }
    }

    const ChangeData = (event) =>{
        setTitle(event.target.value);
        console.log(title);
    }

    useEffect(()=>{
        if(editItem !== null){
            setTitle(editItem.title);
        }else{
            setTitle("");
        }
    },[editItem]);
    return (
        <>
        <div className="row  my-5">
            <div className="col-md-6 col-10 mx-auto">
                <h1 className="text-center mb-3 task_form"><u>My Tasks:</u></h1>
            <form onSubmit={handleChange} >
               
                <div class="input-group mb-3">
                    <input type="text" className="form-control task_form"  value={title}
                    onChange={ChangeData}
                    required
                    placeholder="Add Task..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <div class="input-group-append">
                    <button className="btn btn-outline-info">
                    {editItem ? "Edit Task" : "Add Task"}
                    </button>
                    </div>
                    </div>
               

        </form>
        </div>
        </div>
       
    </>    
    )
}

export default TaskForm
