import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import Layout from 'component/layout/index.jsx';

import Home from 'page/home/index.jsx';
import Login from 'page/login/index.jsx';
import ErrorPage from 'page/error/index.jsx';
import UserList from 'page/user/index.jsx';

class App extends React.Component {
    render() {
        let LayoutRouter = (
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/product' component={Home}/>
                    <Route path='/produce-category' component={Home}/>
                    <Route path="/order/index" component={Home}/>
                    <Route path="/order/detail/:orderNumber" component={Home}/>
                    <Route path='/user/index' component={UserList}/>
                    <Redirect exact from="/user" to="/user/index"/>
                    <Route component={ErrorPage}/>
                </Switch>
            </Layout>
        );
        return (
            <Router>
                <Switch>

                    <Route path='/login' component={Login}/>

                    <Route path='/' render={props => (
                        LayoutRouter
                    )}/>
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);