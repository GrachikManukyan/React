export function List({ tasks, delet, toggleTaskStatus }) {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id} className="inputBox">
                    <h3
                        style={{
                            textDecoration: task.status === 'completed' ? 'line-through' : 'none'
                        } } align="center">
                        {task.title}
                    </h3>
                    <p align="center">Опис: {task.description}</p>
                    <p align="center">Статус: {task.status}</p>
                    <p className="sData" align="center">{task.createdAt}</p>
                    <p class="change"><button align="left" id="ChangeStatus" onClick={() => toggleTaskStatus(task.id)}>Відновити завдання</button></p>
                    <p class="delete"><button onClick={() => delet(task.id)}>Видалити завдання</button></p>
                </li>
            ))}
        </ul>
    );
}