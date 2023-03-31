import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState} from 'react';
import { KeyboardAvoidingView, StyleSheet,Text,View } from 'react-native';

import {Button,Input,Image} from "react-native-elements";
import { color } from 'react-native-elements/dist/helpers';
import { auth } from  "../firebase";

const LoginScreen= ({navigation}) =>  {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() =>
    {
     const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if(authUser) {
            navigation.replace("Home")
        }
     });
     return unsubscribe;
    },[]);
    const signIn = () =>
    {

    }
    return (
      <KeyboardAvoidingView behaviour ='padding' enabled style = {styles.container}>
      <StatusBar Style  = "Light"/>
        <Image 
            source={
                {
                    uri:"https://logowik.com/content/uploads/images/signal-messenger-icon9117.jpg",
                }
            }
            style = {{width:200,height:200}}
        />
        <View style = {styles.inputContainer}>
        <Input
         placeholder= "Email" 
            autoFocus
            type ="Email"
            value ={email}
            onChangeText = {(text) => setEmail(text)}
         />
        <Input placeholder = "Password"
            secureTextEntry
            type = "password"
            value ={password}
            onChangeText = {(text) => setPassword(text)}
         />
        </View>
        <Button containerStyle = {styles.button} onPress={signIn} title =" Login" />
        <Button onPress = {() => navigation.navigate("SignUp")} containerStyle = {styles.button} type = "outline" title =" SignUp" />
        <View style = {{height:100}}/>

      </KeyboardAvoidingView>
    );
  };


export default LoginScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        padding:10


    },
    inputContainer:{
        width:300

    },
    button:{
        width:200,
        marginTop:5
        

    }
});