import React from 'react';
import EmploymentCard from './EmploymentCard';
import { css } from 'emotion';

const styles = css`
  padding-bottom: 15px;

  .awards-heading {
    color: #fff;
    text-align: center;
    lettAwardsg: 0.9px;
  }
`;

class AwardsSection extends React.Component {
  render() {
    const { awards } = this.props;
    return (
      <div className={styles}>
        <h3 className="awards-heading">AWARDS</h3>
        {
          awards &&
          awards.map(job => {
            return (
              <EmploymentCard { ...job } key={ job.title } />
            )
          })
        }
      </div>
    );
  }
}
export default AwardsSection;
