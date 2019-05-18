import React from 'react';
import Header from './Header';
import SearchBox from './SearchBox';
import { BrowserRouter } from "react-router-dom";
import Routes from '../routers/AppRouter';

class IdleTimeInsApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <SearchBox searchBoxName={"userNameSearch"} onSearchTermChange={this.onSearch}/>

                <BrowserRouter>
                    <Routes/>
                </BrowserRouter>
            </div>
        );
    }
}

export default IdleTimeInsApp;