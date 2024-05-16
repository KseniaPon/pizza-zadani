import React from 'react';
import { useState } from 'react';
import Check from '../Check';
import ITopping from '../../models/Topping';
import './style.css';

interface IToppingProps {
  topping: ITopping;
}

const Topping : React.FC<IToppingProps> = ({ topping }) => {
  const [checked, setChecked] = useState<boolean>(false);
  const handleChange = (newChecked: boolean) => {
    setChecked(newChecked)
  }

  return (
    <div className="topping">
      <Check checked={checked} onChange={handleChange}/>
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
