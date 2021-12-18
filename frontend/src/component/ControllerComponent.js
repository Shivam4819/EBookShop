import React from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import BooksCategories from "./admin/Category/CategoryComponent";
import NewCategory from "./admin/Category/NewCategory";
import BooksComponent from "./admin/Books/BooksComponent";

import Welcome from "./WelcomeComponent";
function ControllerComponent(){
return(
    <div >
        <HashRouter>
           <HeaderComponent/>
            <Switch>
                <Route exact path="/" component={Welcome}/>
                <Route exact path="/category" component={BooksCategories}/>
                <Route exact path="/new_category" component={NewCategory}/>
                <Route exact path="/books" component={BooksComponent}/>
            </Switch>
        </HashRouter>

    </div>
)

}
export default ControllerComponent;

