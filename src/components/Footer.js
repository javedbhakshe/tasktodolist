import React, { Component } from 'react'
import {connect} from 'react-redux';

import {ChangeFilter,ClearCompletedTask} from '../actions';

class Footer extends Component {

    getItemsLeft = () =>{
        let nLeft = 0,
            aTaskList = this.props.taskList,i;
        for(i in aTaskList){
            if(!aTaskList[i].completed){
                nLeft++;
            }
        }
        return nLeft;
    }
    render() {
        let sButton = this.props.filterType;
        return (
            <footer className="footer" >
                <span className="todo-count">
                    <strong>{this.getItemsLeft()}</strong> item(s) left
                </span>
                <ul className="filters">
                    <li>
                        <button className={sButton === 'all' ?  'selected' : ''} onClick = {e => this.props.ChangeFilter('all')}>All</button>
                    </li>
                    <li>
                        <button className={sButton === 'active' ?  'selected' : ''} onClick = {e => this.props.ChangeFilter('active')}>Active</button>
                    </li>
                    <li>
                        <button className={sButton === 'complete' ?  'selected' : ''} onClick = {e => this.props.ChangeFilter('complete')}>Completed</button>
                    </li>
                </ul>
                <button className="clear-completed" onClick={this.props.ClearCompletedTask}>
                    Clear completed
                </button>
            </footer>
        )
    }
}

const mapStateToProps = (state) =>{
    return state;
}

export default connect(mapStateToProps,{ChangeFilter,ClearCompletedTask})(Footer);