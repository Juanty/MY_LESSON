import React, { Component } from 'react'

let generateId = 0;
class DynamicFiled extends Component {
  state = { 
    data: [
      {name: 'name1', age: 10, id: 0}
    ]
   }
   handleValueChange = (key, value, id) => {
     // 浅拷贝 不可变数据
    let data = this.state.data.slice(0);
    console.log(key, value, id);    
    let index = data.findIndex((item) => item.id === id);
    data [index][key] = value;
    this.setState({
      data
    })
   }
   handleDelete = (id) => {
    let data = this.state.data.slice(0);
    let index = data.findIndex((item) => item.id === id);
    data.splice(index, 1)
    this.setState({
      data
    })
   }
   handleAdd = () => {
    let data = this.state.data.slice(0);
    generateId ++;
    data.push({
      name: '', 
      age: 0, 
      id: generateId
    })
    // push 返回一个数组的长度
    this.setState({
      data
    })
   }
  render() { 
    const { data } = this.state;
    return ( 
      <React.Fragment>
      {
        data.map((filedData, i) => {
          return (
            <Filed key={filedData.id} 
            filedData={filedData} 
            onFiledDelete = {this.handleDelete}
            onFiledValueChange={this.handleValueChange}/>
          )
        })
      }
      <br/>
      <button onClick={this.handleAdd}>添加</button>
      <br/>
      <button>提交</button>
      </React.Fragment>
     );
  }
}
class Filed extends Component {
  state = {  }
  handleFileChangeName = (e) => {
    const name = e.target.value;
    const { onFiledValueChange } = this.props;
    const id = parseInt(e.target.dataset.id);
    onFiledValueChange('name', name, id);
  }
  handleFileChangeAge = (e) => {
    const age = e.target.value;
    const { onFiledValueChange } = this.props;
    const id = parseInt(e.target.dataset.id);
    onFiledValueChange('age', age, id);
  }
  handleDelete = (e) => {
    const id = parseInt(e.target.dataset.id);
    const { onFiledDelete } = this.props;
    onFiledDelete(id);
  }
  render() { 
    const { filedData } = this.props;
    const { name, age } = filedData;
    return (
      <div>
        姓名:<input type="text" value={name} 
        data-id={filedData.id}
        onChange={this.handleFileChangeName}/>
        年龄:<input type="number" value={age} 
        data-id={filedData.id}
        onChange={this.handleFileChangeAge}/>
        <button 
        data-id={filedData.id}
        onClick={this.handleDelete}>删除</button>
      </div>
    );
  }
}
 
export default DynamicFiled;