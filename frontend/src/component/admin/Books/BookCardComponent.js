import  React ,{useEffect,useState}from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { IconButton,Typography } from "@material-ui/core/";
import { DeleteOutlined } from "@material-ui/icons";

export default function BookCardComponent({value}){

    return(
        <div>
            <Card elevation={1}>
                <CardHeader align="left"
                action={
                    <IconButton>
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
            </Card>

        </div>
    )
}

