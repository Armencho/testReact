import React, {PureComponent} from 'react'
import './ToDoItem.css';


class Index extends PureComponent {
    state = {
      name: this.props.text
    };
    render() {
        return <div style={{background: this.props.color}}>
            <button className="DeleteBtn" onClick={this.remove}>X</button>
            <span className="textWhite nameText">
                {this.props.edit? <input defaultValue={this.state.name} onChange={this.changeName}/> : this.props.text}
            </span>
            <button className="EditBtn" onClick={this.edit}>{this.props.edit? 'Save' : 'Edit'}</button>
        </div>
    }

    changeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    remove = () => {
        this.props.removeItem(this.props.index)
    };

    edit = () => {
        this.props.editItem(this.props.index, this.props.edit, this.state.name)
    }
}

export default Index;