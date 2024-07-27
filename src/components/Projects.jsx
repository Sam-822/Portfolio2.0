import React from 'react'
import ProjectItem from './ProjectItem'

const Projects = () => {
	const attendanceMonitoringDesc = 'A Blockchain Enabled Attendance Monitoring system that uses face recognition to mark attendance.';
	const fakeNewsDesc = 'Fake News Detection system utilizing LSTM neural network to identify and stop the spread of false news.';
	const shopBuddyDesc = 'An E-Commerce website created using next.js which gets data from fakestoreapi.com.';
	const foodBuddyDesc = 'React application to discover a vast variety of dishes and how to make them pulled from themealdb.com.'
	const bookPalaceDesc = 'Book Store app made using Next.Js to explore books extracted from books.google.com api.'

	const attendanceMonitoringLink = 'https://github.com/Sam-822/Attendance-Monitoring-System';
	const fakeNewsLink = 'https://github.com/Sam-822/FAKE-NEWS-DETECTION';
	const shopBuddyLink = 'https://e-commerce-smoky-rho.vercel.app/';
	const foodBuddyLink = 'https://foodbuddyabdul.netlify.app/'
	const bookPalaceLink = 'https://bookstore-sooty-beta.vercel.app/'
	return (
		<div className="ignore-nav">
			<div className="container my-3">
				<p id='project-box' className="fs-1 text-crimson">Projects</p>
				<div id='project-items-container' className="container d-grid justify-content-center my-3" style={{gridTemplateColumns:'auto auto'}}>
					<ProjectItem img='/BookPalace.png' title='Books Palace - The perfect place to find books to read' description={bookPalaceDesc} link={bookPalaceLink} buttonText='deploy' />
					<ProjectItem img='/e-commerce.png' title='ShopBuddy- E-Commerce template' description={shopBuddyDesc} link={shopBuddyLink} buttonText='deploy' />
					<ProjectItem img='/FoodBuddy.png' title='FoodBuddy - Your culinary companion' description={foodBuddyDesc} link={foodBuddyLink} buttonText='deploy' />
					<ProjectItem img='/AttendanceMonitoring.png' title='Attendance Monitoring System' description={attendanceMonitoringDesc} link={attendanceMonitoringLink} buttonText='undeploy' />
					<ProjectItem img='/FakeNews.png' title='Fake News Detection' description={fakeNewsDesc} link={fakeNewsLink} buttonText='undeploy' />
				</div>
			</div>
		</div>
	)
}

export default Projects
