import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Redirect } from "react-router-dom";
import UpperView from '../UpperVIew';
import TodoListBike from '../TodoListBike';

export class MainBike extends Component {
    constructor(props) {
        super(props);
        this.state = { add: false };
        this.handleAdd = this.handleAdd.bind(this);
    }
    handleAdd(event) {
        this.setState({ add: true })
    }
    render() {      
        const Buttonstyle = {
            position: "fixed",
            bottom: "30px",
            right: "30px"
        };
        if (this.state.add) {
            return <Redirect to={{
                pathname: '/NewBIke',
            }}
            />
        };

        return (
            <div>
                <UpperView title="Your Bikes"></UpperView>
                    <Fab color="primary" aria-label="add" style={Buttonstyle} onClick={this.handleAdd} ><AddIcon /></Fab>
                <TodoListBike />
            </div>

        )
    }

}
