import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

interface Props {
  placeholder: string;
  onPress?: () => void;
  className?: string
}

const SearchBar = ({ placeholder, onPress, className }: Props) => {
  return (
    <View className={`flex-row items-center bg-dark-200 rounded-full px-5 py-4 ${className}`}>
      <Image
        source={icons.search}
        className="size-5 tint-accent"
        resizeMode="contain"
      />

      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value=""
        onChangeText={() => {}}
        placeholderTextColor="#a8b5db"
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};

export default SearchBar;
