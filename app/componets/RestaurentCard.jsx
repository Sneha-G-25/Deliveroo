import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";

const RestaurentCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_desc,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity className="w-64 bg-white m-2 shadow">
      <Image source={{ uri: imgUrl }} className="w-64 h-32 " />
      <View className="p-2">
      <Text className="font-bold text-lg">{title}</Text>
      <View className="flex-row items-center space-x-2 my-1">
        <StarIcon className="h-4 w-4" color="gray" />
        <Text className=" text-gray-500">
          {rating} • {genre}
        </Text>
      </View>
      <View className="flex-row items-center space-x-2 text-gray-400 flex-wrap">
        <MapPinIcon className="h-4 w-4" color="gray"/>
        <Text numberOfLines={5} className="flex-shrink text-gray-500">Nearby • {address}</Text>
      </View>
      </View>
      
    </TouchableOpacity>
  );
};

export default RestaurentCard;
