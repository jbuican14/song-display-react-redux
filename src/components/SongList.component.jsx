import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
  renderList() {
    return this.props.songs.map((item, idx) => {
      return (
        <div className="item" key={idx}>
          <button>Select</button>
          <div className="content">{item.title}</div>
        </div>
      );
    });
  }

  render() {
    // console.log(this.props.songs);
    return (
      <div>
        <h1>Song List</h1>
        <div className="song-wrapper">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
