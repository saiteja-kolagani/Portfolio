import React from 'react'
import Card from 'react-bootstrap/Card'
import {ImPointRight} from 'react-icons/im'

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{textAlign: 'justify'}}>
            Hi Everyone, I am <span className="purple">Sai Teja Kolagani </span>
            from <span className="purple"> Tanuku, India.</span>
            <br />
            Currently, I am learning MERN Stack Development through Nxtwave's
            4.0 Academic Program, with plans to dive into Java Full Stack
            development.
            <br />
            I have completed my B.Tech in Electrical & Electronics Engineering
            with a 71% score. My passion for Computer Science drives me to
            explore digitalization technologies.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard
