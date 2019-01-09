const {createStore}= require('redux')

const Agestate={
    age:1
};
const myReducer =(state=Agestate,action)=>{
    const newstate={...state}
    if(action.type === 'ADD')
    {
        newstate.age = newstate.age+action.val;
    }
    if(action.type === 'SUB')
    {
        newstate.age = newstate.age-action.val;
    }
    return newstate;

}
const store= createStore(myReducer);
store.subscribe(()=>{
    console.log('initial state'+ JSON.stringify(store.getState()));
})


store.dispatch({type:'ADD',val:5})
//console.log('After Add state'+ JSON.stringify(store.getState()));

store.dispatch({type:'SUB',val:4})
store.dispatch({type:'SUB',val:4})
//console.log('After SUB  state'+ JSON.stringify(store.getState()));
//store.dispatch({type:'SUB'})
//console.log('After Add state'+ JSON.stringify(store.getState()));

//store.dispatch({type:'SUB'})
//console.log('After SUB  state'+ JSON.stringify(store.getState()));


//console.log(store.getState());