import React from 'react';
import Task from './Tasks/Task'
import Home from './Home/Home';
import {Routes,Route} from 'react-router-dom'
const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/task' element={<Task/>}/>
            </Routes>
        </div>
    );
};

export default App;