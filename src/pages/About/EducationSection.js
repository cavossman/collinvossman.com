import React from 'react';

class EducationSection extends React.Component {
  render() {
    console.log('employment', this.props.education);
    return (
      <div className="employment">
        employment section
      </div>
    );
  }
}
export default EducationSection;
