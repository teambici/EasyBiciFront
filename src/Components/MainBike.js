import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Redirect } from "react-router-dom";
export class MainBike extends Component {
    constructor(props) {
        super(props);
        this.state = { back: false };
        this.handleChange  = this.handleChange .bind(this);
    }
    handleChange (event) {
        this.setState({ back: true })
    }

    render() {
        
        return (
            <div>
                 <Paper square>
                    <Tabs
                      
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={this.handleChange}
                        aria-label="disabled tabs example"
                    >
                        <Tab label="Active" />
                        <Tab label="Disabled" disabled />
                        <Tab label="Active" />
                    </Tabs>
                </Paper>


            </div>
           
        )
    }

}
