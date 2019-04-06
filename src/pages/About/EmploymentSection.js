import React from 'react';
import EmploymentCard from './EmploymentCard';
import { css } from 'emotion';

const styles = css`
  padding-bottom: 15px;

  .employment-heading {
    color: #fff;
    text-align: center;
    letter-spacing: 0.9px;
  }
`;

class EmploymentSection extends React.Component {
  render() {
    const { employment } = this.props;
    return (
      <div className={styles}>
        <h3 className="employment-heading">EMPLOYMENT</h3>
        {
          employment &&
          employment.map(job => {
            return (
              <EmploymentCard { ...job } key={ job.title } />
            )
          })
        }
      </div>
    );
  }
}
export default EmploymentSection;
