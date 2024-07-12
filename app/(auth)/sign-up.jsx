import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import images from '../../constants/images'
import FormField from '../../components/FormField'
import { Link } from 'expo-router'
import CustomButton from '../../components/CustomButton'

const SignUp = () => {

  const { setUser, setIsLogged } = useState(false);
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    
    
    try {
     
    } catch (error) {
      console.log(error);
      Alert.alert('Error', error.message);
    } finally {
      
    }
  };

  return (
    <>
      <SafeAreaView className='bg-slate-800 h-full'>
        <ScrollView>
          <View className='w-full  min-h-[85vh] px-4 py-6'>
            <Image 
              source={images.logo}
              className='max-w-[250px] w-full mx-auto h-[200px]'
              resizeMode="contain"
            />
            <Text className='text-2xl mx-auto text-orange-200 font-obold '>Sign up to the App</Text>
            <FormField
              title="Username"
              value={form.username}
              handleChangeText={(e) => setForm({ ...form, username: e })}
              otherStyles="mt-7"
            />
            <FormField
              title="Email"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              otherStyles="mt-7"
              keyboardType="email-address"
            />
            <FormField
              title="Password"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
              otherStyles="mt-7"
              secureTextEntry
            />
            <CustomButton
              title="Sign Up"
              handlePress={submit}
              containerStyles='mt-7'
              isLoading={isSubmitting}
            />
            <View className='justify-center pt-5 flex-row gap-2'>
              <Text className='text-lg text-gray-100 font-pregular'>
                Alreay have an account ?
              </Text>
              <Link href='/sign-in' className="text-lg font-psemibold text-secondary-100">
                Sign In
              </Link>
            </View> 
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default SignUp