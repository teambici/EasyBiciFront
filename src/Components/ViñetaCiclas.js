import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

export class ViñetaCiclas extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
       
        console.log(this.props)
        return (
            <div >
                <p></p>
                <p></p>
                <Card style={{flex:1, backgroundColor:'#92a8d1'}} >
                <CardMedia
                       component="img"
                        image={"https://easybiciback.herokuapp.com/Image/"+this.props.res.imagen}
                    />  
                    <Typography color="textSecondary" gutterBottom>
                        Descripcion= {this.props.res.descripcion}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        puntuacion= {this.props.res.puntuacion} {"                  -          ".replace(/ /g, "\u00a0")} disponible= {JSON.stringify(this.props.res.disponible)}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        Tipo= {this.props.res.tipo} {"                  -          ".replace(/ /g, "\u00a0")} Ultimo mantenimiento= {this.props.res.fechamante}
                    </Typography>
                </Card>
                <p></p>
                <p></p>
            </div>
        );
    }
}