import React, {useState} from 'react';
import { Avatar, Input } from '@material-ui/core';
import Logo from './public/Alex.png';
import './MessageSender.css';

import VideocamIcon from '@material-ui/icons/VideoCam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'

const MessageSender = () => {
    const [input, setInput] = useState('');
    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    const handleSubmit = () => {
        console.log('Submiting')
    }

    return (

        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={Logo} />
                <form>
                    <input 
                        type="text" 
                        className="messageSender__input" 
                        placeholder="What's on your mind?" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)} 
                    />
                    <Input 
                        type="file" 
                        className="messeageSender__fileSelector"
                        onChange={handleChange} 
                    />
                    <button 
                        onClick={handleSubmit} 
                        type="submit">Hidden Submit
                    </button>
                </form>
            </div>
            <div className="messageSender__button">
                <div className="messageSender__option">
                    <VideocamIcon style={{color: 'red'}} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color: 'green'}} />
                    <h3>Photo Library</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{color: 'orange'}} />
                    <h3>Feeling Activity</h3>
                </div>
            </div>
        </div>
    );
}

export default MessageSender;
