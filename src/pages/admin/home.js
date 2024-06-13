import React from 'react';
import i1 from '../../assets/i1.jpeg';
import i2 from '../../assets/i2.jpeg';
import i3 from '../../assets/i3.jpeg';
import i4 from '../../assets/i4.jpeg';

const items = [
  { src: i1, title: 'Image 1' },
  { src: i2, title: 'Image 2' },
  { src: i3, title: 'Image 3' },
  { src: i4, title: 'Image 4' },
  { src: i1, title: 'Image 5' },
  { src: i2, title: 'Image 6' },
  { src: i3, title: 'Image 7' },
];

const Home = () => {
  return (
    <div>
      <h1 style={styles.heading}>Let's Explore</h1>
      <div style={styles.masonry}>
        {items.map((item, index) => (
          <div key={index} style={styles.card}>
            <img src={item.src} alt={item.title} style={styles.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  heading: {
    textAlign: 'center',
    margin: '20px 0',
  },
  masonry: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    padding: '10px',
    justifyContent: 'center'
  },
  card: {
    width: 'calc(100% / 7 - 20px)',
    boxSizing: 'border-box',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  image: {
    width: '100%',
    height: 'auto',
  }
};

export default Home;