import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import attendance from '../assets/AttendanceMonitoring.png'
import fakeNews from '../assets/FakeNews.png'
import healthVault from '../assets/HealthVault.png'
import intrusion from '../assets/IntrusionDetection.png'
import foodBuddy from '../assets/FoodBuddy.png'

const ProjectItem = (props) => {
	const { img, title, description, link } = props;
	let image = ''
  if(img === 'AttendanceMonitoring.png'){
		image = attendance
	}
	else if(img === 'FakeNews.png'){
		image = fakeNews
	}
	else if(img === 'HealthVault.png'){
		image = healthVault
	}else if(img ==='IntrusionDetection.png'){
		image = intrusion
	}else if(img ==='FoodBuddy.png'){
		image = foodBuddy
	}
	return (
		<Card className='mx-2 my-4' style={{ width: '32rem', height:'fit-content' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary" href={link} target='_blank' className='stretched-link'>Visit Project</Button>
      </Card.Body>
    </Card>
	)
}

export default ProjectItem
