import { Alert, Button, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import ScreenWrapper from '../components/ScreenWrapper';
import { getUserData } from '../services/userService';
import { hp, wp } from '../helpers/comman';
import { theme } from '../constants/theme';
import Icon from '../assets/icons';
import { useNavigation } from '@react-navigation/native';
import Avatar from '../components/Avatar';
import { UserContext } from '../context/UserProvider';

const Home = () => {
  const { userProviderContext, setUserProviderContext } = useContext(UserContext);
  const userProfile = userProviderContext;
  const navigation = useNavigation();

  return (
    <ScreenWrapper bg={'white'}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>LinkUp</Text>
          <View style={styles.icon}>
            <Pressable
              onPress={() => {
                navigation.navigate('notification');
              }}
            >
              <Icon name="heart" size={hp(3.2)} color={theme.colors.text} />
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate('newPost');
              }}
            >
              <Icon name="plus" size={hp(3.2)} color={theme.colors.text} />
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate('profile');
              }}
            >
              <Avatar
                uri={userProfile?.image}
                size={hp(4.3)}
                rounded={theme.radius.sm}
                style={{ borderWidth: 2 }}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginHorizontal: wp(4),
  },
  title: {
    color: theme.colors.text,
    fontSize: hp(3.2),
    fontWeight: theme.fonts.bold,
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 18,
  },
});




