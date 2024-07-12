import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import images from '../../constants/images'
import FormField from '../../components/FormField'
import { Link } from 'expo-router'
import CustomButton from '../../components/CustomButton'

const SignIn = () => {

  const { setUser, setIsLogged } = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert('Error', 'Please fill in all the fields');
      return;
    }

    setIsSubmitting(true);

    try {
      await signIn(form.email, form.password);
      const result = await getCurrentUser()
      setUser(result);
      setIsLogged(true);
      router.replace('/home');
    } catch (error) {
      console.log(error);
      Alert.alert('Error', error.message);
    } finally {
      setIsSubmitting(false);
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
            <Text className='text-2xl mx-auto text-orange-200 font-obold '>Log in to the App</Text>
            
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
              title="Sign In"
              handlePress={submit}
              containerStyles='mt-7'
              isLoading={isSubmitting}
            />
            <View className='justify-center pt-5 flex-row gap-2'>
              <Text className='text-lg text-gray-100 font-pregular'>
                Don't have an account?
              </Text>
              <Link href='/sign-up' className="text-lg font-psemibold text-secondary-100">
                Sign Up
              </Link>
            </View> 
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default SignIn