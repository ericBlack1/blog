import React from 'react'
import {Link} from 'react-router-dom'
import Logo from "../img/d.jpg"

const Navbar = () => {
  return (
    <div className="navbar">
		<div className="container">
			<div className="logo">
				<Link to="/">
					<img src={Logo} alt=''/>
				</Link>
			</div>
			<div className="links">
				<Link className='link' to="/?cat=weather">
					<h6>WEATHER</h6>
				</Link>
				<Link className='link' to="/?cat=climate">
					<h6>CLIMATE</h6>
				</Link>
				<Link className='link' to="/?cat=atm-con">
					<h6>ATM-CON</h6>
				</Link>
				<Link className='link' to="/?cat=others">
					<h6>OTHERS</h6>
				</Link>
				<span>John</span>
				<span>Logout</span>
				<span className='write'>
					<Link className='link' to="/write">Write</Link>
				</span>
			</div>
		</div>
    </div>
  )
}

export default Navbar