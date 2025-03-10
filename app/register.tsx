import { useState } from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../services/firebaseAuth";
import { useRouter } from "expo-router";

export default function RegisterScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleRegister = () => {
        setError("");
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                router.push("/dashboard");
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Register</Text>
            <TextInput onChangeText={setEmail} placeholder="Email" style={styles.textInput} />
            <TextInput onChangeText={setPassword} placeholder="Password" secureTextEntry style={styles.textInput} />
            <Button title="Register" onPress={handleRegister} />
            {error && <Text style={{ color: "red" }}>{error}</Text>}
            <Text onPress={() => router.push("/login")} style={{ marginVertical: 10 }}>
                Already have an account? Login here
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: "gray",
        width: 200,
        marginVertical: 10,
        paddingHorizontal: 8,
    },
});
