import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItems from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Nathan Nguyen</span>
              </p>
              <h2 className="about__heading">A freelance Photographer</h2>
              <div className="about__info">
                <PText>
                  I am from Kansas City, Missouri. A city that looks immaculate
                  every night. Since my high school years, I have grown to love
                  photography and photo editing. I would enjoy using PhotoShop -
                  on my MacBook Pro - and watching as a photo turned to art. I
                  also enjoy editing photos and videos that I have not taken. I
                  find it to be a fun challenge!
                  <br />
                  <br />
                  My goal is to make Kansas City look a little better every day.
                  My clients believe my skills have become better and better
                  with each month. I believe it is time for you and me to create
                  some some photos and videos that help the world see you as
                  are.
                </PText>
              </div>
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItems
                title="School"
                items={['Staley High School, Kansas City']}
              />
              <AboutInfoItems
                title="University"
                items={['University of Missouri - Kansas City']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItems
                title="FrontEnd"
                items={[
                  'Photography',
                  'Photo Editing',
                  'Cinematography',
                  'Video Editing',
                ]}
              />
              <AboutInfoItems
                title="Design Skills"
                items={['Photoshop', 'After Effects', 'Adobe Premier Pro']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItems
                title="2021"
                items={['Freelance Photos And Editing For Dylan Hood']}
              />
              <AboutInfoItems
                title="2021"
                items={['Freelance Photos For Drew Sallman ']}
              />
              <AboutInfoItems
                title="2021"
                items={['Freelance Photos For Kameron Hergins']}
              />
              <AboutInfoItems
                title="2021"
                items={['Freelance Photos and Editing For Richie']}
              />
              <AboutInfoItems
                title="2021"
                items={['Freelance Photos For Ella Petrie']}
              />
              <AboutInfoItems
                title="2021"
                items={['Freelance Photos For Kayln Ward']}
              />
              <AboutInfoItems
                title="2021"
                items={['Freelance Photos For Jayson Musembi']}
              />
              <AboutInfoItems
                title="2020"
                items={['Freelance Photos For Micah Sarmiento']}
              />
              <AboutInfoItems
                title="2020"
                items={['Freelance Photos For Ethan Munton']}
              />
              <AboutInfoItems
                title="2020"
                items={['Freelance Photos For Betty Trinh']}
              />
              <AboutInfoItems
                title="2020"
                items={['Freelance Photos For Mai Pham']}
              />
              <AboutInfoItems
                title="2020"
                items={['Freelance Photos For Brooke Duffet']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
