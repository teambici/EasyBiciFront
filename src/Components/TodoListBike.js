
import React from 'react';
import axios from 'axios';
import {ViñetaCiclas} from './ViñetaCiclas'

export class TodoListBike extends React.Component {

     constructor(props) {
        super(props);
        this.state = { items:[]}
        this.lista = [];
     }
     componentDidMount() { 
      fetch('https://easybiciback.herokuapp.com/Cicla')
          .then(response => response.json())
          .then(data => {
            console.log("data")
            console.log(data)
              let tasksList = [];
              data.forEach(function (task) {
                 
                  if (task.dueno === localStorage.getItem("mailLogged")) {
                      tasksList.push({
                          descripcion: task.descripcion,
                          puntuacion: task.puntuacion,
                          disponible: task.disponible,
                          tipo: task.tipo,
                          fechamante: task.fechamante
                      })
                  }

              });
              this.setState({ items: tasksList });
              console.log(this.state.items)
          });
      
  }
    render() {   
      console.log("owo")     
      console.log(this.state)
        const bikess = this.state.items;
        const listItems = bikess.map((list,i) =>
        <li id={i}><ViñetaCiclas
          res={list}
          />
        </li>
      );
      
        return (  
            <ul>{listItems}</ul>
        );
    }
}
export default TodoListBike;