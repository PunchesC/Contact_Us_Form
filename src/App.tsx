import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
     <h1>Contact-Us-Form</h1>
     <form className="App_form">
      <label> First Name
    <input type="text"/>
      </label>
      <label> Last Name 
    <input type="text"/>
      </label>
      <label> Password
    <input type="password"/>
      </label>
      <label> Message
    <textarea/>
      </label>
      <button type="submit">Submit</button>
     </form>
    </div>
  );
}

export default App;
