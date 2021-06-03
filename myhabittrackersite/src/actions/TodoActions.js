export const AddTodoAction = (todo) =>(dispatch, getState) => {
    const {
        Todo: {todoList}, 
    } = getState();

    const hasTodo = todoList.find(item => item.todo === todo);

    if(!hasTodo && todo !== '' ){
        dispatch({
            type: "ADD_TODO",
            payload: [{id: todo, todo}, ...todoList]
        })
    }

};

export const RemoveTodoAction= (todo) =>(dispatch, getState) => {
    const {
        Todo: {todoList}, 
    } = getState();

    dispatch({
    type: "REMOVE_TODO",
    payload: todoList.filter ( t => t.id !== todo.id )
})


};

