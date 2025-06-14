import { View, Text, SafeAreaView, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { themColor } from '../theme'
import { useNavigation } from '@react-navigation/native'

export default function WelcomScreen() {
  const navigation=useNavigation();
  return (
    
    <SafeAreaView className='flex-1'
    style={{backgroundColor:themColor.bgcolor}}
    >
  <View className='flex-1 flex justify-around py-4'>
    <Text className='text-white font-bold text-4xl text-center'>
      Let`s Get Started!
    </Text>
    <View className='flex-row justify-center '>
      <Image source={require('../assets/images/welcome.jpg')}
      style={{height:350 ,width:350}}
      className='rounded-3xl'
      />

    </View>
    <View className='space-y-4'>
      <TouchableOpacity className='py-3 bg-yellow-700 mx-7 rounded-xl'
      onPress={()=> navigation.navigate('SignUp')}
      >
        
        <Text className='text-xl font-bold text-center text-gray-700'>
          Sign Up
        </Text>
      </TouchableOpacity>
      <View className='flex-row justify-center'>
        <Text className='text-white font-semibold'>
          Aready have an account! 
        </Text>
        <TouchableOpacity
        onPress={()=> navigation.navigate('Login')}
        >
          <Text className='font-semibold text-yellow-400'>  Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
    </SafeAreaView>
  )
}