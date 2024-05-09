import React from 'react'
import {Link} from "react-router-dom"
import Edit from "../img/edit.png"
import Delete from "../img/delete.png"
import CD from "../img/cd.jpeg"
import Profile from "../img/pro.jpeg"
import Menu from "../Components/Menu"

const Single = () => {
  return (
	<div className="single">
		<div className="content">
			<img src={CD} alt="" />
			<div className="user">
				<img src={Profile} alt=''/>
				<div className="info">
					<span>John</span>
					<p>Posted 2 days ago</p>
				</div>
				<div className="edit">
					<Link to={`/write?edit=2`}>
						<img src={Edit} alt=''/>
					</Link>
					<img src={Delete} alt=''/>
				</div>
			</div>
			<h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam harum consequuntur voluptatem magnam, vitae, illum nostrum suscipit sint placeat, delectus vel voluptas vero recusandae laborum. Perspiciatis fuga autem unde veniam?</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ullam ratione perspiciatis eos aliquam quas error totam natus, assumenda, architecto nemo illum porro praesentium eius adipisci officia voluptate sunt inventore.</p>
			<p>Libero, possimus iusto quo aliquid voluptates placeat debitis. Repellendus voluptatum repudiandae pariatur perspiciatis iusto, ratione quas itaque enim a numquam, iste laboriosam impedit facilis accusamus provident autem incidunt animi eius?
			Eos eveniet repudiandae doloremque et, est, minus architecto, recusandae sint corporis natus blanditiis. Laborum, a! Commodi error enim ducimus inventore. Sequi omnis illum rerum nemo facilis assumenda distinctio, non earum.
			Quibusdam, repellendus. Enim, minus voluptatem provident nobis aperiam dolore? Perspiciatis ab molestiae perferendis accusamus, iste corrupti praesentium! Fugiat porro tenetur id iure, ratione iste, quaerat dolorum eveniet possimus, nam animi?
			Sit ullam aperiam, natus possimus accusantium exercitationem in, officia voluptatibus tenetur totam, consequuntur illo fugiat reiciendis? Officiis cupiditate adipisci, fugiat iure nesciunt minus quo odit. Id asperiores voluptas tempore delectus.
			Non ullam laborum quos repellendus nostrum quas accusantium totam qui aut quisquam, asperiores sed? Suscipit consequuntur iusto enim ab molestias porro earum quia perspiciatis accusamus obcaecati harum omnis, beatae cupiditate?
			Molestiae assumenda repellendus autem doloribus perspiciatis libero, deleniti debitis. Natus ab quia dolore omnis esse molestiae, vero tenetur illo voluptatum animi voluptate ipsum, similique necessitatibus quaerat dolor, iste voluptates magnam?
			Dolorum dolore magnam deserunt assumenda id vero temporibus dignissimos. Tenetur quam cum obcaecati deleniti praesentium! Modi sapiente nihil esse, facere, harum tempore at itaque eveniet, accusamus libero pariatur! Ea, quidem.
			luptatibus voluptas esse consequatur laudantium minima vitae. Voluptates, eligendi adipisci magnam, quod dolorem saepe deleniti incidunt quae minus nesciunt aperiam? Neque qui, doloribus corporis aut vel repellendus nulla hic.</p>
		</div>
		<Menu />
	</div>
  )
}

export default Single