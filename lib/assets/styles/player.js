import { StyleSheet, Dimensions } from 'react-native'
export default StyleSheet.create({
    container: {
        backgroundColor: "#181619",
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    playlistSongtitle: {
        fontFamily: 'QuickSand',
        fontSize: 35,
        fontWeight: "500",
        color: '#FFFFFF'
    },
    playlistSongartist: {
        fontFamily: 'QuickSand',
        fontSize: 25,
        color: '#FFFFFF'
    },
    albumCover: {
        backgroundColor: '#FFF',
        width: Dimensions.get('window').width - 80,
        height: Dimensions.get('window').width - 100,
    },
    album: {
        flex: 1,
        padding: 50,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    albumBox1: {
        marginBottom: 150,
        justifyContent: 'center',
        alignItems: 'center'
    }
});