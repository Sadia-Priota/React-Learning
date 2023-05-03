import React from 'react';

class Clock extends React.Component {
    state = { date: new Date(), locale: 'bn-BD' };

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    tick() {
        this.setState({
            date: new Date(),   //this.stae.date = new Date() --never do that!!
        });
    }

    //also do that
    // tick(){
    //     this.setState((state,props ) => ({
    //         date: state.counter + props.increment
    //     }));
    // }


    handleClick(){
        // console.log('The button was clicked');
        this.setState({
            locale: 'en-US'
        });
    }

    render() {
        const { date, locale } = this.state;
        // const { locale } = this.props;
        return (
            <div>
            <h1 className="heading">
                <span className="text">{date.toLocaleTimeString(locale)}</span>
            </h1>

            <button type='button' onClick={this.handleClick}> Click Here </button>
            </div>
        );
    }
}

export default Clock;