import React from 'react';
import { MdDelete } from 'react-icons/md'
import { FiEdit2 } from 'react-icons/fi'

function Notes(props){
    return(
        <section id='notes'>
        <div className='display-notes'>
            <div id='input-note'>
            <div id='color'>
                <div className='red colors'></div>
                <div className='green colors'></div>
                <div className='yellow colors'></div>
            </div>
            <div id='inputs'>
                <h1 className='note-title'>{props.title}</h1>
                <p className='main-note'>{props.content}</p>
                <span className='note-tag'>{props.tag}</span>
            </div>
            <div id='ed'>
            <div id='edi'>
              <span><FiEdit2 onClick={()=> props.setGetId(props.id)}/></span>  
            </div>
            <div id='del'>
              <span><MdDelete onClick={()=>{
                  props.deleteNote(props.id)
              }}/></span> 
            </div>
            </div>
            </div>
            </div>
        </section>
    );
}

export default Notes;