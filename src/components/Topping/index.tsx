import React from 'react';
import { useState } from 'react';
import Check from '../Check';
import ITopping from '../../models/Topping';
import './style.css';

interface IToppingProps {
  topping: ITopping;
  onAmountChange: (selected: boolean) => void;
}

const Topping : React.FC<IToppingProps> = ({ topping, onAmountChange }) => {
  //const [checked, setChecked] = useState<boolean>(false);
  // const handleChange = (newChecked: boolean) => {
  //   setChecked(newChecked)
  // }

  return (
    <div className="topping">
      <Check checked={topping.selected} onChange={onAmountChange}/>
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
