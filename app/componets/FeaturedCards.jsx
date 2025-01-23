import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import { View, Text, ScrollView } from "react-native";

import RestaurentCard from "@/app/componets/RestaurentCard";

const FeaturedCards = ({ title, desc }) => {
  return (
    <View className="p-2">
      <View className="flex-row items-center justify-between">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-400">{desc}</Text>
      
      <ScrollView 
      horizontal
      showsHorizontalScrollIndicator={false}
      // contentContainerStyle={{
      //     paddingHorizontal:15,
      //     paddingTop:10
      // }}
      >
        <View className="flex-row">
        <RestaurentCard
          id={123}
          imgUrl={
            "https://t3.ftcdn.net/jpg/09/66/63/90/360_F_966639093_xTYE0kVL56LHwNgt1WU2hsDNzT5d3kkj.jpg"
          }
          title={"Yo! Sushi"}
          rating={4.5}
          genre={"Janapnese"}
          address={"12th main road"}
          short_desc={"Test description "}
          dishes={[]}
          long={20}
          lat={20}
        />
        <RestaurentCard
          id={123}
          imgUrl={
            "https://t3.ftcdn.net/jpg/09/66/63/90/360_F_966639093_xTYE0kVL56LHwNgt1WU2hsDNzT5d3kkj.jpg"
          }
          title={"Yo! Sushi"}
          rating={4.5}
          genre={"Janapnese"}
          address={"12th main road"}
          short_desc={"Test description "}
          dishes={[]}
          long={20}
          lat={20}
        />
        <RestaurentCard
          id={123}
          imgUrl={
            "https://t3.ftcdn.net/jpg/09/66/63/90/360_F_966639093_xTYE0kVL56LHwNgt1WU2hsDNzT5d3kkj.jpg"
          }
          title={"Yo! Sushi"}
          rating={4.5}
          genre={"Janapnese"}
          address={"12th main road"}
          short_desc={"Test description "}
          dishes={[]}
          long={20}
          lat={20}
        />
        <RestaurentCard
          id={123}
          imgUrl={
            "https://t3.ftcdn.net/jpg/09/66/63/90/360_F_966639093_xTYE0kVL56LHwNgt1WU2hsDNzT5d3kkj.jpg"
          }
          title={"Yo! Sushi"}
          rating={4.5}
          genre={"Janapnese"}
          address={"12th main road"}
          short_desc={"Test description "}
          dishes={[]}
          long={20}
          lat={20}
        />

        </View>
        
        
      </ScrollView>
    </View>
  );
};

export default FeaturedCards;
