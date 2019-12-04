import React, { Component } from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import UpperView from '../UpperVIew';
export class Profile extends Component {
    constructor(props) {
        super(props)
    }


    render() {      
        const barStyles = {
          width:"auto",
          borderRadius:"20px"
        };
        return (
            <article>
                
                <div>
                    <UpperView title="Profile"></UpperView>   

                    <CardMedia 
                        style={barStyles}   
                        component="img"                   
                        image={"https://easybiciback.herokuapp.com/Image/"+localStorage.getItem("mailLogged")}
                        height="100"
                        
                    />
                    
                </div>               
            </article>

        )
    }
}
