import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title},onAdd) => {

  // const onClick = (e) => {
  //   console.log(e);
  // }

  

  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color='green' text='Add' onClick={onAdd}></Button>
        <Button color='black' text='Details' ></Button>
    </header>

    
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
// const headingStyle = {
//     color: 'blue', 
//     backgroundColor:'green'
// }


export default Header