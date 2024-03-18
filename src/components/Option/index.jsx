import { Icon } from '../Icon/index';
import './style.css';

// 1. úkol: desktrurování komponenty: místo (props) použít {type, text}
export const Option = ({type, text, onSelected}) => {

  // 2. úkol: přidejte na div s třidou option posluchač události onClick
  /*const handleClick = () => {
    console.log(text);
  };
  */

  // 2. úkol: prop s názvem onSelected. V této prop očekáváme funkci.
  const handleClick = () => {
    if (onSelected) {
      onSelected(type);
    }}

  return (
    <div className="option" onClick={handleClick}>
      <Icon type={type} />
      <div>{text}</div>
    </div>
  );
};
