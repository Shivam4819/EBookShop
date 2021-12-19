import React ,{useState,useEffect}from 'react'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  Form,  Input, Button,  TreeSelect,DatePicker} from 'antd'
  

export default function NewBookComponent(){
    
    const [category,setCategory]=useState("");
    const [bookName,setBookName]=useState("");
    const [publisherName,setPublisherName]=useState("");
    const [authorName,setAuthorName]=useState("");
    const [description,setDescription]=useState("");
    const [price,setPrice]=useState("");
    const [deliveryTime,setDeliveryTime]=useState("");
    const [award,setAward]=useState("");
    
    function requestToServer() {
        axios.post("http://localhost:3000/api/v1/book",{
            bookName: bookName,
            category:category,
            authorName:authorName,
            publisherName:publisherName,
            deliveryTime:deliveryTime,
            price:price,
            award:award,
            description:description
          
        }).then((response)=>{
            console.log(response)

            if(response.status===200){
                toast.success(response.data.message);
            }
            else {
                toast.error("some error");
            }
        })

    }

    const [arr,setArr]= useState([])
  
    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/category")
            .then(response=> {console.log(response)
                setArr(response.data)
            })
    },[])

    return(
            <Form labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
            >
                <Form.Item label="Bookname" > <Input onChange={(event => setBookName(event.target.value))}/> </Form.Item>
                <Form.Item label="Category" >
                    <TreeSelect onChange={setCategory}
                        treeData={
                            arr.map(value=>(
                                {
                                title: value.name,
                                value: value.id,
                                }
                            ))
                        }
                    />
                </Form.Item>
                <Form.Item label="Author Name" > <Input onChange={(event => setAuthorName(event.target.value))}/> </Form.Item>
                <Form.Item label="Pulisher Name" > <Input onChange={(event => setPublisherName(event.target.value))}/> </Form.Item>
                <Form.Item label="Description" > <Input onChange={(event => setDescription(event.target.value))}/> </Form.Item>
                <Form.Item label="Price" > <Input onChange={(event => setPrice(event.target.value))}/> </Form.Item>
                <Form.Item label="Delivery Time" > <Input onChange={(event => setDeliveryTime(event.target.value))}/> </Form.Item>
                <Form.Item label="Award" > <Input onChange={(event => setAward(event.target.value))}/> </Form.Item>

                <Button color="primary" size="md" onClick={requestToServer}>Save </Button>{' '}
                <ToastContainer
                        position="bottom-right"
                        autoClose={2000}
                />

               
            </Form>
        
    )
}

