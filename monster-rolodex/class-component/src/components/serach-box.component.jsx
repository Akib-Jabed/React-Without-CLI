import { Component } from "react";

export default class SearchBox extends Component {
    render() {
        const { className, placeHolder, changeHandler } = this.props;

        return (
            <input type="text" 
                   className={className}  
                   placeholder={placeHolder} 
                   onChange={changeHandler} />
        )
    }
}