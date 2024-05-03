import React from 'react'
import {Link} from 'react-router-dom'
import Logo from "../img/d.jpg"

const Navbar = () => {
  return (
    <div className="navbar">
		<div className="container">
			<div className="logo">
				<img src={Logo} alt=''/>
			</div>
			<div className="links">
				<Link className='link' to="/?cat=weather">
					<h6>WEATHER</h6>
				</Link>
				<Link className='link' to="/?cat=others">
					<h6>OTHERS</h6>
				</Link>
				<span>Person</span>
				<span>View Weather</span>
				<span className='write'>
					<Link className='link' to="/write">Write</Link>
				</span>
			</div>
		</div>
    </div>
  )
}

export default Navbar