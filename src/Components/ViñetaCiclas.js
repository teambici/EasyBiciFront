import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { Container } from '@material-ui/core';

export class ViñetaCiclas extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        const fecha=this.props.res.fechamante.split("T")[0] ;
        
        const contenedor={
            margin:20
        }
        const texto1={
            display:"flex",
            flexDirection: "column"
        }
        const texto2={
            display:"flex",  
            justifyContent: "space-between"       
        }
        console.log(this.props)
        return (
            
            <div style={contenedor}>                
                <Card style={{flex:1}} >
                    <Container>
                    <CardMedia
                        component="img"
                        image={"https://easybiciback.herokuapp.com/Image/"+this.props.res.imagen}
                        height="140"
                    /> 
                    </Container>
                    <Container style={texto1}>
                        <Typography color="textSecondary" gutterBottom>
                            Descripcion : {this.props.res.descripcion}
                        </Typography>
                        <Container style={texto2}>
                            <Typography color="textSecondary" gutterBottom>
                                Puntuacion : {this.props.res.puntuacion}  
                            </Typography>
                            <Typography color="textSecondary" gutterBottom>
                                Disponible: {JSON.stringify(this.props.res.disponible)}
                            </Typography>
                        </Container>
                       
                            <Typography color="textSecondary" gutterBottom>
                                Tipo: {this.props.res.tipo}
                            </Typography>
                            <Typography color="textSecondary" gutterBottom>
                                Last maintenance: {fecha}
                            </Typography>
                                           
                    </Container>
                                        
                    
                </Card>
               
            </div>
        );
    }
}