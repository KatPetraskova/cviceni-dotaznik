import { QuestionBody } from '../QuestionBody/index';
import { Option } from '../Option/index';
import './style.css';
import React, { useState } from 'react';


// 1. úkol: desktrurování komponenty: místo (props) použít {text}
export const Question = ({text}) => {

  // 2. úkol: vytvořte stav answered
  // const [answered, setAnswered] = useState(false);
  
  // 3. úkol
  const [answer, setAnswer] = useState("symbolQuestion");

  const handleSelected = (selectedAnswer) => {
    console.log(answer);
    setAnswer(selectedAnswer);
  };

  return (
    <div className="question">
      <QuestionBody 
        
        text={text}
        selectedAnswer={answer}
      />
      <div className="question__options">
        <Option type="smileyStrongYes" text="Souhlasím" answer={text} onSelected={handleSelected}/>
        <Option type="smileyYes" text="Spíše souhlasím" answer={text} onSelected={handleSelected}/>
        <Option type="smileyNeutral" text="Nevím" answer={text} onSelected={handleSelected}/>
        <Option type="smileyNo" text="Spíše nesouhlasím" answer={text} onSelected={handleSelected}/>
        <Option type="smileyStrongNo" text="Nesouhlasím" answer={text} onSelected={handleSelected}/>
      </div>
    </div>
  );
};
