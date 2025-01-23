import React from "react";
import { View, Text, ScrollView } from "react-native";
import FeaturedCards from "@/app/componets/FeaturedCards";

const FeaturedRows = () => {
  return (
   
      <View className="flex justify-between p-4">
        <FeaturedCards
          title="Featured"
          imageUrl="https://t3.ftcdn.net/jpg/09/66/63/90/360_F_966639093_xTYE0kVL56LHwNgt1WU2hsDNzT5d3kkj.jpg"
          desc="You ae doing great"
        />
        <FeaturedCards
          title="Tasty Discounts"
          imageUrl="https://t3.ftcdn.net/jpg/09/66/63/90/360_F_966639093_xTYE0kVL56LHwNgt1WU2hsDNzT5d3kkj.jpg"
          desc="I am proud of you"
        />
        <FeaturedCards
          title="Offers near you"
          imageUrl="https://t3.ftcdn.net/jpg/09/66/63/90/360_F_966639093_xTYE0kVL56LHwNgt1WU2hsDNzT5d3kkj.jpg"
          desc="you will successed"
        />
      </View>
   
  );
};

export default FeaturedRows;
