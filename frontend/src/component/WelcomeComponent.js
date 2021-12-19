import  React from "react";
import {Link} from "react-router-dom";
import {Button} from 'reactstrap';

export default function WelcomeComponent(){
    return(
        <div className="App" >
            <h1>Welcome to Ebook Shop</h1><br/>
            <p><h2>This is for admin</h2> </p>
            <Button outline color="secondary"><Link to ="/adminLogin" >Login As Admin</Link></Button>{' '}
            <Button outline color="secondary"><Link to ="/login" >Login As User</Link></Button>

        </div>
    )
}