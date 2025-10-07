import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";

const Search = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="absolute w-full -z-0"
        resizeMode="cover"
      />

      <Image
        source={icons.logo}
        className="w-12 h-10 mb-5 mx-auto"
        resizeMode="contain"
      />

      <View className="flex-1 mt-5">
        <SearchBar placeholder="Search for a movie" className="mx-5" />
      </View>

      
    </SafeAreaView>
  );
};

export default Search;
