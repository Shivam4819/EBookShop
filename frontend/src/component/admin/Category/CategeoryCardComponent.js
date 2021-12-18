import  React from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { IconButton} from "@material-ui/core/";
import { DeleteOutlined } from "@material-ui/icons";

export default function CategoryCardComponent({value}){

    return(
        <div>
            <Card elevation={1}>
                <CardHeader align="left"
                action={
                    <IconButton>
                      <DeleteOutlined/>
                    </IconButton>
                }
                title={value.name}
                />
            </Card>

        </div>
    )
}

