import React from 'react';
import { useState } from 'react';

import { Table } from 'semantic-ui-react'
import axios from "axios";
import { Button, } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';






export default function Read() {


    const [APIData, setAPIData] = useState([]);



    useEffect(() => {
        axios.get('https://6319f9b86b4c78d91b4954a6.mockapi.io/LG')
            //unenq function getData vory veradarcnuma setAPIData function iran tvac mer argumenti michocov stanum enq server-ic data
            .then((getData => {
                setAPIData(getData.data)
            }))
    })
//ubdate exac value ery dnum es aistex setItem- michocov


    const setData = (id2, firstName, lastName) => {
        localStorage.setItem('ID', id2)
        localStorage.setItem('firstNamew', firstName)
        localStorage.setItem('lastName', lastName)
    }



    const getData = () => {
        axios.get('https://6319f9b86b4c78d91b4954a6.mockapi.io/LG').then((getData) => {

            setAPIData(getData.data)
        });
    }



    const deletes = (id) => {
        axios.delete(`https://6319f9b86b4c78d91b4954a6.mockapi.io/LG/${id}`)
        //id-i shnorhiva vor du voroshum es vor object-y jnjes 
            .then(() => {
                //ev veradarcnum enq nor state -y dnelov   firstName,ev ail objecter-y Api mechi u jnjum enq id-i shnoriv
                getData()
            })
    }





    return (
   

        <div>


            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checkbox Value</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {APIData.map((data) => {
                        //map- shnor-iv kpnuma bolor firstName-erin ev lastName-erin
                        return (
                            <Table.Row>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.LastName}</Table.Cell>
                                <Table.Cell>{data.id}</Table.Cell>
                                <Table.Cell> {data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>


                                <Link to='/Ubdate'> 
                                    <Table.Cell>

   {/* uxarkum es tvialnery  API-ic depi update vor tarmacnes    data.LastName  dnes nuin-y update-um   */}
   
                                        <Button color='green' onClick={() => setData(data.id, data.firstName,   data.LastName   )}>Update</Button>

                                
                                    </Table.Cell>
                                </Link>,


                                <Table.Cell>
                                    <Button color="red" onClick={() => deletes(data.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}


                </Table.Body>
            </Table>
        </div>










    )
}


