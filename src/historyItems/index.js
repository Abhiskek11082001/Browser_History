import './index.css'

const HistoryItem = props => {
  const {historyItem, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem
  const onDeleteHistory = () => {
    deleteHistory(id)
  }
  return (
    <li className="history-item">
      <p className="time-accessed">{timeAccessed}</p>
      <div className="website-container">
        <div className="logo-container">
          <img src={logoUrl} className="logo" alt="domain logo" />
          <div className="domain-details-container">
            <p className="domain-title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
        <button
          type="button"
          className="delete-button"
          onClick={onDeleteHistory}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="delete"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
