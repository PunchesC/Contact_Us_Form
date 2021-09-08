import './Contact.css'
import {useState}from 'react'
import db from './Firebase'
import { addDoc, collection, } from "firebase/firestore"; 


function Contact(){
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")
  

  async function handleSubmit(event: { preventDefault: () => void; }){
    event.preventDefault();  
   const docRef = await addDoc(collection(db,'hr',),{
    firstName: firstName,
      lastName: lastName,
      email: email,
      message: message
   })


  
    .then(()=>{
      alert('Message has been sent!!')
    })
    .catch((error: { message: any; })=>{
      alert(error.message)
    });
    setFirstName('')
    setLastName('')
    setEmail('')
    setMessage('')
  };
  return(
    <div className="Contact">
      <h1>Contact-Us-Form</h1>
     <form className="App_form"  onSubmit={handleSubmit}>
      <div>
      <label> First Name
    <input type="text" value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
      </label>
      </div>
      <div>
      <label> Last Name 
    <input type="text" value={lastName} onChange={(e)=> setLastName(e.target.value)}/>
      </label>
      </div>
      <div>
      <label> Email
    <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
      </label>
      </div>
      <div>
      <label> Messages
      <textarea value={message} onChange={(e)=> setMessage(e.target.value)} placeholder="Please let us know what we can help with!"/>
      </label>
      </div>
    
   

      <button type="submit">Submit</button>
     </form>
    </div>
  );

}

export default Contact;