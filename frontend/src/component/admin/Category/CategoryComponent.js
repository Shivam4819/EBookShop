import  React ,{useEffect,useState}from "react";
import axios from "axios";
import 'antd/dist/antd.css'
import Grid from "@material-ui/core/Grid";
import CardComponent from "./CategeoryCardComponent";
import { Container } from "@material-ui/core";

export default function CategoryComponent(){

    const [arr,setArr]= useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/category")
            .then(response=> {console.log(response)
                setArr(response.data)
            })
    },[])
  

    return(
        <Container>
            <Grid container spacing={3}>
                {arr.map(value=>(
                    <Grid item key={value.id} xs={12} md={6} lg={4}>
                        <CardComponent value={value}/>

                    </Grid>
                ))}
            </Grid>
        </Container>
    )    
}

