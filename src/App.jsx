import React, { useState } from 'react';
import {CreateTask} from "./utils/CreateTask.jsx";
import {List} from "./utils/List.jsx";

function App() {
    const [tasks, Tasks] = useState([]);

    const add = (Task) => {
        Tasks([Task, ...tasks]);
    };

    const delet = (Id) => {
        Tasks(tasks.filter((task) => task.id !== Id));
    };

    const toggleTaskStatus = (Id) => {
        const button = document.getElementById("ChangeStatus");
        button.textContent === "Відновити завдання" ? button.textContent="Завершити завдання" : button.textContent="Відновити завдання"
        Tasks(
            tasks.map((task) =>
                task.id === Id
                    ? { ...task, status: task.status === 'completed' ? 'not completed' : 'completed' }
                    : task
            )
        );
    };

    const sortedTasks = tasks.sort((a, b) => b.createdAt - a.createdAt);
    return (
        <table>
            <tr>
                <td valign="top" width={"25%"} align='center'><CreateTask add={add} /></td>
                <td><List tasks={sortedTasks} delet={delet} toggleTaskStatus={toggleTaskStatus} /></td>
            </tr>
        </table>
    );
}

export default App;
