import React, { useState } from 'react';
import { BsMoonStarsFill } from 'react-icons/bs';

function Header(){

    const [isDone, setIsDone] = useState(true);

    function handleIsDone(){
        setIsDone(!isDone)
    }

    return(
        <header id='header'>
            <h1 id='logo'>Note...</h1>
            <BsMoonStarsFill  id='mode' style={{color: isDone ? 'white' : 'black'}} onClick={handleIsDone}/>
        </header>
    );
}

export default Header;