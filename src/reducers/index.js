import {combineReducers} from 'redux';
const   STORAGE_KEY = 'TODOMVC_REACT';

const TaskListReducer = (p_taskList,action) =>{

    if(action.type === 'ADD_TASK'){
        let aTaskList = [...p_taskList,action.payload];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(aTaskList))
        return aTaskList;
    }

    if(action.type === 'TOGGLE_COMPLETED'){
        let aTaskList = [...p_taskList],i,nLen = p_taskList.length,
            bFlag = action.payload;
        for(i = 0;i < nLen;i++){
            aTaskList[i].completed = bFlag;
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(aTaskList))
        return aTaskList;   
    }

    if(action.type === 'TOGGLE_TASK'){
        let aTaskList = [...p_taskList],nIndex = aTaskList.indexOf(action.payload.task),
        bFlag = action.payload.checked;
        aTaskList[nIndex].completed = bFlag;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(aTaskList))
        return aTaskList;
    }

    if(action.type === 'DELETE_TASK'){
        let aTaskList = [...p_taskList],nIndex = aTaskList.indexOf(action.payload);
        aTaskList.splice(nIndex,1);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(aTaskList))
        return aTaskList;
    }

    if(action.type === 'EDIT_TASK'){
        let aTaskList = [...p_taskList],nIndex = aTaskList.indexOf(action.payload.task);
        aTaskList[nIndex].title = action.payload.title;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(aTaskList))
        return aTaskList;
    }

    if(action.type === 'CLEAR_COMPLETED'){
        let aTaskList = [...p_taskList],i,nLen = p_taskList.length,
            aFinalTask = [];
        for(i = 0;i < nLen;i++){
            if(!aTaskList[i].completed){
                aFinalTask.push(aTaskList[i]);
            }
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(aFinalTask))
        return aFinalTask;   
    }


    var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    todos.forEach(function (todo, index) {
      todo.id = index
    });
    return todos;
}

const ChangeFiletrType = (p_filter = 'all',action) =>{
    if(action.type === 'CHANGE_FILTER'){
        return action.payload
    }
    return p_filter;
}


export default combineReducers({
    taskList:TaskListReducer,
    filterType:ChangeFiletrType
}) ;