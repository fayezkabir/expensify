import React from "react";
import {BrowserRouter, Route,Switch } from "react-router-dom";
const Hostory = require("history");

//local file imports

import AddExpense from "./../components/AddExpanse";
import EditExpansePage from "../components/EditExpansePage";
import ExpenseDashboard from "./../components/ExpenseDashboard";
import Header from "./../components/Header";
import HelpPage from "./../components/Help";
import NotFound from "./../components/NotFound";


const AppRouter = () =>  (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboard} exact={true} />
                <Route path="/create" component={AddExpense} />
                <Route path="/edit/:id" >
                        <EditExpansePage></EditExpansePage>
                </Route>
                <Route path="/help" component={HelpPage} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>    
);

export default AppRouter;

