import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';

export class Notificaiton extends Component {
    constructor(props) {
    super(props);        
        
    }  
    
    render() {
      
        
        return (

            <div className=" Confirmed">
                <Snackbar         
               
                open={true}
                autoHideDuration={6000}           
                ContentProps={{
                'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">{"aaaaa"}</span>}
                action={[
                <Button key="undo" color="secondary" size="small" >
                    UNDO
                </Button>,                
                ]}
            />
                
            </div>

        );
    }

}
