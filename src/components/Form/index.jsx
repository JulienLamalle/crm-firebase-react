import React, { Component } from 'react';
import firebase from '../../firebase'

class Form extends Component {

  updateData() {
    this.props.updateData();
  }

  addContact = (event) => {
    event.preventDefault();

    let newContact = {
      prenom: event.target.prenom.value,
      nom: event.target.nom.value,
      email: event.target.email.value,
      compagnie: event.target.compagnie.value,
      notes: event.target.notes.value
    }
    const db = firebase.firestore();
    db.collection('contacts').add(newContact);

    // reset form
    document.getElementById('addContact').reset();
    this.updateData();
  }

  render() { 
    return (
      <div className="row">
        <form className="col s12" id="addContact" onSubmit={this.addContact.bind(this)}>
          <div className="row">
            <div className="input-field col s6">
              <input id="prenom" type="text" className="validate"/>
              <label htmlFor="prenom">Prénom</label>
            </div>
            <div className="input-field col s6">
              <input id="nom" type="text" className="validate"/>
              <label htmlFor="nom">Nom</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="email" type="text" className="validate"/>
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field col s6">
              <input id="compagnie" type="text" className="validate"/>
              <label htmlFor="compagnie">Societé</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s8">
              <input id="notes" type="text" className="validate"/>
              <label htmlFor="notes">Notes</label>
            </div>
            <div className="input-field col s4">
              <button className="btn waves-effect waves-light green accent-3" type="submit" name="action">Ajouter</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;