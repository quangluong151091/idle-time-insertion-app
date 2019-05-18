import React from 'react';
import { Route, Switch } from "react-router-dom";
import NestList from "../components/NestList";
import NestDetails from "../components/NestDetails";

const AppRouter = () => (
    <div>
        <Switch>
            <Route path="/" component={NestList} exact={true} />
            <Route path="/:id" component={NestDetails} />
        </Switch>
    </div>
);

export default AppRouter;