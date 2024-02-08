import React, { useState } from 'react';

const TodoList = () => {
  let [allmessages,setAllmessages] = useState([]);
  let [message,setMessage] = useState("");
  const handleInputChange = (event) => {
    if (event.key === 'Enter'){
      event.preventDefault();
      addMessage();
      return;
    }
    setMessage(event.target.value);
  };
  let addMessage = ()=>{
    setMessage(message);
    allmessages.push(message);
    setAllmessages(allmessages);
    setMessage("");
  }
  let del = (index) =>{
    let newarr = [];
    for(let i=0;i<allmessages.length;i++){
      if(i==index)continue;
      newarr.push(allmessages[i]);
    }
    setAllmessages(newarr);
  }
  return (
  <div>
    <div className='w-11/12 bg-gray-600 rounded p-6 h-screen m-auto'>
    <div className='font-sans font-bold text-5xl'>TODO List</div>

          <input type="text" className='font-sans w-4/5 h-10 mt-4 pl-2 text-black rounded-l-md bg-slate-50' value={message} onChange={handleInputChange} /><button className='h-11 mt-3 rounded-r-md pl-3 pr-3 bg-blue-500' onClick={()=>addMessage()}>Add</button>
          {allmessages.map((item, index) => (
            <div className='m-3 ml-10 w-11/12 text-left'>
             <span className='font-sans leading-loose bg-stone-900 rounded p-2 text-left ' >{index+1}. {item}  </span><button className='text-1xl' onClick={()=>del(index)}>❌</button> 
           </ div>
           ))}
      </div>
  </div>    
  );
};

export default TodoList;