import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";

export default function Index() {
  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() =>
    fetchMovies({
      query: "",
    })
  );

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="absolute w-full -z-0"
        resizeMode="cover"
      />
      {/* <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 10 }}
      > */}

      <Image
        source={icons.logo}
        className="w-12 h-10 mx-auto"
        resizeMode="contain"
      />

      {moviesLoading ? (
        <View className="flex-1 items-center justify-center">
        <ActivityIndicator
          size="large"
          color="#0000ff"
        />
        </View>
      ) : moviesError ? (
        <Text className="text-lg text-white mt-5 mb-3">
          {" "}
          Error: {moviesError?.message}{" "}
        </Text>
      ) : (
        <View className="flex-1">
          <>
            <Text className="text-lg text-white font-bold mt-5 mb-3 mx-5">
              Latest Movie
            </Text>

            <FlatList
              data={movies}
              renderItem={({ item }) => <MovieCard {...item} />}
              keyExtractor={(item) => item.id.toString()}
              numColumns={3}
              className="px-3"
              showsVerticalScrollIndicator={false}
              columnWrapperStyle={{
                justifyContent: "flex-start",
                gap: 20,
                marginBottom: 10,
              }}
              contentContainerStyle = {{
                paddingBottom: 70
              }}
            />
          </>
        </View>
      )}
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}
