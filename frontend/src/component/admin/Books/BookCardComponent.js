import  React ,{useEffect,useState}from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { IconButton,Typography } from "@material-ui/core/";
import { DeleteOutlined} from "@material-ui/icons";
import UpdateIcon from '@material-ui/icons/Update';
import {Link} from "react-router-dom"

export default function BookCardComponent({value, handleDelete, updateData}){


    return(
        <div>
            <Card elevation={1}>
                <CardHeader align="left"
                action={
                    <IconButton onClick={()=>handleDelete(value.id)}>
                      <DeleteOutlined/>
                    </IconButton>
                    
                }
                
                title={value.bookName}
                subheader={value.category.name}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" align="left">
                        Description:  {value.description}     
                    </Typography>
                    <Typography variant="body2" color="textSecondary" align="left">
                        Price: {value.price}     
                    </Typography>
                    <Typography variant="body2" color="textSecondary" align="left">
                        Publisher Name:  {value.publisherName}     
                    </Typography>
                    <Typography variant="body2" color="textSecondary" align="left">
                       Delivery Time: {value.deliveryTime}     
                    </Typography>
                </CardContent>
                {/* <CardActions>
                    <IconButton  onClick={()=><Link to ="/update"></Link>,updateData(value)}>
                        <UpdateIcon href="/update"/>
                        <Link to ="/update"></Link>
                    </IconButton>

                </CardActions> */}
            </Card>

        </div>
    )
}

