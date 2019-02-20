import React from 'react';

class EmploymentSection extends React.Component {
  render() {
    console.log('employment', this.props.employment);
    return (
      <div className="employment">
        employment section
      </div>
    );
  }
}
export default EmploymentSection;
