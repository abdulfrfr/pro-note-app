import React, { useState } from "react";
import Header from './Header';
import InputArea from './InputArea'
import Notes from './Notes';


function App() {
  const [notes, setNotes] = useState([]);

  function handleNotes(inputValue){
    setNotes((prevNotes)=>{
      return[
        ...prevNotes,
        inputValue
      ]
      
    });
  }

  function deleteNote(id){
    setNotes((prevNotes)=>{
      return prevNotes.filter((note, index)=>{
       return index !== id
      })
    })
  }

  function filterNotes(filterValue, tag){
    setNotes((prevNotes)=>{
      return prevNotes.filter((note)=>{
        return filterValue === tag;
      })
    })
  }


  return (
 
    <section>
      <Header/>
      <InputArea handleNotes={handleNotes} filterNotes={filterNotes}/>
      <div id='notes'>
      {notes.map((eachNote, index)=>{
        return <Notes key={index} id={index} deleteNote={deleteNote} title={eachNote.title} content={eachNote.content} tag={eachNote.tag}/>
      })}
      </div>
    </section>
    
 
  );
}

export default App;
