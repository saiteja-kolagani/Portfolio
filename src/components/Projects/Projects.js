import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'
import leaf from '../../Assets/Projects/leaf.png'
import emotion from '../../Assets/Projects/emotion.png'
import editor from '../../Assets/Projects/codeEditor.png'
import chatify from '../../Assets/Projects/chatify.png'
import suicide from '../../Assets/Projects/suicide.png'
import bitsOfCode from '../../Assets/Projects/blog.png'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{color: 'white'}}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{justifyContent: 'center', paddingBottom: '10px'}}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dmy1fpyxm/image/upload/v1719832345/Screenshot_2024-07-01_164042_cgtfyg.png"
              isBlog={false}
              title="Never Settle"
              description="Developed an e-commerce store that achieved a 40% increase in user engagement. Integrated essential features such as product browsing, cart management, and user authentication. Focused on user-centric design to enhance user interaction and overall experience."
              ghLink="https://github.com/saiteja-kolagani/Never-Settle-Upgrade-Yourself-.git"
              demoLink="https://neversettle.ccbp.tech/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dmy1fpyxm/image/upload/v1719832626/Screenshot_2024-07-01_164616_nbw3vv.png"
              isBlog={false}
              title="Movies APP (Amazon Prime Clone)"
              description="Developed a Prime Video clone using React, React Slick, React Popup, and React Video Player. Utilized React Slick for dynamic and responsive carousels, implemented React Popup for interactive modal dialogs, and incorporated React Video Player for seamless video streaming. Demonstrated proficiency in integrating third-party packages to enhance functionality and user experience."
              ghLink="https://github.com/saiteja-kolagani/CP40-Prime-Video.git"
              demoLink="https://primevideosai19.ccbp.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dmy1fpyxm/image/upload/v1719832852/Screenshot_2024-07-01_164818_sfywzx.png"
              isBlog={false}
              title="WordLight (Wikipedia Clone)"
              description="Implemented local storage to retain and display the user's search history, enhancing personalized browsing. Integrated a theme switcher for effortless toggling between light mode and dark mode, providing a visually comfortable experience."
              demoLink="https://wordlight.ccbp.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dmy1fpyxm/image/upload/v1719833300/Screenshot_2024-07-01_165606_ue3dgg.png"
              isBlog={false}
              title="IPL Dashboard"
              description="Created an IPL Dashboard based on 2020 data, displaying scorecards for each team against their opponents. This project provides comprehensive insights into team performances, enhancing the understanding of match outcomes and team strategies."
              ghLink="https://github.com/saiteja-kolagani/ASSIGNMENT-4-IPL-Dashboard-App-REACT.git"
              demoLink="https://ipldashboards19.ccbp.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
