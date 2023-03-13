import React from "react";
import { StyleSheet, View, Button, Text, TextInput, Image } from "react-native";

export default class RegisterScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''};
    }
    
    Submit() {

        const data = {
            email: this.state.email,
            password: this.state.password,
        };
        fetch('http://149.91.89.133:6088/inscription', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.warn('Success:', data);
            })  
            .catch((error) => {
                console.error('Error:', error);
    })
}

  render() {
    return (
        <View 
        style={{ flex: 1,
                 backgroundColor: 'yellow', 
                 justifyContent: 'center', 
                 alignItems: 'center'}}>
    <Image source={require("../Images/logo-snapchat.jpeg")} style={{height: 100, width: 100}}/>

    <Text style={{ fontWeight: 'bold', 
                    fontSize: 20,
                    marginBottom: 10 }}>
        Inscrivez vous !
    </Text>

        <TextInput 
            style={{ fontWeight: 'bold', width: 300, marginLeft: 5, marginRight: 5, height: 50, borderColor: '#000000', borderWidth: 1, paddingLeft: 5, borderRadius: 10, marginBottom: 10 }}
            name="email"
            onChangeText={(text) => { this.setState({ email: text }) }}
            id="name" 
            placeholder="Email"
            errorStyle={{ color: 'red' }}
            errorMessage='Veuillez entrer un email !'/>

        <TextInput 
            style={{ fontWeight: 'bold', width:300, marginLeft: 5, marginRight: 5, height: 50, borderColor: '#000000', borderWidth: 1, paddingLeft: 5, borderRadius: 10, marginBottom: 10 }}
            secureTextEntry={true} 
            name="password"
            onChangeText={(text) => { this.setState({ password: text }) }} 
            id="password" 
            placeholder="Password"
            errorStyle={{ color: 'red' }}
            errorMessage='Veuillez entrer un password !'/>

        <Button 
            style={{ borderRadius: 15 }}
            title="S'enregistrer" 
            onPress={() => {this.Submit() }}/>

    </View>
    );
  }
}

const styles = StyleSheet.create({
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    height: 50,
    borderColor: "#000000",
    borderWidth: 1,
    paddingLeft: 5,
  },
});
