import  React from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { IconButton} from "@material-ui/core/";
import { DeleteOutlined } from "@material-ui/icons";

export default function CategoryCardComponent({value, handleDelete}){

    return(
        <div>
            <Card elevation={1}>
                <CardHeader align="left"
                action={
                    <IconButton onClick={()=>handleDelete(value.id)} >
                      <DeleteOutlined/>
                    </IconButton>
                }
                title={value.name}
                />
            </Card>

        </div>
    )
}

