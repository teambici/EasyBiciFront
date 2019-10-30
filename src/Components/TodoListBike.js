
import React from 'react';
import axios from 'axios';
import {ViñetaCiclas} from './ViñetaCiclas'

export class TodoListBike extends React.Component {

    state = {
        ciclas: []
    }
    
    
    componentDidMount() {
        axios.get(`http://localhost:8080/CiclaC/`+localStorage.getItem("mailLogged"))
          .then(res => {
            const ciclas = res.data;
            this.setState({ ciclas });
          })
      }

    
  
    render() {        

        const items = this.state.ciclas;
        const listItems = items.map((list,i) =>
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