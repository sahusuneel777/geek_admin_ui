import './index.css'

const Pagination = props => {
  const {details, onChangePage, isActive} = props
  const activeClass = isActive ? 'active-button' : 'button-item'

  const changePageNo = () => {
    onChangePage(details)
  }

  return (
    <button type="button" onClick={changePageNo} className={activeClass}>
      {details}
    </button>
  )
}

export default Pagination
