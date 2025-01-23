import React from "react";
import { View, Text, ScrollView } from "react-native";

import CategoryCard from '@/app/componets/CategoryCard'

const Categories = () => {
  return (
    <ScrollView 
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:10
    }}
    >
     <CategoryCard title="one" imageUrl="https://t3.ftcdn.net/jpg/09/66/63/90/360_F_966639093_xTYE0kVL56LHwNgt1WU2hsDNzT5d3kkj.jpg"/>
     <CategoryCard title="two" imageUrl="https://t3.ftcdn.net/jpg/09/66/63/90/360_F_966639093_xTYE0kVL56LHwNgt1WU2hsDNzT5d3kkj.jpg"/>
     <CategoryCard title="three" imageUrl="https://t3.ftcdn.net/jpg/09/66/63/90/360_F_966639093_xTYE0kVL56LHwNgt1WU2hsDNzT5d3kkj.jpg"/>
     <CategoryCard title="one" imageUrl="https://t3.ftcdn.net/jpg/09/66/63/90/360_F_966639093_xTYE0kVL56LHwNgt1WU2hsDNzT5d3kkj.jpg"/>
     <CategoryCard title="two" imageUrl="https://t3.ftcdn.net/jpg/09/66/63/90/360_F_966639093_xTYE0kVL56LHwNgt1WU2hsDNzT5d3kkj.jpg"/>
     <CategoryCard title="three" imageUrl="https://t3.ftcdn.net/jpg/09/66/63/90/360_F_966639093_xTYE0kVL56LHwNgt1WU2hsDNzT5d3kkj.jpg"/>
     <CategoryCard title="one" imageUrl="https://t3.ftcdn.net/jpg/09/66/63/90/360_F_966639093_xTYE0kVL56LHwNgt1WU2hsDNzT5d3kkj.jpg"/>
     <CategoryCard title="two" imageUrl="https://t3.ftcdn.net/jpg/09/66/63/90/360_F_966639093_xTYE0kVL56LHwNgt1WU2hsDNzT5d3kkj.jpg"/>
     <CategoryCard title="three" imageUrl="https://t3.ftcdn.net/jpg/09/66/63/90/360_F_966639093_xTYE0kVL56LHwNgt1WU2hsDNzT5d3kkj.jpg"/>
    </ScrollView>
  );
};

export default Categories;
