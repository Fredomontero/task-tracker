import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {

  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Food shopping',
        day: 'Feb 5th at 2:30',
        reminder: false
      },
      {
        id: 2,
        text: 'Learn React',
        day: 'Feb 4th at 6:00',
        reminder: true
      },
      {
        id: 3,
        text: 'Write a Book',
        day: 'May 1st at 10:30',
        reminder: true
      },
    ]
  );

  //Delete tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id != id));
  };

  //Toggle Reminder
  const toggleReminder = (id) => {
    console.log(id)
    setTasks(
      tasks.map((task) => task.ìd === id ? {...task, reminder: !task.reminder} : task)
    );
  };

  return (
    <div className="container">
      <Header/>
      { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No tasks to show'}
    </div>
  );
}

export default App;
