import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'
 
class TodosContainer extends Component {

    renderTodos = () => this.props.todos.map((todo, i) => <Todo key={i} text={todo}/>)
 
  render() {
      console.log('todoContainer render')
    return(
        
      <div>{this.renderTodos()}</div>
    );
  }
};
 
const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodosContainer);