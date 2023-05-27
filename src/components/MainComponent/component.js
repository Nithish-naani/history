import './component.css'

const MainComponent = props => {
  const {obj, func} = props
  const {domainUrl, timeAccessed, id, logoUrl, title} = obj

  const nithish = () => {
    func(id)
  }

  return (
    <li className="main">
      <p>{timeAccessed}</p>
      <div className="super">
        <div className="sub">
          <img src={logoUrl} alt="domain logo" className="poo" />
          <p className="para">{title}</p>
          <p>{domainUrl}</p>
        </div>
        <button
          className="bt"
          type="submit"
          data-testid="delete"
          onClick={nithish}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default MainComponent
