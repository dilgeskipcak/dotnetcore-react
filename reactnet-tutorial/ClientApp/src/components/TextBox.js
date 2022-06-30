import React, { Component } from 'react';


export class TextBox extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.ref = React.createRef();
    }
    

  onChange(event) {
    this.props.callBack(event.target.value);        
  }
  clear() {
    this.setState({})
  }
  

  render() {
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">{this.props.label}</span>
            </div>
            <input ref={this.ref} type={'text'} className='input-group-text' onChange={this.onChange} defaultValue={this.props.defaultValue}></input>
        </div>
    );
  }
}
