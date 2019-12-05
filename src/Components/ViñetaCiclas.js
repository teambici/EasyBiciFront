import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { Container } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import { Redirect} from "react-router-dom";

export class ViñetaCiclas extends React.Component {

    constructor(props) {
        super(props);
        this.state={next:false}
        this.handleNext = this.handleNext.bind(this);

    }
    handleNext(event){
        this.setState({ next: true });        
    }
    render() {        
        const scorer={
            display:"flex"
        }
        const contenedor={
            margin:20
        }
        const texto1={
            marginTop:10,
            marginBottom:10,
            display:"flex",
            flexDirection: "column"
        }
        const texto2={            
            padding:0,
            display:"flex",  
            justifyContent: "space-between"       
        }
        const color={
            color:"#EABE3F"
        }
        if (this.state.next) {
            localStorage.setItem("lastBike",this.props.res.id)
            return <Redirect to={{
                pathname: '/bike',
                id: this.props.res.id
            }}
            />
        };       
        return (
            
            <div style={contenedor}>                
                <Card style={{flex:1}}  onClick={this.handleNext}>                    
                    <CardMedia
                        component="img"
                        image={"https://easybiciback.herokuapp.com/Image/"+this.props.res.imagen}
                        height="140"
                    />                     
                    <Container style={texto1}>
                        <Container style={texto2}>
                        <Typography  gutterBottom>
                                {this.props.res.marca} / {this.props.res.tipo}
                            </Typography>
                            <div style={scorer}>
                                <StarIcon style={color}/>
                                <Typography  gutterBottom>                                    
                                    {this.props.res.puntuacion}  
                                </Typography>
                            </div>                            
                        </Container>                                              
                        <Typography variant="h5" align="left">
                            <b> ${this.props.res.precio} COP</b> per hour
                        </Typography>
                            
                    </Container>
                                        
                    
                </Card>
               
            </div>
        );
    }
}