import React from 'react'
import ProjectItem from './ProjectItem'

const Projects = () => {
	const attendanceMonitoringDesc = 'A Blockchain Enabled Attendance Monitoring system that uses face recognition to mark attendance.';
	const fakeNewsDesc = 'Fake News Detection system utilizing LSTM neural network to identify and stop the spread of false news.';
	const healthVaultDesc = 'A Blockchain based health records management system that gives complete control of a patients medical record to the patient.';
	const intrusionDetectionDesc = 'IoT enabled Intrusion Detection System that captures pictures of the intruder and sends them to the users telegram using a telegram bot.';
	const foodBuddyDesc = 'React application to discover a vast variety of dishes and how to make them'

	const attendanceMonitoringLink = 'https://github.com/Sam-822/Attendance-Monitoring-System';
	const fakeNewsLink = 'https://github.com/Sam-822/FAKE-NEWS-DETECTION';
	const healthVaultLink = '';
	const intrusionDetectionLink = 'https://github.com/Sam-822/Intrusion-Detection-System';
	const foodBuddyLink = 'https://foodbuddyabdul.netlify.app/'
	return (
		<>
			<div className="container my-5">
				<p className="fs-1 text-crimson">Projects</p>
				<div className="container d-flex justify-content-between my-5" style={{ flexWrap: 'wrap' }}>
					<ProjectItem img='AttendanceMonitoring.png' title='Attendance Monitoring System' description={attendanceMonitoringDesc} link={attendanceMonitoringLink} />
					<ProjectItem img='FakeNews.png' title='Fake News Detection' description={fakeNewsDesc} link={fakeNewsLink} />
					<ProjectItem img='IntrusionDetection.png' title='Intrusion Detection System' description={intrusionDetectionDesc} link={intrusionDetectionLink} />
					<ProjectItem img='FoodBuddy.png' title='FoodBuddy - Your culinary companion' description={foodBuddyDesc} link={foodBuddyLink} />
				</div>
			</div>
		</>
	)
}

export default Projects
