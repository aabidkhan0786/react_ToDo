import React from 'react'
import TaskList from './TaskList'
import ListContextProvider from './ListContext'
import TaskForm from './TaskForm'
import "../src/App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Header from "./Header.js"

const App = () => {
    return (
        <ListContextProvider>
            <Header/>
            <TaskForm/>
            <TaskList/>
            
        </ListContextProvider>
    )
}

export default App;
