// import React ,{useState}from 'react'
// import axios from "axios";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import {ButtonToggle, Container, Form, FormGroup} from 'reactstrap';

// export default function AdminLoginComponent(props){
//     const [username,setUser]=useState("");
//     const [password,setPass]=useState("");
//     console.log(props.history)
//     function display(){

//         console.log(username);
//         console.log(password);
//     }
//     function checkCrendential() {
//         if(username==="shivam" && password==="vostro"){
//             props.history.push("/admintask")
//             // toast.success("login done")
//         }
//         else{
//             toast.error("wrong Credential")
//         }

//     }
//     return(
//         <Container className="forms">
//             <Form >
//                 <h1>Login for Admin</h1>
//                 <FormGroup>
//                     Username:<input type="text" name="username" placeholder="username" onChange={(event => setUser(event.target.value))}/><br/>
//                 </FormGroup>
//                 <FormGroup>
//                     Password:<input type="text" name="password" placeholder="password" onChange={(event => setPass(event.target.value))}/><br/>
//                 </FormGroup>
//                 <FormGroup>
//                     <ButtonToggle color="primary" size="md" onClick={display}>Display </ButtonToggle>{'   '}
//                     <ButtonToggle color="primary" size="md" onClick={checkCrendential}>Login </ButtonToggle>{' '}
//                     {/*<ButtonToggle color="primary" size="md" onClick={notify}>Toast </ButtonToggle>{' '}*/}
//                     <ToastContainer
//                         position="bottom-right"
//                         autoClose={2000}
//                     />
//                 </FormGroup>

//             </Form>
//         </Container>

//     )
// }

