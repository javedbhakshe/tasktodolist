import React, { Component } from 'react';
import {connect} from 'react-redux';

import {ToggleCompleteTask,DeleteTask,EditTask} from '../actions';

class Task extends Component {

    constructor(props){
        super(props);
        this.todofield = React.createRef();
    }

    state = {
        value:'',
        bEditing:false
    }

    editTodo = (value) => {
        let bEditing = true;
        this.setState({value,bEditing},()=> this.state.bEditing &&  this.todofield.current.focus());
    }

    handleEdit = ({target}) => {
        let {value} = target;
        this.setState({value});
    }

    doneEdit = (e) =>{
    
        setTimeout(() => {
            if(this.state.bEditing){
                this.props.EditTask(this.props.data,this.state.value); 
                let bEditing = false,
                value = '';
                this.setState({value,bEditing});
            }
        },0);
    }

    handleOnkeyUp = (e) =>{
        if(e.key === 'Enter' || e.key === 'Esc'){
            this.props.EditTask(this.props.data,this.state.value); 
            let bEditing = false,
            value = '';
            this.setState({value,bEditing});
        }
    }

    handleCheckBoxChange = (e) =>{
        this.props.ToggleCompleteTask(this.props.data,e.target.checked)
    }
    
    render() {
        let {title,completed} = this.props.data,
            sEditing = this.state.bEditing ? 'editing' : '';

        return (
            <>
                <li className={`todo ${completed ? 'completed' : ''} ${sEditing}`}>
                    <div className="view">
                        <input type="checkbox" className="toggle" checked={completed} onChange={this.handleCheckBoxChange}/> 
                        <label onDoubleClick = {e =>  this.editTodo(title)}>{title}</label> 
                        <button className="destroy" onClick={e => this.props.DeleteTask(this.props.data)}></button>
                    </div> 
                    <input type="text" className="edit" value = {this.state.value}
                        ref={this.todofield}
                        autoComplete="off"
                        onChange = {this.handleEdit}
                        onBlur = {this.doneEdit}
                        onKeyUp = {this.handleOnkeyUp}
                    />
                </li>   
            </>
        )
    }
}

const mapStateToProps =  ({taskList}) => {
    return { taskList };
}

export default connect(mapStateToProps,{ToggleCompleteTask,DeleteTask,EditTask})(Task);
