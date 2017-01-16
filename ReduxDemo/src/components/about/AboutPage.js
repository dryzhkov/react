import React from 'react';
import { Link } from 'react-router';

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h2 className="alt-header">About</h2>
        <p>
          This app uses React, Redux, React Router and a variety of other helpful libraries.
        </p>
        <p>
          <Link to="/badlink">Click this bad link</Link> to see the 404 page.
        </p>
      </div>
    );
  }
}

export default AboutPage;