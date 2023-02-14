import Input from './Input';

import './Inputs.scss';

function Inputs() {
  return (
    <div className="inputs-wrapper">
      <Input type="Storage" />
      <Input type="Transfer" />
    </div>
  )
}

export default Inputs;