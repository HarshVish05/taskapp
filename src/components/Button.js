import PropTypes from 'prop-types'
const Button = ({color, text, onClick,greenClick}) => {

  return (
    <button onClick={onClick} greenClick={greenClick} style={{backgroundColor: color}}
     className='btn'>{text}
    </button>
  )
}

Button.defaultProps = {
    color: 'blue'
}


Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}
export default Button