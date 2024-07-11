import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
   <View className='flex flex-1 items-center justify-center bg-white'>
    <Text className='text-3xl font-obold'>21 Cargo</Text>
    <Link href='/home' className="text-2xl text-blue-400 cursor-pointer" >Go to home</Link>
   </View>
  );
}
