import React from 'react';
import { css } from 'emotion';

const styles = css`
    background-color: #fff;
    padding: 80px 0;
    .bio {
      display: flex;
      flex-direction: column;
      .bio__image {
        width: 184px;
        height: 184px;
        margin: 0 auto;
        border-radius: 50%;
      }
      .bio__overview {
        max-width: 700px;
        margin: 0 auto;
        p {
          text-align: justify;
          margin: 20px;
        }
        h2 {
          margin: 20px;
        }
      }
      @media (min-width: 992px) {
        flex-direction: row;
        .bio__image {
          margin: 0;
        }
      }
    }
`;

function BioSection() {
  return (
    <section id="bio" className={styles}>
      <div className="container bio">
        <img src="/images/cv.jpg" alt="Collin Vossman" className="bio__image" />
        <div className="bio__overview">
          <h2>About Me</h2>
          <p>
          I'm a Software engineer in the entertainment and ticketing industry. Proficient in
          languages such as PHP and TypeScript as well as developing with frameworks
          such as Laravel, React, Vue. Passionate about automation, improving
          development workflows and collaborating to solve complex problems. 
          </p>
        </div>
      </div>
    </section>
  );
}
export default BioSection;
