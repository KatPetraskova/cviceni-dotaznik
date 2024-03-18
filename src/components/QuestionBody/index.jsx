import { Icon } from '../Icon/index';
import './style.css';
import React, { useState } from 'react';
import { Option } from '../Option';

// 1. úkol: desktrurování komponenty: místo (props) použít {text, iconType}
export const QuestionBody = ({text, selectedAnswer}) => {

  // 2. úkol: pokud je ve stavu answered hodnota false, chceme, 
  // aby componenta QuestionBody měla ikonku symbolQuestion. 
  // Pokud je stav true, chceme, aby typ ikonky byl symbolTick:
  // const icon = answered ? "symbolTick" : "symbolQuestion";

  return (
    <div className="question__body">
      <p className="question__text">
        {text}
      </p>
      <Icon type={selectedAnswer} />
      
    </div>
  );
};
