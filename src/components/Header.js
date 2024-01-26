import {HashLink as Link} from 'react-router-hash-link'

const Header = () => {
  return (
    <div className='bg-header'>
          <h1 className='header-heading'>Arunraj A</h1>
          <ul className='header-list'>
            <Link to="#about" className='link' smooth><li className='header-item'>About</li></Link>
            <Link to="#projects" className='link' smooth><li className='header-item'>Projects</li></Link>
            <Link to="#contacts" className='link' smooth><li className='header-item'>Contacts</li></Link>
          </ul>
    </div>
  )
}

export default Header