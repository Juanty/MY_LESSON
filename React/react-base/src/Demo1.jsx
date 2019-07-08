import React, { Component } from 'react';

class Demo1 extends Component {
  render () {
    console.log(this.props)
    return (
      <div style={{ backgroundColor: 'red' }}
      onClick={() => {
        const { onClick } = this.props;
        onClick('内容来自 子组件');
      }}
      >Demo1</div>
    )
  }
}
export default Demo1;



class App extends Component {
  render () {
    const lists = [
      {
        name: 'Tom', 
        age: 19,
        school: 'school1'
      },
      {
        name: 'Tom1', 
        age: 19,
        school: 'school2'
      }
      return(
        <ul>
          {
            lists.map((list, i) => {
              return (
                <li key={i}>
                  name: {list.name}
                  age: {list.age}
                  school: {list.school}
                </li>
              )
            })
          }
        </ul>
      )
    ]
  }
}