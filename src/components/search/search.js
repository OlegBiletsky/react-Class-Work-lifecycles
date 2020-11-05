import React from 'react';
import Title from '../title/title';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            user: "qwe",
            data: null,
            url: "https://swapi.dev/api/people/?search=",
            // name: "",
            flag: true
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleFlagChange = this.handleFlagChange.bind(this)
        this.getDataFromFetch = this.getDataFromFetch.bind(this)
        // this.handleList = this.handleList.bind(this)
    }

    // static getDerivedStateFromPops(props,state) {
    //     return {name: props.name}
    // }

    componentDidMount() {//побудовано
        this.getDataFromFetch() 
        console.log('MOUNTED');
        
    }

    componentDidUpdate(prevProps, prevState, snapshot) {//аппдейтемо компонент
        console.log(this.state.text, prevState.text);//теперішній і памятає колишній
        console.log('UPDATED');
        if (this.state.text !== prevState.text) {
            this.getDataFromFetch();
        }

    }
    
    getDataFromFetch() {
        fetch(this.state.url + this.state.text, {
            
        })
            .then(response => response.json())
            .then(result => this.setState({data: result }));
    }




    handleChange(e) {
       this.setState({text: e.target.value})
    }

    handleFlagChange() {
        this.setState({flag: !this.state.flag})
    }

    // handleList() {
    //     console.log('hei');
        
    //     return (
    //         this.state.data.results.map(function(item) {
    //                     return <Title item={item.name} />
    //                 })
    //     )
        
    // }

    render() {
        return(
            <div>
                <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.text}
                />
                <br/>
                <button onClick={this.handleFlagChange}>Show or hide</button>
                {this.state.flag && <Title text={this.state.text} myFunc={this.handleFlagChange}/>}
                {/* {this.state.data && this.handleList()} */}
            </div>
        )
    }
}

export default Search;
