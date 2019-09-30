export const addTask = (p_title,p_index) =>{
    let oTask = {id:p_index,title:p_title,completed:false};
    return{
        type:'ADD_TASK',
        payload:oTask
    }
}

export const applyFilter = (p_filter) => {
    return{
        type:'APPLY_FILTER',
        payload:p_filter
    }
}

export const ToggleCompleteAll = (p_bool) => {
    return{
        type:'TOGGLE_COMPLETED',
        payload:p_bool
    }
}

export const ToggleCompleteTask = (p_task,p_bool) => {
    return{
        type:'TOGGLE_TASK',
        payload:{
            task:p_task,
            checked:p_bool
        }
    }
} 

export const DeleteTask = (p_task) => {
    return{
        type:'DELETE_TASK',
        payload:p_task
    }
} 

export const EditTask = (p_task,p_title) => {
    return{
        type:'EDIT_TASK',
        payload:{
            task:p_task,
            title:p_title
        }
    }
} 


export const ChangeFilter = (p_val) => {
    return{
        type:'CHANGE_FILTER',
        payload:p_val
    }
} 

export const ClearCompletedTask = () => {
    return{
        type:'CLEAR_COMPLETED'
    }
} 


