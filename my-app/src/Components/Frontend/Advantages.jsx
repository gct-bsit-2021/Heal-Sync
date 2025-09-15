import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import mindfulness from '../../Assets/mindfulness.png';
import meditation from '../../Assets/meditation.png';
import exercise from '../../Assets/exercise.png';
import './Advantage.css'
const Advantages = () => {
  return (
    <>
    <div className="car">
  <p className="pg">Advantage</p>
  <h2 className="hi">Why Choose Us</h2>
  <p className="pe">
    Hundreds of patient in Pakistan choose us. We offer effective HealSync in groups and individually.
  </p>
</div>

<div className="advantage">
  <Card  className="adv-card">
    <Card.Img variant='top' src={mindfulness} className="adv-img" />
    <Card.Body>
      <Card.Title className="adv-title">Vast Experience</Card.Title>
      <Card.Text className="adv-text">
        We can find an approach to each patient and solve even the most complicated and critical problems.
      </Card.Text>
    </Card.Body>
  </Card>

  <Card  className="adv-card">
    <Card.Img variant="top" src={meditation} className="adv-img" />
    <Card.Body>
      <Card.Title className="adv-title">New Techniques</Card.Title>
      <Card.Text className="adv-text">
        We are constantly mastering new effective treatment methods and upgrade our skills in HealSync.
      </Card.Text>
    </Card.Body>
  </Card>

  <Card  className="adv-card">
    <Card.Img variant="top" src={exercise} className="adv-img" />
    <Card.Body>
      <Card.Title className="adv-title">Any Problems</Card.Title>
      <Card.Text className="adv-text">
        We will help cope with depression and anxiety, solve problems in the family, relationships, and at work.
      </Card.Text>
    </Card.Body>
  </Card>
</div>

    </>
  )
}

export default Advantages
