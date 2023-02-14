import './AmountHeader.scss';

function AmountHeader({ type, value, onChange }) {

  const isError = () => value === "" ? "value-input__error" : ""; 

  return (
    <div className="value-header-wrapper">
      <h2 className="value-name">{type}:</h2>
      <div className="value-wrapper">
        <input className={`value-input ${isError()}`} value={value} onChange={onChange} />
        <span>GB</span>
      </div>
    </div>
  )
}

export default AmountHeader;