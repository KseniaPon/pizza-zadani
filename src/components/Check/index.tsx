import './style.css';

interface CheckProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}
const Check : React.FC<CheckProps> = ({checked, onChange})  => {
  //const [checked, setChecked] = useState(false);

  const handleClick = () => {
    onChange(!checked);
  };

  return (
    <button
      className="check"
      onClick={handleClick}
    >
      {checked ? '✓' : ''}
    </button>
  )
};

export default Check;
