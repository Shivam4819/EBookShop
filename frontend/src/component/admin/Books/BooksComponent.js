import  React ,{useEffect,useState}from "react";
import axios from "axios";
import 'antd/dist/antd.css'
import Grid from "@material-ui/core/Grid";
import CardComponent from "./BookCardComponent";
import { Container } from "@material-ui/core";



export default function BooksComponent(){

    const [arr,setArr]= useState([])
  
    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/book")
            .then(response=> {console.log(response)
                setArr(response.data)
            })
    },[])
  

    const handleDelete = async (id) => {
        await axios.delete('http://localhost:3000/api/v1/book/' + id)

        const newBook = arr.filter(arrs => arrs.id != id)
        setArr(newBook)
    }

    return(
        <Container>
            <Grid container spacing={3}>
                {arr.map(value=>(
                    <Grid item key={value.id} xs={12} md={6} lg={4}>
                        <CardComponent value={value} handleDelete={handleDelete}/>

                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

