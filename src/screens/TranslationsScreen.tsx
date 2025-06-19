import { translationsFake } from "../mocks/mockTransacoes";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ButtonHome from "../Components/Button";

export function TranslationsScreen() {
	function handlePress() {
		console.log("Button Pressed");
	}

	return (
		<View style={styles.container}>
			<Text style={styles.titulo}>Minhas Transações</Text>

			<FlatList
				data={translationsFake}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<View style={styles.item}>
						<Text style={styles.itemTexto}>
							{item.titulo}: <Text style={styles.valor}>R$ {item.valor}</Text>
						</Text>
					</View>
				)}
			/>

			{/* <ButtonHome onPress={handlePress} /> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fafafa",
		paddingHorizontal: 16,
		paddingTop: 60,
	},
	titulo: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 16,
		color: "#333",
		textAlign: "center",
	},
	item: {
		backgroundColor: "#fff",
		padding: 16,
		marginBottom: 10,
		borderRadius: 8,
		elevation: 2,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
	},
	itemTexto: {
		fontSize: 16,
		color: "#333",
	},
	valor: {
		fontWeight: "bold",
		color: "#4caf50",
	},
});
