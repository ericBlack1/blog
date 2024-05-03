import React from 'react'

const Menu = () => {

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
    <div className="menu">
        <h1>Other posts you may like</h1>
        {posts.map((post) => (
            <div className="post" key={post.id}>
                <img src={post.img} alt=''/>
                <h2>{post.title}</h2>
                <button>Read More...</button>
            </div>
        ))}
    </div>
  )
}

export default Menu