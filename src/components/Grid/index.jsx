import React, { Component } from 'react';
import Single from '../Single';

class Grid extends Component {

  deleteData(docID) {
    this.props.deleteData(docID);
  }
  
  renderList() {
    return this.props.items.map((item, i) => {
      return <Single key={i + 1} item={item} deleteData={this.deleteData.bind(this)}/>
    })
  }
  render() { 
    return ( 
      <div>
        <div className="row">
          <ul>
            {this.renderList()}
          </ul>
        </div>
      </div>
    );
  }
}

export default Grid;