import React from 'react';
import './list.css';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "What I want to do?",
            list: ["Drink coffee", "Clean PC", "Write a letter"],
        }
        this.handleChange = this.handleChange.bind(this) 
        this.handleList = this.handleList.bind(this)
        this.handleAddItemToTheList = this.handleAddItemToTheList.bind(this)  
    }
    handleChange(e) {
        this.setState({
            name: e.target.value,
        })
    }
    handleList() {
        const list = this.state.list;
        return(
            list.map(item  => <li key={item}> {item} </li>)
        )
    }
    // handleAddItemToTheList() {//!так не работает
    //     this.setState({
    //         list: this.state.list.push(this.state.name)
    //     })
    // }
    handleAddItemToTheList() {
        this.setState(
            state => { 
                const list = [...this.state.list, state.name]
                return {
                    list,
                    name: "What else?=)"
                };
            }
        )
    }

    render() {
        return(
            <div className='list'>

                <input 
                    type='text'
                    onChange={this.handleChange}
                    value={this.state.name}
                />

                <div>{this.state.name}</div>

                <button onClick={this.handleAddItemToTheList}>Додати</button>

                <div>
                   <ul> {this.handleList()} </ul> 
                </div>
                
            </div>
        ) 
    }
}
export default List;