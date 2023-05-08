import React from 'react';
import Button from './Button';

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


    handleClick = (locale) => {
        this.setState({
            locale,
        });
    };

    render() {
        console.log('clock component rendered');
        const { date, locale } = this.state;

        //conditional rendering (Another way)
        // let button;

        // if(locale === 'bn-BD'){
        //     button = (
        //         <Button change={this.handleClick} locale="en-US">
        //             Click here
        //         </Button>
        //     );
        // }else{
        //   button =(
        //     <Button change={this.handleClick} locale="bn-BD">
        //     Click here
        // </Button>
        //   ) ;
        // }

        // const { locale } = this.props;
        return (
            <div>
            <h1 className="heading">
                <span className="text">{date.toLocaleTimeString(locale)}</span>
            </h1>

            {/* <button type='button' onClick={this.handleClick}>  */}
            {/* <Button change={this.handleClick} locale="en-US">
                    Click here
                </Button> */}

                {/* {button} */}


                {/*     Inline Conditional Reandering */}
                {locale === 'bn-BD' ?(
                    <Button change={this.handleClick}locale='en-US' show={false} enable={true} ></Button>
                ) : (
                    <Button change={this.handleClick}locale='bn-BD' show enable ></Button>
                )}
            </div>
        );
    }
}

export default Clock;