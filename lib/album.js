import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import propTypes from 'prop-types';

class Album extends Component<{}> {
    constructor(props) {
        super(props);

    }
    render() {
        const { src, year, title } = this.props;
        return(<Image style={{ width: 400, height: 400 }} source={{ uri: src }} />);
    }
}

Album.propTypes = {
    src: propTypes.string.isRequired,
    year: propTypes.string.isRequired,
    title: propTypes.string.isRequired
};

export default Album;