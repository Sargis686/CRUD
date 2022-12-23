import { useEffect } from 'react'
import { useState } from 'react'
import {Button, Form } from 'semantic-ui-react'
import s from './ubdate.module.css'
// import { Link } from 'react-router-dom';
import axios from 'axios'


const Ubdate = () => {



    const [firstName, setfirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [ID,setID]=useState(null)


    const setData = (  ) => {
                //dnum enq property-ery read.js-ic update.js-um  vor  ubdate anenk  aistexic  
                //Ու uxarkenkread -um ենք թարմացվածները դեպի read.js
        
        axios.put(`https://6319f9b86b4c78d91b4954a6.mockapi.io/LG/${ID}`, {
            firstName,
            LastName,
            // ID
        })
        
        //chka navigaite

}

    useEffect(() => {
        //Vercnum enq setData-i mechi localStorage-i tvialnery 
        // getItem():  Returns the current value associated with the given key, or null if the given key does not exist.
        setfirstName(localStorage.getItem('firstName'))//default value
        setLastName(localStorage.getItem('lastName'))
        setID(localStorage.getItem('ID'))
      
      
    },[]) 

    // const setID=(id)=>{
    //     return console.log(id+'barev')

    //     localStorage.setItem('ID'+id)
    // }




return (
    <div className={s.main}>


        <Form>




            <Form.Field>
                <label> FirstName      </label>


                    <input name='fname' value={firstName} onChange={(e) => setfirstName(e.target.value)} placeholder='First Name' />


            </Form.Field>
            <Form.Field>
            <label>  LastName    </label> 

                <input name='Lname' value={LastName} onChange={(e) => setLastName(e.target.value)} placeholder='Last Name' />

            </Form.Field>

         <Button  type='submit'onClick={setData}  ></Button> 



        </Form>




   
    </div>

)
}


export default Ubdate