
import React from 'react';
import axios from 'axios';
import {ViñetaCiclas} from './ViñetaCiclas'

export class TodoListBike extends React.Component {
  state = {
      ciclas: []
  }
  componentDidMount() {
      axios.get(`https://easybiciback.herokuapp.com/Cicla/cos/`+localStorage.getItem("mailLogged"))
        .then(res => {
          const ciclas = res.data;
          this.setState({ ciclas });
        })
    }  
      render() {
        const contenerdor={
          margin:0,
          padding:0

        }
        const items = this.state.ciclas;
        const listItems = items.map((list,i) =>
        <ViñetaCiclas
          key={i}
          res={list}
        />
        
      );

        return (  
            <ul style={contenerdor} >{listItems}</ul>
        );
    }
}
export default TodoListBike; 