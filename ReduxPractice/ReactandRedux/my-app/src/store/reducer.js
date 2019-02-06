
const initialstate = {
    age: 21,
    history: []
};
const reducer = (state = initialstate, action) => {

    const newstate = { ...state };

    switch (action.type) {
        case "ADD":
        return {
            ...state,
            age: state.age + action.value,
            history: state.history.concat({id:Math.random(),age:state.age + action.value})
        }
         
        case "SUB":
            return {
                ...state,
                age: state.age - action.value,
                history: state.history.concat({id:Math.random(),age:state.age - action.value})
            }

            case "Del":
            return {
                ...state,
             
                history: state.history.filter(el=>el.id!=action.key)
            }
        
            case "default":
            return{
                newstate
            }
    }
    return newstate
}


export default reducer;
