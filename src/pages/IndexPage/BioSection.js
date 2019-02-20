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
          <p>
            I am a recent graduate of Kansas State University where I majored in Computer Science and minored in
            Leadership Studies.  I am in my second year as a developer and I'm currently a frontend developer at Intouch
            Solutions. I have a strong interest in working with APIs and enjoy both front end and back end development.
            In my free time I enjoy spending time with my wife and our puppy.
          </p>
        </div>
      </div>
    </section>
  );
}
export default BioSection;
