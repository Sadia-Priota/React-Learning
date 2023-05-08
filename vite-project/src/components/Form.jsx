import React from 'react';
import Button from './Button';

export default class Form extends React.Component{
    state={
        course: 'JavaScript',
        text: 'JavaScript is awesome',
        library: '--Select one--',
        isAwesome: true,
    };

    handleChange=(e)=>{
        // console.log(e.target.value);
        if(e.target.type === 'text'){
            this.setState({
                course:e.target.value,
            });
        }
        else if(e.target.type === 'textarea'){
            this.setState({
                text:e.target.value,
            });
        }
        else if (e.target.type === 'select-one') {
            this.setState({
                library: e.target.value,
            });
        }
        else if (e.target.type === 'checkbox') {
            this.setState({
                isAwesome: e.target.checked,
            });
        }
        else{
            console.log('Nothing');
        } 
    };

    submitHandler = (e) => {
        const{course, text, library, isAwesome} = this.state;
        e.preventDefault();
        console.log(course, text, library, isAwesome);
    }

    render(){
        const{course, text, library, isAwesome} = this.state;
        return(
            
            <div>
                <form onSubmit={this.submitHandler}>
                {/* <input type="text" value={null} /> */}
                    <input type="text" placeholder='Enter Course' value={course} onChange={this.handleChange} />
                    <br></br>
                    <br></br>
                    <textarea name='text' placeholder='Enter Additional Text' value={this.state.text} onChange={this.handleChange} />
                    <br />
                    <br />                   
                    <select value={library} onChange={this.handleChange}>
                    <option value="--Select one--">--Select one--</option>
                        <option value="React">React</option>
                        <option value="Vue">Vue</option>
                        <option value="Angular">Angular</option>
                    </select>
                    <br />
                    <br />
                    <input type="checkbox" checked={isAwesome} onChange={this.handleChange} />
                    <br />
                    <br />
                        <input type='submit' value="Submit" />
                </form>            
            </div>
        );
    }
}