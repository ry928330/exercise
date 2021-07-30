/*
 * @Author: ryyyyy
 * @Date: 2021-05-18 09:46:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-05-18 10:43:19
 * @Description: Do not edit
 * @FilePath: /demo/src/react-api-demo/index.js
 */
import React, {useRef, useEffect} from 'react';

//React.memo demo

// function TextDemo(props) {
//     console.log('子组件渲染')
//     if(props) return <div>hello world</div>
// } 

// //1 只有 number 更改，组件渲染。
// //2 只有 number 小于 5 ，组件渲染。
// function controlIsRender(pre, cur) {
//     if (pre.number !== cur.number && cur.number < 5) {
//         return false
//     }
//     return true;
// }

// const NewTextDemo = React.memo(TextDemo, controlIsRender);

// export default class View extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             num: 1,
//             number: 1
//         }
//     }
//     handleNumClick() {
//         let {num} = this.state;
//         num++;
//         this.setState({
//             num
//         })
//     }
//     handleNumberClick() {
//         let {number} = this.state;
//         number++;
//         this.setState({
//             number
//         })
//     }
//     render() {
//         return <div>
//             <div>
//                 <span>{this.state.num}</span>
//                 <button onClick={this.handleNumClick.bind(this)}>num++</button>
//             </div>
//             <div>
//                 <span>{this.state.number}</span>
//                 <button onClick={this.handleNumberClick.bind(this)}>number++</button>
//             </div>
//             <NewTextDemo num={this.state.num} number={this.state.number} />
//         </div>
//     }
// }


//forwardRef demo
function HOC(Component) {
  class Wrap extends React.Component {
    render() {
      const { forwardedRef, ...otherprops } = this.props;
      return <Component ref={forwardedRef} {...otherprops} />;
    }
  }
  return React.forwardRef((props, ref) => (
    <Wrap forwardedRef={ref} {...props} />
  ));
}
class Index extends React.Component {
  componentDidMount() {
    console.log(666);
  }
  render() {
    return <div>hello,world</div>;
  }
}
const HocIndex = HOC(Index, true);

export default () => {
  const node = useRef(null);
  useEffect(() => {
    /* 就可以跨层级，捕获到 Index 组件的实例了 */
    console.log(node.current);
  }, []);
  return (
    <div>
      <HocIndex ref={node} />
    </div>
  );
};
  
  