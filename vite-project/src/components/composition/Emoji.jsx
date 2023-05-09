import React from 'react';

export default class Emoji extends React.Component{
    addEmoji = (text,emoji) => `${emoji} ${text} ${emoji} ${emoji} ${text} ${emoji}${emoji}`;

    render(){
        return this.props.children({ addEmoji:this.addEmoji });
    }
}