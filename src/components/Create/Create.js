import React, { useState } from 'react'
import axios from 'axios';
import './style.css'
// import { useNavigate } from 'react-router';
import { Button, Checkbox, Form } from 'semantic-ui-react'
//xax Mari i het hangsist kisvel aranc hamburvel
const Create = () => {

    // const navigate = useNavigate()
    const [lastName, setLastName] = useState('')
    const [firstName, setfirstName] = useState('')
    const [checkbox, setcheckbox] = useState(false)

//why empty string

    const sentDataToAPi = () => {
        // https://6319f9b86b4c78d91b4954a6.mockapi.io/Users
        // https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData
        axios.post(` https://6319f9b86b4c78d91b4954a6.mockapi.io/LG`, {
            firstName,

        
            lastName, //(property) lastName: string (from server)
            checkbox
 
        })
        // .then(() => {
        //     navigate.push('/read')
        // })

        console.log(lastName);
        console.log(firstName);
        // console.log(checkbox);

        // Then if you check the API, you will get your first name, last name, and the checkbox as true, wrapped in an object.
        //object-um (json-i API)  mech upbdade linum texadrvum user-i greacner-y(value) ery voronc cnoxnern en (property ery) qo dracner-y POST-um   
    }

    return (
        <div className="main" >
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    {/* vereadarcnum ain elementy vory vereadarcnum e kanchox event-y */}
                    <input onChange={(e) => setLastName(e.target.value)} placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input onChange={(e) => setfirstName(e.target.value)} placeholder='Last Name' />
                </Form.Field>
                <Form.Field>
                    <Checkbox onChange={(e) => setcheckbox(!checkbox)} label='I agree to the Terms and Conditions' />
                </Form.Field>
                <Button onClick={sentDataToAPi} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default Create;