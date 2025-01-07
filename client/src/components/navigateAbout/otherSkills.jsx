import React from 'react';
import { useInView } from 'react-intersection-observer';
import './otherSkills.css';
import { Element } from 'react-scroll';

export default function otherSkills() {
  const { ref: skillsRef, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the component is visible
  });

  return (
    <div ref={skillsRef} className={`skillsContainer ${inView ? 'inView' : 'outView'}`}>
        <Element name='otherskills'>
      <div className="skill">
        <h4>Others</h4>
        <p>Beyond my primary pursuits, I've explored various creative outlets and entrepreneurial ventures that showcase my diverse skills and passions.</p>
      </div>
      </Element>
      <div className="skill">
        <h4>Catering</h4>
        <p>As the founder of YBK Catering, I've had the pleasure of crafting delectable culinary experiences for events and gatherings.</p>
      </div>
      <div className="skill">
        <h4>Content Creation</h4>
        <p>I'm also a content creator, producing engaging content for social media platforms like TikTok and Instagram.</p>
      </div>
      <div className="skill">
        <h4>Design &Drawing</h4>
        <p>As a skilled designer and artist, I enjoy exploring various mediums, from wall drawing to traditional drawing techniques. My drawing work spans across, including anime, food, street and more.</p>
      </div>
      <div className="skill">
        <h4>Writing</h4>
        <p>Writing is another creative outlet I'm passionate about, with experience in crafting engaging content, from blog posts to social media captions.</p>
      </div>
    </div>
  );
}
