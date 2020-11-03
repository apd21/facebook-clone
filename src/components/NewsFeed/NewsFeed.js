import React from 'react';
import './NewsFeed.css';
import StoryReel from '../StoryReel/StoryReel';
import MessageSender from '../MessageSender/MessageSender';

const NewsFeed = () => {

    return (
        <div className="newsFeed">
            <StoryReel />
            <MessageSender />

            {
               /*postsData.map(entry => (
                    <Post
                        profilePic={entry.avatar}
                        message={entry.text}
                        timestamp={entry.timestamp}
                        imgName={entry.imgName}
                        userName={entry.user}
                    />
                ))*/
            }
            
        </div>
    );
}

export default NewsFeed;
