import React from 'react';
import Story from '../Story/Story';
import Logo from './Public/Alex.png';
import './StoryReel.css';

const StoryReel = () => {
    
    return (
        <div className="storyReel">
            <Story
                image="https://d16kd6gzalkogb.cloudfront.net/magazine_images/Jackson-Pollock-detail.jpg"
                profileSrc={Logo}
                title="Alex" />
        </div>
    );
}

export default StoryReel;
