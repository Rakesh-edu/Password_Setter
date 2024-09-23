import { useState } from 'react';
import './App.css'

function App() {
  const [password,setPassword]=useState(false);
  const getPassword=()=>{
    setPassword(!password);
  }
  return (
   <>
    <div className="body">
    <div className="input-div">
      <input type={password?"text":"password"} className='input-box' />
      <button onClick={getPassword}>{(password===true)?"HIDE":"SHOW"}</button>
      </div>
    </div>
   </>
  );
}

export default App;
