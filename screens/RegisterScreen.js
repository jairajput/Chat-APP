import {StyleSheet,View,  } from 'react-native';
import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import {Button,Input,Text} from "react-native-elements";
import { StatusBar } from 'expo-status-bar';
import { useLayoutEffect,useState } from 'react';
import { auth } from  "../firebase";
const RegisterScreen = ({navigation}) => {

    const [name,setName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [image , setImage] = useState("");

    useLayoutEffect(() => {
      navigation.setOptions ({
        headerBackTitle: "Back To Login ",
      });
    },[navigation]);
    

    const register = () => {

        auth
        .createUserWithEmailAndPassword(email,password)
        .then(
        (authUser) => {
            authUser.user.updateProfile({

                displayName:name,
                photoUrl:imageUrl

            });



        })
        .catch (error => alert(error.message))
};
  return (
    <KeyboardAvoidingView behavior='padding' style ={styles.container}>
    <StatusBar style = "light"/> 
      <Text h3 style = {{marginBottom :50}}> Create Account</Text>
    <View style = {styles.inputContainer}>
    <Input
        
            placeholder="First Name" 
            autoFocus type = "text" 
            value={name}
            onChangeText = {(text) => setName(text)}
        />
    
        <Input
        
            placeholder="Email" 
            type = "email"
            value={email}
             onChangeText = {(text) => setEmail(text)}
    />
        <Input
        
            placeholder="Set Password"
            type = "Password"
            secureTextEntry
            value={password}
            onChangeText = {(text) => setPassword(text)}
    />
    <Input
        
            placeholder="Image" 
            type = "image(optional)"
            
            value={image}
            onChangeText = {(text) => setImage(text)}
            onSubmitEditing ={register}
    />
    
    </View>
    <Button 
        containerStyle ={styles.button}
        raised 
        onPress ={register} 
        title = "SignUp"/> 
         <View style = {{height:100}}/>
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen
const styles =StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        padding:10

     },

    button:{
        width:200,
        marginTop:10,
    },
    inputContainer:{
    width:300
    }
});