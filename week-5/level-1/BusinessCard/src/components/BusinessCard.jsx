import React from 'react';
import PropTypes from 'prop-types';

export function BusinessCard(props) {
  return (
    <div style={styles.card}>
      <h2 style={styles.name}>{props.name}</h2>
      <p style={styles.description}>{props.description}</p>
      <h3 style={styles.interestsHeader}>Interests</h3>
      <ul style={styles.interestsList}>
        {props.interests.map((interest) => (
          <li key={interest} style={styles.interestItem}>
            {interest}
          </li>
        ))}
      </ul>
      <div style={styles.socialLinks}>
        <a href={props.linkedin} target="_blank" rel="noopener noreferrer" style={{ ...styles.link, marginLeft: '0px' }}>
          LinkedIn
        </a>
        <br />
        <a href={props.twitter} target="_blank" rel="noopener noreferrer" style={styles.link}>
          Twitter
        </a>
        <a href={props.github} target="_blank" rel="noopener noreferrer" style={styles.link}>
          GitHub
        </a>
        {props.otherSocialMedia && (
          <a href={props.otherSocialMedia.url} target="_blank" rel="noopener noreferrer" style={styles.link}>
            {props.otherSocialMedia.label}
          </a>
        )}
      </div>
    </div>
  );
}

BusinessCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  interests: PropTypes.arrayOf(PropTypes.string).isRequired,
  linkedin: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  otherSocialMedia: PropTypes.shape({
    label: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

  const styles = {
    card: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      margin: '20px',
      width: '350px',
      height: '260px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f8f9fa'
    },
    name: {
      fontSize: '24px',
      marginBottom: '10px',
      color: '#333'
    },
    description: {
      fontSize: '16px',
      color: '#555',
      marginBottom: '15px'
    },
    interestsHeader: {
        fontSize: '18px',
        marginBottom: '10px',
        color: '#333'
    },
    interestsList: {
        listStyle: 'none',
        padding: 0,
        margin: 0
    },
    interestItem: {
        fontSize: '14px',
        marginBottom: '5px',
        color: '#555'
    },
    socialLinks: {
        display: 'flex',
        marginBottom: '15px'
    },
    link: {
        textDecoration: 'none',
        color: '#fff', // Text color
        padding: '10px 15px', // Padding for the button
        borderRadius: '5px', // Border radius for rounded corners
        backgroundColor: '#007BFF', // Background color for the button
        display: 'inline-block', // Display as inline-block to be side by side
        margin: '10px', // Margin between buttons
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' // Box shadow for a subtle lift
    }
  }
