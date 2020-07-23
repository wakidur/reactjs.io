import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from "../actions";

export class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div key={song.title}>
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          <div>{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => ({
  songs: state.songs 
})

const mapDispatchToProps = {
  selectSong
}

export default connect(mapStateToProps, mapDispatchToProps)(SongList)
