import React, { useContext } from 'react'
import {ListContext} from "./ListContext.js"
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteSweepRoundedIcon from '@material-ui/icons/DeleteSweepRounded';


const Task = ({task}) => {
    const {removeTasks,findTasks} = useContext(ListContext);
    return (
        <div className="row">
           <div className="col-md-4 col-8 mx-auto">
         
       <div class="card text-white bg-info my-4 card_task">
       
       <div class="card-body">
         <p>
         <li class="list-group-item list-group-item-info text-center list_task">{task.title}</li>
            <button className=" btn btn-outline-danger mt-2 float-left" onClick={()=>{
                removeTasks(task.id)
            }}><DeleteSweepRoundedIcon/></button>
          <button className="btn btn-outline-warning mt-2 float-right" onClick={()=>{findTasks(task.id)}}   >
             <EditRoundedIcon />
              </button>  
         </p>
  
       </div>
     </div>
     </div>
     </div>
      
    )
}

export default Task;
