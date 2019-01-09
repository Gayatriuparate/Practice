const {craeteStore}=require('redux')

const myredux=(state=0,action)=>{
    if(action.type==='ADD')
    state=state+1;

}

const store= craeteStore(myredux)

store.distpach({type:'ADD',val:2});
console.log(store.getstate())