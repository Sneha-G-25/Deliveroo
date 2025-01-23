// In App.js in a new project

import React, { useLayoutEffect, useState, useEffect } from "react";
import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import { TextInput } from "react-native-gesture-handler";

import Categories from "@/app/componets/Categories";
import FeaturedRows from "@/app/componets/FeaturedRows";
import sanityClient from "../sanity";

function HomeScreen() {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedcategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "featured"] {
              ...,
              restaurants[] -> {
    ...,
    dishes[] ->
  }
}`
      )
      .then((data) => {
        setFeaturedcategories(data);
      });
  }, []);

  console.log(featuredCategories, "featuredCategories");
  return (
    <SafeAreaView className=" bg-white flex-1">
      {/* Header */}
      <View className="flex-row  items-center space-x-2 py-3 px-4">
        <Image
          source={{
            uri: "http://links.papareact.com/wru",
          }}
          className="h-10 w-10 p-4 rounded-full bg-gray-300"
        />
        <View className="px-4 flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <View className="flex-row space-x-2 items-center">
            <Text className=" font-bold text-xl">Current location</Text>
            <ChevronDownIcon size={18} color="#00CCBB" />
          </View>
        </View>
        <View className="">
          <UserIcon color="#00CCBB" />
        </View>
      </View>
      <View className="flex-row space-x-2 items-center pb-2 px-4">
        <View className="flex-row flex-1 rounded bg-gray-300 p-2 space-x-2">
          <MagnifyingGlassIcon color="gray" className="" />
          <TextInput
            placeholder="Resturents and Cusines"
            keyboardType="default"
            className=""
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>
      <ScrollView className="bg-gray-100" showsVerticalScrollIndicator={false}>
        <Categories />
        <FeaturedRows />
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
