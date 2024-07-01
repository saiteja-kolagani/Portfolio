import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'

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
              imgPath="https://res.cloudinary.com/dmy1fpyxm/image/upload/v1719835039/Screenshot_2024-07-01_172357_zsyyxg.png"
              isBlog={false}
              title="EasyFy"
              description="Created the Easyfy AI Gen Chatbot during a mega workshop organized by NXT Wave. Utilized technologies including Google Colab, LangChain, Gradio, PlayHt, Hugging Face, and OpenAI to develop this advanced chatbot."
              demoLink="https://easyfy.ccbp.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dmy1fpyxm/image/upload/v1719834390/Screenshot_2024-07-01_171547_asbf9z.png"
              isBlog={false}
              title="Emoji Game"
              description="Created an engaging Emoji Game with dynamic score tracking. Clicking an emoji increments the Score if it hasn't been clicked before. A 'Won Game' view appears if all emojis are clicked once, while a duplicate click triggers a 'Lose Game' view. The Top Score updates with higher scores, and a 'Play Again' button resets the Score but retains the Top Score."
              ghLink="https://github.com/saiteja-kolagani/CP18_REACT_Emoji-Game.git"
              demoLink="https://emojigames19.ccbp.tech/"
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
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
