import React, { useEffect, useState } from "react";
import Header from './Header';
import InputArea from './InputArea'
import Notes from './Notes'
import axios from 'axios';


function App() {
const notesApi = axios.create({
  baseURL: "http://localhost:5000/notes/"
})

  const [notes, setNotes] = useState([]);
  const[getId, setGetId] = useState(-1);

  useEffect(()=>{
    notesApi.get("/")
.then((responds)=> setNotes(responds.data))
.catch((error)=>console.log(error));

  }, [])



  function handleNotes(inputValue){
    
      if (getId > -1){
  
        const findindex = notes.filter((eachNote, index)=> index !== getId);
        findindex.splice(getId, 0, inputValue);


        setGetId(-1);
        setNotes(findindex);
        

        
        
      }else{
        
        notesApi.post("/", {
        "title": inputValue.title,
        "content": inputValue.content,
        "tag": inputValue.tag
    })
    .then((responds)=> setNotes([responds.data, ...notes]))
    .catch((error)=>console.log(error));

    

  }
  console.log(notes.id);
  }

  

  function deleteNote(id){
   notesApi.delete(`/${id}`)
    setNotes((prevNotes)=>{
      return prevNotes.filter((note, index)=>{
       return index !== id
      })
    })
  }

  



  return (
 
    <section>
      <Header/>
      <InputArea notes={notes} deleteNote={deleteNote} handleNotes={handleNotes} setNotes={setNotes}/>
      <div id="notes">
      {notes.map((eachNote, index)=>{
        return (
          <div>
          { getId === index ?
            <InputArea state={true} eachNote={eachNote} notes={notes}  deleteNote={deleteNote} handleNotes={handleNotes} />
              :
            <Notes setGetId={setGetId} key={index} id={eachNote.id}   deleteNote={deleteNote} title={eachNote.title} content={eachNote.content} tag={eachNote.tag}/>
          }
          </div>
        )
      })} 
      </div>
    </section>
    
 
  );
}

export default App;
