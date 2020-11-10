import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase';

export default class HomeScreen extends React.Component {
    state = {
        email: "",
        displayName: "",
        phoneNum: ""
    }

    componentDidMount() {
        const { email, displayName, phoneNum } = firebase.auth().currentUser;

        this.setState({ email, displayName, phoneNum });
    }

    signOutUser = () => {
        firebase.auth().signOut();
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Hi {this.state.email} {this.state.phoneNum}</Text>

                <TouchableOpacity style={{ marginTop: 32 }} onPress={this.signOutUser}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

