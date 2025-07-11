import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../config/firebase'

export default function HomeScreen() {
  const handleLogout = async()=>{
    await signOut(auth);
  }
  return (
   <SafeAreaView className='flex-1 flex-row justify-center items-center'>
    <Text className='text-lg'>Home page</Text>
    <TouchableOpacity
    onPress={handleLogout} className='p-1 bg-red-400 rounded-lg'
    >
    <Text className='text-white text-lg font-bold'>Logout</Text>
    </TouchableOpacity>

   </SafeAreaView>
  )
}