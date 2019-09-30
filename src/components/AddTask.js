import React, { Component } from 'react';
import {connect} from 'react-redux';

import {addTask} from '../actions';

class AddTask extends Component {

    state = {
        value:''
    }
    
    handleKeyUp = (e) =>{
        let {value} = this.state;
        value = value.trim();
        if(e.key === 'Enter' && value){
            let nIndex = this.props.taskList.length;
            this.props.addTask(value,nIndex);
            value = ''
            this.setState({value});
        }
    }

    handleInputChange = (e) =>{
        let {value} = e.target;
        this.setState({value});
    }

    render() {
        return (
            <>
                <input autoFocus="autoFocus" autoComplete="off" 
                    placeholder="What needs to be done?" className="new-todo"
                    onKeyUp={this.handleKeyUp}
                    onChange={this.handleInputChange}
                    value={this.state.value}
                />  
            </>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        taskList:state.taskList
    }
}


export default connect(mapStateToProps,{addTask})(AddTask);
