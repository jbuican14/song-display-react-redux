import { SONG_SELECTED } from 'actions/types';

export const selectSong = (song) => {
  return {
    type: SONG_SELECTED,
    payload: song,
  };
};
