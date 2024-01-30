import React, { useState } from 'react';

const QnA = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const askQuestion = () => {
    // Aquí implementarías la lógica para buscar la respuesta a la pregunta
    // Podrías tener un conjunto de preguntas y respuestas predefinidas
    // O podrías consultar una base de datos o una API externa
    // Por simplicidad, aquí asumiremos respuestas predefinidas
    switch (question.toLowerCase()) {
      case '¿cuál es la capital de Francia?':
        setAnswer('La capital de Francia es París.');
        break;
      // Agrega más casos según sea necesario
      default:
        setAnswer('Lo siento, no entiendo la pregunta.');
        break;
    }
    setQuestion('');
  };

  return (
    <div>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Haz una pregunta"
      />
      <button onClick={askQuestion}>Preguntar</button>
      <p>Respuesta: {answer}</p>
    </div>
  );
};

export default QnA;
