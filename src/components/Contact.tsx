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
      <label> First Name
    <input type="text" value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
      </label>
      <label> Last Name 
    <input type="text" value={lastName} onChange={(e)=> setLastName(e.target.value)}/>
      </label>
      <label> Email
    <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
      </label>
     
      <label> Messages
      <textarea value={message} onChange={(e)=> setMessage(e.target.value)}/>
      </label>

      <label>Here be input
        <input type="file" />
      </label>

      <button type="submit">Submit</button>
     </form>
    </div>
  );

}

export default Contact;