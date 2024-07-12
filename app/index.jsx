import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";

import images from './../constants/images'
import CustomButton from "../components/CustomButton";

export default function Index() {
  return (
  <SafeAreaView className='bg-slate-800 h-full'>

    <ScrollView 
      contentContainerStyle={{
        height:'100%'
      }}
    >
      <View className='w-full justify-center items-center min-h-[85vh] px-4'>
        <Image 
          source={images.logo}
          className='max-w-[250px] w-full h-[200px]'
          resizeMode="contain"
        />
        <Image 
          source={images.cargo}
          className='max-w-[380px] w-full h-[300px]'
          resizeMode="contain"
        />

        <View className='relative mt-5'>
            <Text className=' font-obold text-3xl text-white text-center'>
                Record Every Package in Cargo with {' '}<Text className='text-secondary'>Dynasty</Text>
            </Text>
            <Image 
              source={images.path}
              className='w-[136px] h-[15px] absolute -bottom-2 -right-0'
              resizeMode="contain"
            />
        </View>

      <CustomButton 
      title={'Continue with Email'}
      handlePress={ () => {router.push('/sign-in')}}
      containerStyles='w-full mt-7'
      />
      </View>

    </ScrollView>
    <StatusBar backgroundColor="#1e293b" style="light"/>
  </SafeAreaView>
  );
}
