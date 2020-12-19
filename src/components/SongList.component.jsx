import React, { Component } from 'react';

import { connect } from 'react-redux';
import { selectSong } from 'actions';
import SongDetail from 'components/SongDetail.compoenet';

class SongList extends Component {
  renderList() {
    return this.props.songs.map((item, idx) => {
      return (
        <div className="item" key={idx}>
          <button onClick={() => this.props.selectSong(item)}>Select</button>
          <div className="content">{item.title}</div>
        </div>
      );
    });
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        <h1>Song List</h1>
        <div className="song-wrapper">{this.renderList()}</div>
        <div className="song-detail">
          <SongDetail />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong: selectSong })(SongList);
