import './index.css'

const DenominationItem = props => {
  const {value, func} = props
  const check = () => func(value)
  return (
    <li className="list">
      <button className="button" type="button" onClick={check}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
