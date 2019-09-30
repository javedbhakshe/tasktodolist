import React, { Component } from 'react'
import {connect} from 'react-redux';

import AddTAsk from './AddTask';
import Task from './Task';
import Footer from './Footer';
import {ToggleCompleteAll} from '../actions';
class App extends Component {

    state = {
        bCompletedAll : false
    }

  onToggelCompleteAll = (e) => {
    let {checked} = e.target;
    this.props.ToggleCompleteAll(checked);
    this.setState({bCompletedAll:checked});
  } 

  renderTaskList = () =>{
      let aTaskList = this.props.taskList,
        bFilter = this.props.filterType === 'complete';

      if(this.props.filterType === 'active' || bFilter){
        aTaskList = aTaskList.filter((task)=>{
          return task.completed === bFilter
        })
      }

      let oTskList = aTaskList.map((task,index) => {
          return (
            <Task 
              key={index}
              data={task}
            />
            
          )  
      })
      return oTskList;
  }

  render() {
    return (
      <>
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1> 
            <AddTAsk />
          </header>
          <section className="main" >
          <input type="checkbox" className="toggle-all" checked={this.state.bCompletedAll} onChange={this.onToggelCompleteAll}/> 
              <ul className="todo-list">
                  {this.renderTaskList()}
              </ul>
          </section> 
          {
            this.props.taskList.length ? 
            <Footer /> 
            :
            null
          }
        </section>
        <footer className="info">
            <p>Double-click to edit a todo</p>
            <p>Written by Javed Bhakshey</p>
            <p>Part of TodoMVC</p>
        </footer>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}


export default connect(mapStateToProps,{ToggleCompleteAll})(App);
