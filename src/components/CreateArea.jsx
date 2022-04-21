import React,{useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from "@material-ui/core/Zoom"

function CreateArea(params){

    const [isDone, setIsDone] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

function handleChange(event){
    const {name, value} = event.target;
    setNote((prevValue) =>{
        return {
            ...prevValue,
            [name]: value
        };
    });
    
}    

function submitNote(event){
    params.onAdd(note);
    setNote({
        title: "",
        content: ""
    });
    setIsDone(false);
  event.preventDefault();  
}


function extend(){
    setIsDone(true);
    
}

    return (
        <div>
            <form className="create-note">
                {isDone ? (<input 
                    name = "title"
                    placeholder="Title"
                    value = {note.title}
                    onChange = {handleChange}
                />) : null}
                
                <textarea 
                    name = "content"
                    placeholder="Take a note"
                    value = {note.content}
                    onClick = {extend}
                    onChange = {handleChange}
                    rows = {isDone ? 3 : 1}
                />
                <Zoom in={isDone}>
                <Fab onClick={submitNote}>
                    <AddIcon />
                </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;