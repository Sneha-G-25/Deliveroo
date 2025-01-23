import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";

const CategoryCard = ({ title, imageUrl }) => {
  return (
    <TouchableOpacity>
      <View className="m-2">
       
        <Image
          source={{
            uri: imageUrl,
          }}
          className="h-20 w-20 rounded"
        />
         <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
