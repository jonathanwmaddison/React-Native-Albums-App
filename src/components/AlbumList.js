import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from "./AlbumDetail";
// instead of using a View tag in this component we use a ScrollView tag so that users can scroll through the conent when it goes out of the screen.


//in the compoennet will mount funciton I can include a line that simply says debugger; -> this will enable me to explore code and output of code. 

class AlbumList extends Component {
    state = { albums: [] }; 

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({ albums: response.data })); 
    }
//each component requires a unique key when defining a state variable as an array. This ensures that react can keep track of items that need updating (for performance). The index of an array doesnt work because it can change for data as state is re-render.
    renderAlbums () {
        return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
    }
    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
};

export default AlbumList;
