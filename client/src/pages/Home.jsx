import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
	// const [posts, setPosts] = useState([])

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		try {
	// 			const res = await axios.get("/posts")
	// 			setPosts(res.data)
	// 		} catch (err) {
	// 			console.log(err)
	// 		}
	// 	}
	// 	fetchData();
	// }, [])

	const posts = [
		{
			id: 1,
			title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
			des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut accusantium quaerat sint aperiam sit ratione! Quis minima, mollitia facere perspiciatis molestiae hic doloremque ipsa modi amet ut architecto animi officia.",
			img: "../src/img/fr/Apple.png"
		},
		{
			id: 2,
			title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
			des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut accusantium quaerat sint aperiam sit ratione! Quis minima, mollitia facere perspiciatis molestiae hic doloremque ipsa modi amet ut architecto animi officia.",
			img: "../src/img/fr/Banana.png"
		},
		{
			id: 3,
			title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
			des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut accusantium quaerat sint aperiam sit ratione! Quis minima, mollitia facere perspiciatis molestiae hic doloremque ipsa modi amet ut architecto animi officia.",
			img: "../src/img/fr/Cocoa.png"
		},
		{
			id: 4,
			title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
			des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut accusantium quaerat sint aperiam sit ratione! Quis minima, mollitia facere perspiciatis molestiae hic doloremque ipsa modi amet ut architecto animi officia.",
			img: "../src/img/fr/Damson.png"
		}
	]

	return (
		<div className="home">
			<div className="posts">
				{posts.map((post) => (
					<div key={post.id} className="post">
						<div className="img">
							<img src={post.img} alt=''/>
						</div>
						<div className="content">
							<Link className="link" to={`/post/${post.id}`}>
								<h1>{post.title}</h1>
							</Link>
							<p>{post.des}</p>
							<button>Read More...</button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Home