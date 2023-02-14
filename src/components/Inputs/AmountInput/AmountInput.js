import './AmountInput.scss';

function AmountInput({ value, onChange }) {

  return (
    <div className="amount-input">
      <input
        className="input-range"
        type="range"
        min="0"
        max="1000"
        step="1"
        value={value}
        onChange={onChange}
      />
      <div className="input-labels">
        <div>0</div>
        <div>1000</div>
      </div>
    </div>
  );
}

export default AmountInput;