import React, { Component } from 'react';
import "./root.css"
import { RouterProvider, useLocation } from 'react-router-dom'
import Routes from "../router/Routes";

export default class App extends Component
{
    componentDidMount()
    {
        

        //document.title
    }

    constructor(props)
    {
        super(props);

        this.state = {
            title: "texto"
        }
    }

    handleChange(e)
    {
        this.setState({ ...this.state, title: e.target.value })
    }

    render()
    {

        return (
            <React.Fragment>
                <RouterProvider router={Routes}/>
            </React.Fragment>
        );
    }
}   