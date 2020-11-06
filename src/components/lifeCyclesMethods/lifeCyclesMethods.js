import React from 'react';
import ListItem from '../list/listItem';

class LifeCyclesMethods extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            user: "qwe",
            data: null,
            url: "https://swapi.dev/api/people/?search=",
        };

        this.handleChange = this.handleChange.bind(this)
        this.getDataFromFetch = this.getDataFromFetch.bind(this)
        this.handleList = this.handleList.bind(this)
    }

    // static getDerivedStateFromPops(props,state) {//не працює так!
    //     return {name: props.name}
    // }

    componentDidMount() {//виконується коли компонент побудовано
        this.getDataFromFetch() //викликаємо функцію яка шле асинхронно запит на сервер
        console.log('MOUNTED');// за той час ми йдемо далі і пишемо в консоль
        
    }

    componentDidUpdate(prevProps, prevState, snapshot) {//виконується коли компонент апдейтиться
        console.log(this.state.text, prevState.text);//теперішній стейт і памятає колишній стейт
        console.log('UPDATED');
        if (this.state.text !== prevState.text) {//if стейт змінився то викликаємо деяку функцію
            this.getDataFromFetch();
        }

    }
    
    getDataFromFetch() {//надсилаємо запит на сервер
        fetch(this.state.url + this.state.text, {
            
        })
            .then(response => response.json())
            .then(result => this.setState({data: result }));
    }




    handleChange(e) {
       this.setState({text: e.target.value})
    }


    handleList() {
   
        if (this.state.data && this.state.data.results.length !== 0) {
            return (
            this.state.data.results.map(function(item) {
                        return <ListItem item={item.name} />
                    })
            )
        } else if (this.state.data && this.state.data.results && this.state.data.results.length === 0) {
            return <h1>0 results found</h1>
        } else {
            return <h1>Search...</h1>
        }
        
        
    }

    render() {
        return(
            <div>

                <input
                    placeholder="type name"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.text}
                />
                
                <hr/>
                <ol>
                    {this.handleList()}
                </ol>
                <hr/>
                {this.state.data && this.state.data.count && this.state.data.results ? this.state.data.count : null}
                
            </div>
        )
    }
}

export default LifeCyclesMethods;
