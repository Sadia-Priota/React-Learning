import React from 'react';

class Button extends React.Component{
shouldComponentUpdate(nextProps){
    const {change: currentChange, locale:currentLocale } = this.props;
    const {change: nextChange, locale:nextLocale } = nextProps;
    if(currentChange === nextChange && nextLocale === currentLocale){
        return false;
    }
    return true;
}

    render(){
        console.log('button componenet rendered');
        const { change, locale, show, enable } = this.props;
        if(!enable) return null;
        return(
            <>
            <button type="button" onClick={() => change(locale)}>
                {locale === 'bn-BD' ? 'Click to change in Bangla' : 'Click to change in English'}
            </button>
            {show && <p>Hello kitty</p>}
            </>
        );
    }
}

export default Button;