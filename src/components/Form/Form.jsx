import React, { useState } from "react"
import './form.css'

export const Form = ({addTask}) => {

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    
    const submit = (e) => {
        e.preventDefault()

        //Валидация
        if (title.length === 0 || text.length === 0) {
            return alert('Заполни форму')
        }

        addTask({
            title,
            text,
        })

        setTitle('')
        setText('')
    }


    return(
        <div>
            <div className="form-input">
                <div>
                    <label htmlFor="title">Title</label>
                </div>
                <div>
                    <input type="text" id="title"  value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
            </div>
            <div>
                <div>
                    <label htmlFor="">Text:</label>
                </div>
                <div>
                    <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    ></textarea>
                </div>
            </div>
            <button className="add" onClick={submit} id="add">+Add</button>
        </div>
    ) 
}