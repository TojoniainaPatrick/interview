import React, { useState } from 'react';

const InterviewEvaluationItem = ({ critere, onNoteClick }) => {
  const { evaID, evaName, evaMaxValue, interEvaValue } = critere;
  const [noteSelectionnee, setNoteSelectionnee] = useState(interEvaValue);

  const handleClick = note => {
    // Mise à jour de la note sélectionnée dans l'état local
    setNoteSelectionnee(note);

    // Appeler la fonction fournie par le parent avec l'identifiant du critère et la note
    onNoteClick(note);
  };

  return (
    <div key={evaID} className="interview-evaluation-item">
      <h6>{evaName}</h6>
      <div className="grad-container">
        {[...Array(parseInt(evaMaxValue)).keys()].map(note => (
          <span
            key={note + 1}
            onClick={() => handleClick(note + 1)}
            className={(note+1) === noteSelectionnee ? 'grad-item focus' : 'grad-item blur'}
          >
            {note + 1}
          </span>
        ))}
      </div>
    </div>
  );
};

export default InterviewEvaluationItem;
