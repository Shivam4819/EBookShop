import  React ,{useEffect,useState}from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { IconButton,Typography } from "@material-ui/core/";
import { DeleteOutlined} from "@material-ui/icons";
import UpdateIcon from '@material-ui/icons/Update';
import {Link} from "react-router-dom"

export default function OrderCardComponent({value}){

    
    
    return(
        <div>
            <Card elevation={1}>
                <CardHeader align="left"
                
                title="value.map()"
                subheader="{value.category.name}"
                />
                <CardContent>
                    
                    <Typography variant="body2" color="textSecondary" align="left">
                    BookName: 
                    </Typography>
                    
                    <Typography variant="body2" color="textSecondary" align="left">
                    ShipingAddress1:  {value.shipingAddress1}     
                    </Typography>
                    <Typography variant="body2" color="textSecondary" align="left">
                    ShipingAddress2: {value.shipingAddress2}     
                    </Typography>
                    <Typography variant="body2" color="textSecondary" align="left">
                    City:  {value.city}     
                    </Typography>
                    <Typography variant="body2" color="textSecondary" align="left">
                    Zip: {value.zip}     
                    </Typography>
                    <Typography variant="body2" color="textSecondary" align="left">
                    Country:  {value.country}     
                    </Typography>
                    <Typography variant="body2" color="textSecondary" align="left">
                    Phone: {value.phone}     
                    </Typography>
                    <Typography variant="body2" color="textSecondary" align="left">
                    Status:  {value.status}     
                    </Typography>
                    <Typography variant="body2" color="textSecondary" align="left">
                    TotalPrice: {value.totalPrice}     
                    </Typography>
                </CardContent>
                
               
            </Card>

        </div>
    )
}

