import React, { useState } from 'react'
import { useValue } from '../context/ValueProvider'

const initialState = {
    name:"",
    email:"",
    zipCode:""
}

const Form = () => {
    const [formObject, setFormObject] = useState(initialState)
    const { val, setVal } = useValue();
    console.log(formObject)
    const handleChange = e => {
        setFormObject({
            ...formObject,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setVal(formObject)
        
    }
    console.log("val:",val)
    return (
        <form onSubmit={handleSubmit} style={{display: "flex", flexDirection:"column", width:"20%"}}>
            <label>Name</label>
            <input name="name" type="text" value={formObject.name} onChange={handleChange}/>
            <label>Email</label>
            <input name="email" type="email" value={formObject.email} onChange={handleChange}/>
            <label>Zip Code</label>
            <input name="zipCode" type="text" value={formObject.zipCode} onChange={handleChange}/>
            <button type="submit" style={{marginTop:"2rem"}}>Send To Context</button>
            
        </form>
    )
}

export default Form
