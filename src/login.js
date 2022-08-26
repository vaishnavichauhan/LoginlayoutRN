import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Image } from "react-native";


const LoginScreen = () => (

    <View style={styles.container}>
        <View style={styles.imgpart}>
            <Image source={require('../asset/p.webp')} style={styles.image} />
        </View>
        <View style={styles.textpart}>
            <View style={styles.textparts} >
                <View style={styles.textpartsone}>
                    <TextInput style={styles.input} placeholder="Email" />
                    <TextInput style={styles.input} placeholder="Password" />
                    <TouchableOpacity style={[styles.btn, { backgroundColor: "#191970" }]}>
                        <Text style={[styles.btntext, { color: "white" }]}> Sign In</Text>
                    </TouchableOpacity>
                    <View style={{ alignItems: "center" }}>
                        <Text style={{ color: "black" }}>Forgot Password?</Text>
                    </View>
                </View>
                <View style={styles.textpartstwo}>
                    <View style={{ flexDirection: "row" }}>
                    <Image source={require('../asset/fb.png')} style={styles.icon} />
                    <Text style={{ paddingRight:25,fontWeight: "bold" }}>Sign In</Text>
                    <Image source={require('../asset/g.png')} style={styles.icon} />
                    <Text style={{ fontWeight: "bold" }}>Sign UP</Text> 
                    </View>

                    <Text style={{marginTop:10}}> Don't have an accountn? <Text style={{ fontSize: 18, fontWeight: "bold" }}> Sign Up</Text>
                    </Text>
                </View>
            </View>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#ffebcd",
      
    },
    imgpart: {
        flex: 1,
        
    },
    image: {
        flex: 1,

    },
    textpart: {
        flex: 3,
        // position:"absolute",
        // top:50,
        // width:100,
    },
    textparts: {
        flex: 1,
      
    },
    textpartsone: {
        flex: 2,
        backgroundColor:"white",
        paddingTop:80,
        paddingHorizontal: 20,
        textAlign: "center",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    input: {
        backgroundColor: "#EDF0F8",
        borderWidth: 1,
        borderRadius: 40,
        overflow: "hidden",
        marginBottom: 15,
        padding: 12,
        fontSize: 15,
    },

    btn: {
        alignItems: "center",
        borderRadius: 40,
        overflow: "hidden",
        marginBottom: 15,
        padding: 15,
    },

    btntext: {
        fontSize: 16,
    },
    textpartstwo: {
        flex: 1,
        alignItems: "center",
        backgroundColor:"white",
    },
    icon:{
        height:20,
        width:20,
        marginRight:10,
    }
})

export default LoginScreen;
