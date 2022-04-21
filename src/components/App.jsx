import React, {useState} from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx"
import Note from "./Note.jsx";
import CreateArea from "./CreateArea.jsx";



function App(){

const [notes, setNotes] = useState([]);

    function addItems(note){
        setNotes((prevvalue) => {
           return [...prevvalue, note];
        });
    
    } 

    function deleteItem (id){
        setNotes((prevvalue) => {
            return prevvalue.filter((items,index) => {
                return index !=id;
            });
        });
        
    }

    return <div>
    <Header />
    <CreateArea 
        onAdd = {addItems}

    />
    {notes.map((note, index) => {
        return (
        <Note 
        key = {index}
        id = {index}
        title = {note.title}
        delitem = {deleteItem}
        content = {note.content}
    />);
    })}
    
    
    <Footer />
</div>   
}

export default App; 