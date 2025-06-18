import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ButtonHome from "../Components/Button";

export default function Home() {
	function handlePress() {
		console.log("Button Pressed");
	}

	return (
		<View>
			<Text> pagina incial </Text>
			<ButtonHome onPress={handlePress}> </ButtonHome>
		</View>
	);
}
