import React, { Component } from 'react';

/*
     * jsx 注意事项补充
     *
     * 1: 标签必须要闭合  <br /> <div />
     * 2: 命名规范： 小驼峰 命名法 v-if v-model vIf  vModel  <label onclick="" class for="" />
     * ==> <label className htmlFor="" onClick={() => {}} />
     * */

/*
* React中的三大属性 props  state  context
* props 概念  是一个属性对象，是组件天生就有的这么一个对象，他的全称是properties
* props 是 只读的
* */
class MyComponent extends Component {

  constructor(props) {
    super(props);
    console.log('constructor 我正在构建阶段')
  }
  UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
    console.log('componentWillReceiveProps 你可以在我这里执行props 和 state 的映射');
  }

  state = {
    value: '我是初始值',
  }

  handleClick = () => {
    this.setState({
      value: '我已经改变了，变得很强大了。',
    })
  }

  // 除了这个之外
  componentWillUnmount() {
    console.log('componentWillUnmount 我将要被卸载了');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate 我已经更新结束了');
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate 允不允许更新', nextState);

    // 如果你需要它更新 就需要return true  反之 return false
    return true;
  }
  UNSAFE_componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('componentWillUpdate 我将要更新了。', nextState);
  }

  componentDidMount() {
    console.log('componentDidMount 我已经挂在成功了');
  }


  render() {
    // console.log('render 我正在渲染');
    return (
      <div>
        <div onClick={ this.props.a }>
          {
            // state的变化，回引起 页面的渲染
            this.state.value
          }
        </div>

      </div>

    )
  }


  UNSAFE_componentWillMount() {
    console.log('componentWillMount 我将要挂载了');
  }
}


export default MyComponent;
