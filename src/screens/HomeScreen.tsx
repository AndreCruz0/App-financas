import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ButtonToTranslations from "../Components/Button";

export  function HomeScreen() {
  function handlePress() {
    console.log("Button Pressed");
  }

  const dados = [
    { id: "1", titulo: "Aluguel", valor: 1200 },
    { id: "2", titulo: "Mercado", valor: 300 },
    { id: "3", titulo: "Transporte", valor: 150 },
  ];

  return (
    <View >
  

      <ButtonToTranslations  />
    </View>
  );
}

