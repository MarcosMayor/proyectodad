import React, { useState } from 'react';
import Dashboard from './Dashboard';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const TaskPlanner = () => {
  const [tasks, setTasks] = useState([]);
  const { transcript, resetTranscript } = useSpeechRecognition();

  const addTask = () => {
    if (transcript.trim() !== '') {
      setTasks([...tasks, transcript]);
      resetTranscript();
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <>
      <Dashboard />
      <button onClick={addTask}>Agregar Tarea por Voz</button>
      <button onClick={SpeechRecognition.startListening}>Iniciar Reconocimiento de Voz</button>
      <button onClick={SpeechRecognition.stopListening}>Detener Reconocimiento de Voz</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <button onClick={() => deleteTask(index)}>❌</button> {task}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskPlanner;
