import type React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
interface ButtoProps {
	onPress: () => void;
	children?: React.ReactNode;
}

export default function ButtonHome({ onPress }: ButtoProps) {
	return (
		<TouchableOpacity onPress={onPress}>
			<Text style={{ color: "blue", marginTop: 20 }}>Press Me</Text>
		</TouchableOpacity>
	);
}
