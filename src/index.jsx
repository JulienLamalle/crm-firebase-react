import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import firebase from './firebase'
import Grid from './components/Grid'
import Form from './components/Form'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      contacts: []
    };
  }

  updateData() {
    const db = firebase.firestore();

    db.collection('contacts').get()
    .then((snapshot) => {
      let contacts = [];
      snapshot.forEach((doc) => {
        let contact = Object.assign({id: doc.id}, doc.data());
        contacts.push(contact);
      })
      this.setState({
        contacts: contacts
      })
    })
    .catch(error => {
      console.log('Erreur:', error)
    })
  }

  deleteData(docID) {
    const db = firebase.firestore();
    db.collection('contacts').doc(docID).delete();
    this.updateData();
  }

  componentWillMount() {
    this.updateData();
  }

  render () {
    return(
      <div>
        <div className="navbar">
          <nav className="green accent-3">
            <div className="nav-wrapper">
              <a href="/" className="brand-logo center">Contacts</a>
            </div>
          </nav>
        </div>
        <div>
          <Form  updateData={this.updateData.bind(this)}/>
          <Grid items={this.state.contacts} deleteData={this.deleteData.bind(this)}/>
        </div>
      </div>
    )
  }
}


ReactDOM.render(<App /> , document.querySelector('#root'));