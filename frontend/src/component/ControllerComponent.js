import React from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import BooksCategories from "./admin/Category/CategoryComponent";
import NewCategory from "./admin/Category/NewCategory";
import BooksComponent from "./admin/Books/BooksComponent";
import NewBookComponent from "./admin/Books/NewBookComponent";
import OrderComponent from "./admin/order/OrderComponent";
import LayoutComponent from "./LayoutComponent";

import Welcome from "./WelcomeComponent";
function ControllerComponent(){
return(
    <div >
        <HashRouter>
           <LayoutComponent>

                <Switch>
                    <Route exact path="/" component={Welcome}/>
                    <Route exact path="/category" component={BooksCategories}/>
                    <Route exact path="/new_category" component={NewCategory}/>
                    <Route exact path="/books" component={BooksComponent}/>                
                    <Route exact path="/new_book" component={NewBookComponent}/>
                    <Route exact path="/order" component={OrderComponent}/>
                </Switch>
            </LayoutComponent>
        </HashRouter>

    </div>
)

}
export default ControllerComponent;

