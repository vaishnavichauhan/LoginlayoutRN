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
                        <Text style={{ padding: 20, fontWeight: "bold" }}>Sign In</Text>
                        <Text style={{ padding: 20, fontWeight: "bold" }}>Sign In</Text>
                    </View>
                    <Text> Don't have an accountn? <Text style={{ fontSize: 18, fontWeight: "bold" }}> Sign Up</Text>
                    </Text>
                </View>
            </View>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imgpart: {
        flex: 1,
    },
    image: {
        flex: 1,

    },
    textpart: {
        flex: 3,
    },
    textparts: {
        flex: 1,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    textpartsone: {
        flex: 1,
        paddingVertical: 30,
        paddingHorizontal: 15,
        textAlign: "center",
    },
    input: {
        backgroundColor: "#f0f8ff",
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
    },
})

export default LoginScreen;
