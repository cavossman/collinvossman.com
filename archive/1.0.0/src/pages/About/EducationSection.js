import React from 'react';
import EmploymentCard from './EmploymentCard';
import { css } from 'emotion';

const styles = css`
  padding-bottom: 15px;

  .education-heading {
    color: #fff;
    text-align: center;
    letter-spacing: 0.9px;
  }
`;

class EducationSection extends React.Component {
  render() {
    const { education } = this.props;
    return (
      <div className={styles}>
        <h3 className="education-heading">EDUCATION</h3>
        {
          education &&
          education.map(job => {
            return (
              <EmploymentCard { ...job } key={ job.title } />
            )
          })
        }
      </div>
    );
  }
}
export default EducationSection;
