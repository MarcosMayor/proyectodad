import React, { useState } from 'react';
import Dashboard from './Dashboard';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const QnA = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const { transcript, resetTranscript } = useSpeechRecognition();

  const questions = [
    '¿Cuál es la capital de España?',
    '¿Cuanto son 2 mas 2 ?',
    '¿Un perro es lo mismo que un gato?'
  ];

  const handleAnswer = () => {
    const currentQuestionIndex = questions.findIndex(q => q.toLowerCase() === question.toLowerCase());
    if (currentQuestionIndex !== -1) {
      const correctAnswers = [
        'madrid', 
        'cuatro',
        'no'
      ];

      const userAnswer = transcript.trim().toLowerCase();
      if (correctAnswers[currentQuestionIndex] === userAnswer) {
        setAnswer('¡Respuesta correcta!');
      } else {
        setAnswer('Respuesta incorrecta. Inténtalo de nuevo.');
      }
    } else {
      setAnswer('Pregunta no reconocida.');
    }
    resetTranscript();
  };

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true });
    resetTranscript();
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
    handleAnswer();
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <div>El reconocimiento de voz no es compatible con su navegador.</div>;
  }

  return (
    <>
      <Dashboard />
      <p>Pregunta: {question}</p>
      <button onClick={startListening}>Escuchar respuesta</button>
      <button onClick={stopListening}>Detener escucha</button>
      <button onClick={() => setQuestion(questions[Math.floor(Math.random() * questions.length)])}>
        Mostrar nueva pregunta
      </button>
      <button onClick={resetTranscript}>Limpiar</button>
      <p>Tu respuesta: {transcript}</p>
      <p>Respuesta: {answer}</p>
    </>
  );
};

export default QnA;
