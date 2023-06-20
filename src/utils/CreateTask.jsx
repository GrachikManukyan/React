import React, {useState} from "react";
import {v4 as uuid} from "uuid";

export function CreateTask({ add }) {

    const [title, Title] = useState('');
    const [description, Description] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const id = uuid();

        const Task = {
            id,
            title,
            description,
            status: 'completed',
            createdAt: new Date().toLocaleString(),
        };

        add(Task);

        Title('');
        Description('');
    };
    return(
        <form onSubmit={handleSubmit}>
            <h1 align="center">TODO</h1>
            <input
                type="text"
                placeholder="Завдання"
                value={title}
                onChange={(e) => Title(e.target.value)} required/>
            <p><textarea
                placeholder="Опис"
                value={description}
                onChange={(e) => Description(e.target.value)} required>

            </textarea></p>
            <button type="submit">Додати завдання</button>
        </form>
    );
}