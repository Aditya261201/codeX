import './App.css'
import React, { useState } from 'react'
import Editor from './components/Editor'
import Navbar from './components/Navbar'

function App() {

	const [html, sethtml] = useState('');
	const [css, setcss] = useState('');
	const [js, setjs] = useState('');


	const srcDoc = `
        <html>
			<body>${html}</body>
			<style>${css}</style>
			<script>${js}</script>
		</html>`


	return (
		<>
			<Navbar />
			<div className="top-pane">
				<Editor displayname="HTML" language="html" value={html} onChange={sethtml} />
				<Editor displayname="CSS" language="css" value={css} onChange={setcss} />
				<Editor displayname="JS" language="js" value={js} onChange={setjs} />
			</div>
			<div className="pane">
				<iframe
					srcDoc={srcDoc}
					title='output'
					sandbox='allow-scripts'
					width="100%"
					height="100%"
				/>
			</div>
		</>
	)
}

export default App
