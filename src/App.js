

import React, { Component } from 'react';
import ToDoItem from './components/ToDoItem/'

class App extends Component {
    state = {
        list: [
            {name: 'Test1', color: 'red', edit: false},
            {name: 'Test2', color: 'blue', edit: false},
            {name: 'Test3', color: 'green', edit: false},
        ],
        name: '',
        color: 'black',
    };
    render() {
        return (
            <div className="App">
                <input onChange={this.setName}/>
                <input onChange={this.setColor} type='color'/>
                <button onClick={this.add}>add</button>
                {this.state.list.length && this.state.list.map((item, index) =>
                    <ToDoItem
                    text={item.name}
                    key={index}
                    color={item.color}
                    index={index}
                    removeItem={this.removeItem}
                    editItem={this.editItem}
                    edit={item.edit}
                    />)}
            </div>
        );
    }

    removeItem = (index) => {
      this.setState({
          list: this.state.list.filter((element, key) => key !== index)
      })
    };

    editItem = (index, edit, name) => {
      console.log(index)
        this.setState({
            list: this.state.list.map((element, key) => {
              if (key === index) {
                return {...element, edit: !edit, name: name}
              }
              return element;
            })
        })
    }

    add = () => {
        this.setState({
            list: [...this.state.list, {name: this.state.name, color: this.state.color}]
        });
        setTimeout(() => {
            console.log(this.state.list)

        }, 2000)
    };

    setName = (e) => {
      this.setState({
          name: e.target.value
      });
    }

    setColor = (e) => {
      this.setState({
          color: e.target.value
      })
    }
}

export default App;
