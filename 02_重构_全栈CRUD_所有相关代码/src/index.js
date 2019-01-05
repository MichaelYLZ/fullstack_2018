import React from 'react';
import { render } from 'react-dom';
import './App.css'; 
import CreateContainer from './components/CreateContainer.js';
import SenContainer from './components/SenContainer.js';
import axios from 'axios';

class App extends React.Component {
    
    state = {
        sentences: []
    };

    componentDidMount() {
        this.getDataFromServer();
    }
 
    // GET 请求
    getDataFromServer = () => {
        axios.get('/api/sentences')
        .then(res => this.setState({sentences: res.data}))
        .catch(err => console.log(err));
    }
    
    // DELETE 请求
    handleDeleteClick = (senID) => {
        axios.delete('/api/sentences', {data:{id: senID}})
        .then(res => console.log(res.data.message));
        
        this.getDataFromServer();
        
        this.setState({
            sentences: []
        });
    }
    
    // POST 请求
    handleCreateSen = senObjNew => {
        this.createSentece(senObjNew)
    }
    
    createSentece = (senObj) => {
        axios.post('/api/sentences', senObj)
        .then(res => console.log(res.data.message))
        .catch(err => console.log(err));
        
        this.getDataFromServer();
    }

    // PUT请求
    handleEditSubmit = (attrs) => {
        this.updateSen(attrs);
    };

    updateSen = (attrs) => {
        axios.put('/api/sentences', attrs)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
        
        this.getDataFromServer();
    };

    
    render() {
        
        const {
            sentences
        } = this.state;
        
        return (
          <main>
            
          {
             sentences.map(sentenceObj => {
               return <SenContainer 
                       words={sentenceObj.sentence} 
                       key={sentenceObj._id}
                       id={sentenceObj._id}
                       onEditSubmit={this.handleEditSubmit}
                       onDeleteClick={this.handleDeleteClick}
                       />
             }) 
          }
          
          <CreateContainer 
          onHandleCreateSen={this.handleCreateSen}
          />
            
          </main>
        )
    }
}

render(<App />, document.getElementById('app'));
