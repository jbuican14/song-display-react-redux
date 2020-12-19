import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return (
      <>
        <h2> Song Detail</h2> <p>Select a song to see any detail</p>
      </>
    );
  }
  return (
    <div>
      <h2>Song Detail</h2> {song.title} {song.duration}{' '}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
