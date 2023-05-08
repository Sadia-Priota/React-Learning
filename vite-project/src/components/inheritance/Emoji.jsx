import React from 'react';

export default class Emoji extends React.Component{
    addEmoji = (text,emoji) => `${emoji} ${text} ${emoji}`;

    render(){
        const text = 'I am the Emoji component';

        return <div>{text}</div>
    }
}