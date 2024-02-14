import { React,  useState } from 'react';

import ConversationArea from '../components/ConversationArea';
import {socket } from '../socket';

export default function MyForm() {
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
const [convers,setConvers] = useState([''])

  function conversation(value){
    setConvers(previous => [...previous, value])
  }
  function endConversation(){
    setConvers([])
  }
  function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
   
    
    socket.timeout(5000).emit('1', value, () => {
      conversation({channel :'1',value})
      console.log("value:" ,convers);
        setIsLoading(false);
    });
    
  }
  socket.on("1", (data)=>{
    console.log("response: ",data);
  })
  return (
    <form onSubmit={ onSubmit }>
     
     {/* <div className='conversationArea'> <ConversationArea convers =  {convers.map((c)=>{
    index =  {c.index}, value = {c.value} channel = {c.channel}
     } )} /></div> */}
      <input onChange={ e => setValue(e.target.value) } />

      <button type="submit" disabled={ isLoading }>Submit</button>
      <button onClick={endConversation}>endConversation</button>
    </form>
  );
}