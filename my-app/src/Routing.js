import React from "react";

import ReactDom from "react-dom";

import { Route,Link, BrowserRouter as Router, Routes} from "react-router-dom";
import AddTask from "./AddTask";
import GetTaskData from "./GetTaskData";
import UpdatePriority from "./UpdatePriority";
import UpdateBookmark from "./UpdateBookmark";
import App from "./App";
import SearchTask from "./SearchTask";
import SearchStatus from "./SearchStatus";
import UpdateNotes from "./UpdateNotes";
import DeleteTask from "./DeleteTask";
import AssignTask from "./AssignTask";
const routing = (

    <Router>
        <center>
        <div style={{"backgroundColor":"pink","color":"black","textAlign":"center"}}>

            <ul>
                <p>HELLO ADMIN! WELCOME TO TASK TRACKING SYSTEM</p>
                
             
                <Link to="/GetTaskData">All Tasks</Link><br/>
                <Link to="/AddTask">Add Task</Link><br/>
                <Link to="/UpdatePriority">Update Priority</Link><br/>
                <Link to="/UpdateBookmark">Update Bookmark</Link><br/>
                <Link to="/SearchTask">Search Task</Link><br/>
                <Link to="/SearchStatus">Search Status</Link><br/>
                <Link to="/UpdateNotes">Update Notes</Link><br/>
                <Link to="/DeleteTask">Delete Task</Link><br/>
                <Link to="/AssignTask">Assign Task</Link><br/>

                

            </ul>
            </div>
              
            <Routes>
                
                <Route path="/GetTaskData" element={<GetTaskData/>}/>
                <Route path="/AddTask" element={<AddTask/>}/>
                <Route path="/UpdatePriority" element={<UpdatePriority/>}/>
                <Route path="/UpdateBookmark" element={<UpdateBookmark/>}/>
                <Route path="/SearchTask" element={<SearchTask/>}/>
                <Route path="/SearchStatus" element={<SearchStatus/>}/>
                <Route path="/UpdateNotes" element={<UpdateNotes/>}/>
                <Route path="/DeleteTask" element={<DeleteTask/>}/>
                <Route path="/AssignTask" element={<AssignTask/>}/>


            </Routes>
            </center>

       

    </Router>

)

export default routing;