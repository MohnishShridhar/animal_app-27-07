import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView, KeyboardAvoidingView, ToastAndroid, Alert } from 'react-native';
import * as Permissions from 'expo-permissions';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import firebase from 'firebase';
import db from '../config';

export default class FoundScreen extends React.Component{
    constructor(){
        super();
        this.state={
            hasCameraPermissions:null,
            buttonState:'normal',
            animal:'',
            breed:'',
            colour:'',
            details:'',
            lastSeen:'',
            number:''
        }
    }

    info=async(animal, breed, colour, details, lastSeen, number)=>{
        alert('details entered');
            db.collection("missing_animal").add({
                'animal':this.state.animal,
                'breed':this.state.breed,
                'colour':this.state.colour,
                'details':this.state.details,
                'last_seen':this.state.lastSeen,
                'number':this.state.number
                
            })
        
    }

    render(){
        return(
            <View>
                <ScrollView>
                    <KeyboardAvoidingView style={{alignItems:'center', marginTop:20}}>
                        <View>
                        
                            <Image
                            source = {require("../assets/paw.png")}
                            style={{width:200, height:200, justifyContent:'center', alignItems:'center', alignSelf:'center'}}/>
                            <Text style={{textAlign:'center', fontSize:30}}>name this project in line 37</Text>
                        </View>
                        <View>
                            <TextInput
                            style={styles.loginBox}
                            placeholder="Animal (dog, cat, bird, etc)"
                            onChangeText={(text)=>{
                                this.setState({
                                    animal:text
                                })
                            }}
                            />

                            <TextInput
                            style={styles.loginBox}
                            placeholder="Breed (labrador, parrot, etc)"
                            onChangeText={(text)=>{
                                this.setState({
                                    breed:text
                                })
                            }}
                            />

                            <TextInput
                            style={styles.loginBox}
                            placeholder="Details (red collar, spot, etc)"
                            onChangeText={(text)=>{
                                this.setState({
                                    details:text
                                })
                            }}
                            />
                            
                            <TextInput
                            style={styles.loginBox}
                            placeholder="Colour (black, white, etc)"
                            onChangeText={(text)=>{
                                this.setState({
                                    status:text
                                })
                            }}
                            />

                            <TextInput
                            style={styles.loginBox}
                            placeholder="Last Seen (place and time)"
                            onChangeText={(text)=>{
                                this.setState({
                                    lastSeen:text
                                })
                            }}
                            />

                            <TextInput
                            style={styles.loginBox}
                            placeholder="Contact No."
                            maxLength={10}
                            keyboardType={'numeric'}
                            onChangeText={(text)=>{
                                this.setState({
                                    number:text
                                })
                            }}
                            />
                            
                        </View>
                        <View>
                            <TouchableOpacity style={{height:30, width:90, borderWidth:1, marginTop:20, paddingTop:5, borderRadius:7}}
                            onPress={()=>{
                                this.info(this.state.animal, this.state.breed, this.state.colour, this.state.details, this.state.lastSeen, this.state.number)
                                alert('We will list your pet in the Missing list so others can see it')
                            }}>
                                <Text style={{textAlign:'center'}}>Submit</Text>
                                
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    loginBox:{
        width:400,
        height:20,
        borderWidth:1.5,
        fontSize:20,
        margin:10,
        paddingLeft:10
    }
})
