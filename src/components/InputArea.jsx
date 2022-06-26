import React, { useState } from 'react';

function InputArea(props){
    const [inputValue, setInputValue] = useState({
        title: '',
        content: '',
        tag: ''
    });

    function handleInputChange(event){
        const {name, value} = event.target;
        setInputValue((prevInputs)=>{
            return{
                ...prevInputs,
                [name]: value
            };
        });
    }

    const [filter, setFilter] = useState('');

    function filterUpdate(event){
        const value = event.target.value;
        setFilter(value)
    }


    return(
        <section id='input-section'>
        <section>
            <div id='filter-area'>
                <input className='filter-input' onChange={filterUpdate} type='text' placeholder='Filter...' value={filter}/>
                <button className='filter-button' onClick={()=>{
                    props.filterNotes(filter, inputValue.tag);
                    setFilter('');
                    }}
                    ><span>Filter</span></button>
            </div>
        </section>
        <form>
            <div id='input-area'>
            <div id='color'>
                <div className='red colors'></div>
                <div className='green colors'></div>
                <div className='yellow colors'></div>
            </div>
            <div id='inputs'>
            
                <input onChange={handleInputChange} name='title' className='inputs' type='' placeholder='Title' value={inputValue.title}/>
                <textarea onChange={handleInputChange} name='content' className='textarea' type='' placeholder='Write some notes...'  rows='3' value={inputValue.content}/>
                <input onChange={handleInputChange} name='tag' className='inputs tag' type='' placeholder='Tag' value={inputValue.tag}/>
            
            </div>
            <div id='button'>
              <button onClick={(event)=>{
                  props.handleNotes(inputValue);
                  setInputValue({
                    title: '',
                    content: '',
                    tag: ''
                  });
                  event.preventDefault()
              }} className='button'>ADD</button> 
            </div>
            </div>
        </form>
        </section>
    );
}

export default InputArea;