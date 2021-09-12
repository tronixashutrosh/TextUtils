import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const showAlert= (message,type)=>{
       setAlert({
         msg: message,
         type: type
       })
       setTimeout(()=>{
          setAlert(null);
       },1500);
  }

  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor= 'black';
      showAlert("Dark mode enabled",'success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("Dark mode disabled",'success');
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
       <Switch>
           <Route exact path="/about">
             <About mode={mode}/>
           </Route>
           <Route exact path="/">
            <TextForm heading="Enter your text here" mode={mode} showAlert={showAlert}/>
           </Route>
        </Switch>
     </div>
    </Router>
    
     </>
  );
}

export default App;
