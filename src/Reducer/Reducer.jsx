export const initialValue = {
    todos:[
        {id:1, task:"Salat"},
        {id:2, task:"Reading"}
    ]
}


export const reducer = ((state, action)=> {
    switch(action.type){
        case "ADD_TODO":
            return{
                ...state,
                todos:[...state.todos, action.payload],
            }

        case "DELETE_TODO":
            const fiteretTodo = state.todos.filter((todo) => todo.id !== action.payload)
            return{
                ...state,
                todos:fiteretTodo,
            }
        default:
            return state;
    }
});