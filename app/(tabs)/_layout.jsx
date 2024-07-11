import { View, Text, Image } from 'react-native'
import { Tabs,Redirect } from 'expo-router'
import icons from '../../constants/icons'

const TabIcon = ({icon, color, name, focused}) =>{
  return(
    <>
    <View className='items-center justify-center gap-2'>
      <Image 
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className="w-6 h-6"
      />
      <Text 
        className={`${focused ? 'font-pextrabold' : 'font-pregular'} text-xl`}
        style={{color :color}}
      
      >{name}</Text>
    </View>
    </>
  )
}

const TabsLayout = () => {
  return (
   <>
    <Tabs screenOptions={{ 
      tabBarShowLabel : false,
      tabBarActiveTintColor: '#60a5fa',
      tabBarInactiveTintColor: '#cdcde0',
      tabBarStyle:{
        backgroundColor : '#020617',
        borderTopWidth : 1,
        borderTopColor: "#232533",
        height : 84
      }
    }}>
      <Tabs.Screen 
        name='home'
        options={{
          title : "Home",
          headerShown:false,
          tabBarIcon:({color,focused}) =>(
            <TabIcon 
              icon={icons.home}
              color={color}
              name="Home"
              focused={focused}
            />
          )
        }}
      />
       <Tabs.Screen 
        name='create'
        options={{
          title : "Create",
          headerShown:false,
          tabBarIcon:({color,focused}) =>(
            <TabIcon 
              icon={icons.plus}
              color={color}
              name="Create"
              focused={focused}
            />
          )
        }}
      />
       <Tabs.Screen 
        name='profile'
        options={{
          title : "Profile",
          headerShown:false,
          tabBarIcon:({color,focused}) =>(
            <TabIcon 
              icon={icons.profile}
              color={color}
              name="Profile"
              focused={focused}
            />
          )
        }}
      />
    </Tabs>
   </>
  )
}

export default TabsLayout