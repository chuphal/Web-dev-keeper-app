import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function Note(params){

    function handleClick(){
        params.delitem(params.id);
    }

    return (
    <div className="note">
        
        <h1>{params.title}</h1>
        <p>{params.content}</p>
        <button onClick = {handleClick}>
            <DeleteIcon />
        </button>
    </div>
    );
    
}

export default Note;