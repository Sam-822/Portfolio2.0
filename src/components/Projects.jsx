import React from 'react'
import ProjectItem from './ProjectItem'

const Projects = () => {
	const attendanceMonitoringDesc = 'A Blockchain Enabled Attendance Monitoring system that uses face recognition to mark attendance.';
	const fakeNewsDesc = 'Fake News Detection system utilizing LSTM neural network to identify and stop the spread of false news.';
	const intrusionDetectionDesc = 'IoT enabled Intrusion Detection System that captures pictures of the intruder and sends them to the users telegram using a telegram bot.';
	const foodBuddyDesc = 'React application to discover a vast variety of dishes and how to make them'

	const attendanceMonitoringLink = 'https://github.com/Sam-822/Attendance-Monitoring-System';
	const fakeNewsLink = 'https://github.com/Sam-822/FAKE-NEWS-DETECTION';
	const intrusionDetectionLink = 'https://github.com/Sam-822/Intrusion-Detection-System';
	const foodBuddyLink = 'https://foodbuddyabdul.netlify.app/'
	return (
		<div className="ignore-nav">
			<div className="container my-3">
				<p id='project-box' className="fs-1 text-crimson">Projects</p>
				<div id='project-items-container' className="container d-grid justify-content-center my-3" style={{gridTemplateColumns:'auto auto'}}>
					<ProjectItem img='AttendanceMonitoring.png' title='Attendance Monitoring System' description={attendanceMonitoringDesc} link={attendanceMonitoringLink} buttonText='undeploy' />
					<ProjectItem img='FakeNews.png' title='Fake News Detection' description={fakeNewsDesc} link={fakeNewsLink} buttonText='undeploy' />
					<ProjectItem img='IntrusionDetection.png' title='Intrusion Detection System' description={intrusionDetectionDesc} link={intrusionDetectionLink} buttonText='undeploy' />
					<ProjectItem img='FoodBuddy.png' title='FoodBuddy - Your culinary companion' description={foodBuddyDesc} link={foodBuddyLink} buttonText='deploy' />
				</div>
			</div>
		</div>
	)
}

export default Projects
