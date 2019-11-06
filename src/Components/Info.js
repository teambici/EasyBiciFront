import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import bicicleta from '../img/bicicleta.jpg';
import { Redirect} from "react-router-dom";
export class Info extends Component {
    constructor(props) {
        super(props);
        this.state={next:false}
        this.handleNext = this.handleNext.bind(this);
    }
    handleNext(event){
        this.setState({ next: true });        
    }
    render() {        
        const divStyle = {
            card: {
                maxWidth: 345,
               
                marginBottom:"20px", 
            }        
          
        };
        if (this.state.next) {
            return <Redirect to={{
                pathname: '/bike',
                id: this.props.id
            }}
            />
        };
        

        return (
            <Card  style={divStyle.card} onClick={this.handleNext}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"                        
                        
                        image={"https://easybiciback.herokuapp.com/Image/"+this.props.Image}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.title}
                         </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                           {this.props.parrafo}
                        </Typography>                        
                    </CardContent>
                </CardActionArea>
               
            </Card>
        )
    }
}