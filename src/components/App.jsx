import React, { useState } from "react";
import Header from './Header';
import InputArea from './InputArea'
import Notes from './Notes'


function App() {
  const [notes, setNotes] = useState([]);
  const[getId, setGetId] = useState(-1);

  


  function handleNotes(inputValue){
    
      if (getId > -1){
  
        const findindex = notes.filter((eachNote, index)=> index !== getId);
        findindex.splice(getId, 0, inputValue);


        setGetId(-1);
        setNotes(findindex);
        

        
        
      }else{
        
        setNotes((prevNotes)=>{
          return[
            ...prevNotes,
            inputValue
          ]
          
        });
        
      }

      

    
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
        return tag === filterValue;
      })
    })
  }



  return (
 
    <section>
      <Header/>
      <InputArea notes={notes} deleteNote={deleteNote} handleNotes={handleNotes} filterNotes={filterNotes}/>
      <div id="notes">
      {notes.map((eachNote, index)=>{
        return (
          <div>
          { getId === index ?
            <InputArea state={true} eachNote={eachNote} notes={notes}  deleteNote={deleteNote} handleNotes={handleNotes} filterNotes={filterNotes}/>
              :
            <Notes setGetId={setGetId} key={index} id={index}   deleteNote={deleteNote} title={eachNote.title} content={eachNote.content} tag={eachNote.tag}/>
          }
          </div>
        )
      })} 
      </div>
    </section>
    
 
  );
}

export default App;
