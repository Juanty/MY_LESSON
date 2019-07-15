import React, { Component } from 'react';
import propTypes from 'prop-types';
class Context15 extends Component {
  // static 静态属性
  
  // foo() {}
  // foo = () => {}
  state = {
    theme:'red'
  }
  // 后代组件可以从这里拿信息
  getChildContext() {
    return {
      theme:this.state.theme
    }
  }
  // 第一种传参方法
  // handleToggleTheme = (e) => {
  //   const theme = e.target.dataset.theme;
  //   this.setState({
  //     theme
  //   })
  // }
  // 2 return 一个函数
  // handleToggleTheme = (theme) => () => {
  //   this.setState({
  //     theme
  //   })
  // }
  // 3 没有return一个函数
  handleToggleTheme = (theme) => {
    this.setState({
      theme
    })
  } 
  render() { 
    const msg = ['str1','str2','str3'];

    return (
      <div>
        {
          msg.map((item,i) => {
            return (
              <Message key={i} text={item} />
            )
          })
        }
        {/* 第一种
        <button onClick={this.handleToggleTheme}
        data-theme="purple">purple</button>
        <button onClick={this.handleToggleTheme}
        data-theme="yellowgreen">yellowgreen</button>
        第二种
        <button onClick={this.handleToggleTheme('purple)}
        data-theme="purple">purple</button>
        <button onClick={this.handleToggleTheme(yellowgreen)}
        data-theme="yellowgreen">yellowgreen</button> */}
        {/* 第三种 */}
        <button onClick={() => {
          this.handleToggleTheme('purple')
        }}
        data-theme="purple">purple</button>
        <button onClick={this.handleToggleTheme.bind(this,'yellowgreen')}
        data-theme="yellowgreen">yellowgreen</button>
      </div>
    );
  }
}
/**
 * function Person() {
 * }
 * Person.childContextTypes = {}
 */
Context15.childContextTypes = {
  theme:propTypes.string
}
class Message extends Component {
  shouldComponentUpdate() {
    return false 
  }
  render() {
    const { text } = this.props;
    return (
      <li>
        { text }
        <MyButton />
      </li>
    )
  }
}
class MyButton extends Component {
  static contextTypes = {
    theme:propTypes.string
  }
  render () {
    const {theme} = this.context;
    return (
      <button style={{
        color:theme
      }}>delete</button>
    )
  }
}
export default Context15;