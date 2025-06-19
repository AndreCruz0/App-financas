import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";

type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Home">;

export default function ButtonToTranslations() {
	const navigation = useNavigation<NavigationProps>();

	return (
		<TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Translations")}>
			<Text style={styles.buttonText}>Go to Translations</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: "#007bff",
		padding: 10,
		borderRadius: 5,
		alignItems: "center",
		marginTop: 20,
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
	},
});
