import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/native'

const Home = () => {

  const navigation = useNavigation()

  const onToggle = ()=>{
    navigation.dispatch(DrawerActions.openDrawer())
  }

  return (
    <View className='flex flex-1 text-center items-center justify-center bg-slate-800'>
      <Text>Home</Text>
      <Button title='Open Drawer' onPress={onToggle}/>
    </View>
  )
}

export default Home