import React ,{useState}from 'react'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import {ButtonToggle, Container, Form, FormGroup} from 'reactstrap';
import {  Form,  Input, Button,  TreeSelect,DatePicker} from 'antd'

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
        <Form labelCol={{
                span: 4,
            }}
            wrapperCol={{
                span: 14,
            }}
            layout="horizontal"
        >
                <Form.Item label="category" > <Input onChange={(event => setName(event.target.value))}/> </Form.Item>

            <Button color="primary" size="md" onClick={requestToServer}>Save </Button>{' '}
            <ToastContainer
                    position="bottom-right"
                    autoClose={2000}
            />
        </Form>
           
    )
}

