import React ,{useState}from 'react'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ButtonToggle, Container, Form, FormGroup} from 'reactstrap';

export default function NewCategory(){
    
    const [name,setName]=useState("");
    
    function requestToServer() {
        axios.post("http://localhost:3000/api/v1/category",{
            name: name,
          
        }).then((response)=>{
            console.log(response.status)

            if(response.status===200){
                toast.success("category stored in db");
            }
            else {
                toast.error("some error");
            }
        })

    }

    return(
        <Container className="forms">
            <Form >
                <h1>Add new category to db</h1>
                <FormGroup>
                    Category:<input type="text" name="name" placeholder="category" onChange={(event => setName(event.target.value))}/><br/>
                </FormGroup>
                <FormGroup>
                    <ButtonToggle color="primary" size="md" onClick={requestToServer}>Login </ButtonToggle>{' '}
                    <ToastContainer
                        position="bottom-right"
                        autoClose={2000}
                    />
                </FormGroup>

            </Form>
        </Container>

    )
}

