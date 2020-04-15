//https://www.youtube.com/watch?v=4YHF39RPPKM

//refactor practice by adding favorite anime drop down, and anime you like the most checkbox options. Also eventually refactor for dryer code. 

import React from "react";
import "./Form.css";
import { useState } from "react";
import * as yup from "yup";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <form
        className="center"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label style={{ fontSize: "1.7rem" }} htmlFor="name box">
          Name:
        </label>
        <input
          type="text"
          placeholder="Full Name Here"
          name="name"
          id="name box"
          onChange={(event) => {
            setName(event.target.value);
          }}
          value={name}
        />

        <label style={{ fontSize: "1.7rem"}} htmlFor="email box">Email:</label>
        <input type="email" placeholder="Email" name="email" id="email box" onChange={(event) => setEmail(event.target.value)}  
        value={email} />  
        
        <label style={{ fontSize: "1.7rem" }} htmlFor="password box">
          Password:
        </label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          id="password box"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          value={password}
        />
        <button type="submit"> Submit </button>
      </form>
    </>
  );
}

export default Form;

//create the form, then set the state to an empty string.
//we then need to listen for changes as the user types with an onChange event that we can add to the input.

//the event.target is the actual input element itself. The 'target' that the event is on, which of course we can directly see is the input. From this, if we use event.target.value, that value will be the value of what we type into the target. So if we type 'ww' into the form, the form 'event.target.value' will indeed also be 'ww'.

//instead of console.logging it, we can instead call 'setName' in order to insert that value directly into our state. So our input will look like this <input className="border" type="text" name="name" id="name form" onChange={(event) => {
// setName(event.target.value)
//   }} />

//However, up until this point, our input is not a controlled one. We need somewhere to display this state. Our value is stored in this state but not displayed. Our value being stored in the state 'name' from const [name, setName] = useState('') since remember, we are literally setting the name with setName to the event.target.value, which is again, whatever we type inside the form at this point. So in order to store this value and control this value dynamically with whatever we insert into the form text box, we will use the 'value' attribute inside of our input. For the value, we will use 'name' from 'const [name, setName] = useState('')'.

//The flow: Every time a user types in a letter, it triggers the onChange event, we capture the event inside the function parameters because the event function gives us the event argument to use, then we access the event's target which is the input element itself, then we attach the value, which will be the value of whatever anyone types inside the text box, and attach all of that and call it with setState as setName(event.target.value). Now because our setName function will make event.target.value whatever value the user types in, we can now set the value attribute within input as "value={name}". Remember that setName(event.target.value) will become our name state, and therefore our value={name} will change dynamically with it.

//so in order to submit this form we are going to use onSubmit and also prevent the default of onSubmit. Remember, 'onSubmit' it on the entire form. So whenever something on this form is submitted, the default will be prevented because we have used preventDefault.
