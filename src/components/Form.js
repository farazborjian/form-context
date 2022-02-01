import React from 'react'
import { useValue } from '../context/ValueProvider'

const Form = () => {
    const { val, setVal } = useValue();

    const handleChange = e => {
        setVal({
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setVal(val)
        
    }

    return (
        <form onSubmit={handleSubmit} style={{display: "flex", flexDirection:"column", width:"20%"}}>
            <label>Name</label>
            <input name="name" type="text" value={val.name} onChange={handleChange}/>
            <label>Email</label>
            <input name="email" type="email" value={val.email} onChange={handleChange}/>
            <label>Zip Code</label>
            <input name="zipcode" type="number" value={val.zipcode} onChange={handleChange}/>
            <button type="submit" style={{marginTop:"2rem"}}>Send To Context</button>
            
        </form>
    )
}

export default Form
