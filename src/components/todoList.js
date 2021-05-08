import React, { useState } from 'react';

function TodoApp() {

    const [state, setstate] = useState("");
    const [desc, setdesc] = useState("");
    const [list, setlist] = useState([]);
    const inputHandler = (e) => {
        setstate(e.target.value);
    }

    const descHandler = (e) => {
        setdesc(e.target.value);
    }

    const addItem = () => {
        if (state !== "" && desc !== "") {
            const fullList = {
                id: Math.floor(Math.random() * 10),
                name: state,
                desc: desc,
                isDone: false,
            }

            setlist([...list, fullList]);
        }

    }

    const deletelist = (e, id) => {
        e.preventDefault();
        setlist(list.filter((l) => l.id !== id));
    }
    console.log(list);
    return (
        <div>
            <input type="text" id="task" name="task" onChange={(e) => inputHandler(e)} placeholder="Enter Task Here" />
            <input type="text" id="desc" name="desc" onChange={(e) => descHandler(e)} placeholder="Enter Description Here" />
            <button onClick={addItem}>Add Task</button>
            <h2>Here is Your Task ToDo</h2>
            <ul>
                {list.map(l =>
                    <li>Name:{l.name} <br />Description:
                        {l.desc}<button onClick={(e) => deletelist(e, l.id)}>Delete</button> <br /> <br /></li>
                )}
            </ul>
        </div>
    );
}
export default TodoApp;