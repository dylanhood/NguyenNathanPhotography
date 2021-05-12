import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Nathan Nguyen</h1>
          <PText>
            As a freelance photographer from Kansas City, Missouri. I enjoy
            enjoy taking photos that bring confidence to you and others in you.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                link: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                link: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                link: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                link: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+8163056937',
                link: 'tel:+8163056937',
              },
              {
                title: 'natenguyen2002@gmail.com',
                link: 'mailto:natenguyen2002@gmail.com',
              },
              {
                title: 'Kansas City, Missouri, United States',
                link:
                  'https://www.google.com/maps/place/Kansas+City,+MO/@39.0915821,-94.8565942,10z/data=!3m1!4b1!4m5!3m4!1s0x87c0f75eafe99997:0x558525e66aaa51a2!8m2!3d39.0997265!4d-94.5785667',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'Instagram Personal Page',
                link: 'https://www.instagram.com/nguyen.nathan/',
              },
              {
                title: 'Snapchat',
                link: 'nathan.nguyen55',
              },
              {
                title: 'Instagram Photography',
                link: 'https://www.instagram.com/nguyen.nathanpt2/',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2021 - Nathan Nguyen | Developed By{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://dylanhoodportfoliowebsite.web.app/"
            >
              Dylan Hood
            </a>{' '}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
