import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'

export default function profile() {
  return (
    <View>
      <ProfileTitle>profile</ProfileTitle>
    </View>
  )
}


const ProfileTitle = styled.Text`
color: #BF4F74;
`