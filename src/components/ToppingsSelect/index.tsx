import { useState } from "react";
import ITopping from "../../models/Topping";
import Topping from "../Topping";
import './style.css';

interface IToppingsSelectProps {
  toppings: ITopping[]
}

const ToppingsSelect: React.FC<IToppingsSelectProps> = ({ toppings }) => {
  const [toppingSelects, setToppingSelects] = useState<ITopping[]>(toppings)

  const handleAmountChange = ( index: number, selected: boolean) => {
    const newToppings = [...toppingSelects]
    newToppings[index].selected = selected
    setToppingSelects(newToppings)
  }

  let toppingCount = 0
  toppingSelects.forEach(t => {t.selected ? toppingCount += 1 : toppingCount})

  let totalPrice = 0
  toppingSelects.forEach(t => {t.selected ? totalPrice += t.price : totalPrice})

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>Selected toppings: {toppingCount}, total price: {(Math.round(totalPrice * 100) / 100).toFixed(2)} Euro</p>

      <div className="toppings">
        {toppings.map((topping, index) => (
          <Topping topping={topping} key={topping.name} onAmountChange={selected => handleAmountChange(index, selected)}/>
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
