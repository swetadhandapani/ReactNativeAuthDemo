import { signOut } from "firebase/auth";
import { View, Text, Button } from "react-native";
import auth from "../services/firebaseAuth";
import { useRouter } from "expo-router";

export default function DashboardScreen() {
    const router = useRouter();

    const handleLogout = () => {
        signOut(auth).then(() => {
            router.push("/login");
        });
    };

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ marginVertical: 10 }}>Welcome to Dashboard</Text>
            <Button title="Logout" onPress={handleLogout} />
        </View>
    );
}
