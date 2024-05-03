import React, { useState } from 'react'
// import ReactQuill from 'react-quill'
// import 'react-quill/dist/quill.snow.css'

const Write = () => {
	const [value, setValue] = useState('');
  return (
    <div className="add">
		<div className="content">
			<input type='text' placeholder='Title' />
			<div className="editorContainer">
				{/* <ReactQuill theme="snow" value={value} onChange={setValue} />; */}
			</div>
		</div>
		<div className="menu">
			<div className="item">
				<h1>Publish</h1>
				<span>
					<b>Status: </b> Draft
				</span>
				<span>
					<b>Visisbility: </b> Public
				</span>
				<input style={{display: "none"}} type='file' name='' id='file' />
				<label className='file' htmlFor="file">Upload Image</label>
				<div className="buttons">
					<button>Save as a draft</button>
					<button>Update</button>
				</div>
			</div>
			<div className="item">
				<h1>Category</h1>
				<div className="cat">
					<input type='radio' name='cat' value='weather' id='weather'/>
					<label htmlFor="weather">Weather</label>
				</div>
				<div className="cat">
					<input type='radio' name='cat' value='others' id='others'/>
					<label htmlFor="others">Climate</label>
				</div>
				<div className="cat">
					<input type='radio' name='cat' value='others' id='others'/>
					<label htmlFor="others">Atmosphere</label>
				</div>
				<div className="cat">
					<input type='radio' name='cat' value='others' id='others'/>
					<label htmlFor="others">Others</label>
				</div>
			</div>
		</div>
    </div>
  )
}

export default Write