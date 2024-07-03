import React from 'react'

const Logo = () => {
	return (
		<div className="cube-container mx-2">
        <div className="cube">
            <div className="face front"><img src="/logo.svg" height="100%" alt="" /></div>
            <div className="face back"><img src="/logo.svg" height="100%" alt="" /></div>
            <div className="face left"><img src="/logo.svg" height="100%" alt="" /></div>
            <div className="face right"><img src="/logo.svg" height="100%" alt="" /></div>
            <div className="face top"><img src="/logo.svg" height="100%" alt="" /></div>
            <div className="face bottom"><img src="/logo.svg" height="100%" alt="" /></div>
        </div>
    </div>
	)
}

export default Logo
