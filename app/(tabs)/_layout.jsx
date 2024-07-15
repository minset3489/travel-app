import 'react-native-gesture-handler'

import { View, Text, Image } from 'react-native'
import { Tabs,Redirect } from 'expo-router'
import { Drawer } from 'expo-router/drawer'

import icons from '../../constants/icons'
import images from '../../constants/images'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'

// import CustomDrawerContent from '../../components/CustomDrawerContent'

import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { useRouter } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const CustomDrawerContent = (props) => {
  const router = useRouter()
  const {top, bottom}= useSafeAreaInsets()
return (
  <View className='flex flex-1 text-center justify-center'>
    <DrawerContentScrollView {...props} scrollEnabled={false}
        contentContainerStyle={{
            backgroundColor:'#1e293b'
        }}
    >
      <View className='p-5 items-center'>
        <View  className='w-[120px] h-[120px] items-center justify-center bg-white rounded-full border-2 border-orange-200'>
          <Image 
            source={images.logo}
            className='max-w-[250px] w-full h-[100px] p-2 overflow-hidden'
            resizeMode="contain"
          />
        </View>
        <Text className='text-center font-obold text-base pt-1 text-secondary-100'>
          Min Set
        </Text>
      </View>
      
      <View className='bg-white pt-3'>
        <DrawerItemList {...props} />
        <DrawerItem 
          labelStyle={{ color: '#1e293b', marginLeft:-20 }}
          label={'Logout'} 
          onPress={()=> router.replace('/')}
          icon={({ size }) => (
            <Ionicons 
              name='log-out-outline' 
              size={size} 
              color={'#1e293b'} 
            />
          )}
         />
      </View>

    </DrawerContentScrollView>
    <View 
      style={{
        borderTopColor:'#dde3fe',
        borderTopWidth:1,
        padding:20,
        paddingBottom: 20+bottom,
      }}
    >
      <Text>Footer</Text>
    </View>
  </View>
)
}

const TabsLayout = () => {
  return (
   <>
   <GestureHandlerRootView style={{flex:1}}>
      <Drawer drawerContent={CustomDrawerContent}
        screenOptions={{
          drawerHideStatusBarOnOpen: true,
          drawerInactiveTintColor:'#1e293b',
          drawerActiveBackgroundColor:'#1e293b',
          drawerActiveTintColor:'#FF9C01',
          drawerLabelStyle:{marginLeft: -20},
          headerStyle: { backgroundColor: '#1e293b' },
          headerTintColor: '#FF9C01', 
        }}
      >
        <Drawer.Screen 
          name='home'
          options={{
            drawerLabel:'Home',
            headerTitle:'My Home',
            drawerIcon:({size,color}) => (
              <Ionicons name='home-outline' size={size} color={color}/>
            )
          }}
        /> 

        <Drawer.Screen
          name='create'
          options={{
            drawerLabel:'Create',
            headerTitle:'Create',
            drawerIcon:({size,color}) => (
              <Ionicons name='add-outline' size={size} color={color}/>
            )
          }}
        />

        <Drawer.Screen
          name='profile'
          options={{
            drawerLabel:'Profile',
            headerTitle:'Profile',
            drawerIcon:({size,color}) => (
              <Ionicons name='people-outline' size={size} color={color}/>
            )
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
   </>
  )
}

export default TabsLayout