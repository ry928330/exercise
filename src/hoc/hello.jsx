import React, {Component} from 'react';
import {refHoc} from './index.jsx';

@refHoc('ry')
export default class HelloCom extends Component {
  constructor({name}) {
    super();
    this.state = {
      name: name || 'sx'
    }
  }
  render() {
    return <div>
      hello, {this.state.name}
    </div>
  }
}