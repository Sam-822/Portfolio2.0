import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
	const handleHomeClick = () => {
		window.scrollTo(top)
	}
	const handleProjectsClick = () => {
		window.scrollTo(0, 800)
	}
	return (
		<Navbar
			expand="lg"
			className="bg-body-tertiary "
			style={{ boxShadow: "0px 5px 20px #4a525b" }}
			fixed="top"
		>
			<Container>
				<Navbar.Brand href="/">
					<img
						src="/logo.svg"
						width="30"
						className="d-inline-block align-top"
						alt="React Bootstrap logo"
					/>
				</Navbar.Brand>
				<Navbar.Brand href="/">Abdul Samad Ansari</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto"></Nav>
					<Nav>
							<Nav.Link href='#home'>Home</Nav.Link>
							<Nav.Link href='#projects'>Projects</Nav.Link>
							<Nav.Link href='#about'>About</Nav.Link>
							<Nav.Link href='#contact'>Contact Me</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
