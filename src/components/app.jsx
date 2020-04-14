import React, { Component } from 'react';
import regenerator from "regenerator-runtime/runtime";
import { GiphyFetch } from '@giphy/js-fetch-api';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "xT9IgDEI1iZyb2wqo8"
    };
  }

  search = async (query) => {
    try {
      const gf = new GiphyFetch('ryWSA5wcIiWrcj9lXYFYWP5gOrw8oR4c');
      const results = await gf.search(`${query}`, { limit: 5 });
      console.log(`search`, results.data);
      this.setState ({
        gifs: results.data
      });
    } catch (error) {
      console.error(`search`, error);
    }
  }

  selectGif = (id) => {
    this.setState ({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
