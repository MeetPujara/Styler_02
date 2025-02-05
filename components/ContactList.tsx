import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';


export default function ContactList() {

  const [isExpanded, setIsExpanded] = useState(false)
  

  const contacts = [
    {
      uid: 1,
      name: 'Hitesh Choudhary',
      status: 'Just an extra ordinary teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
      uid: 2,
      name: 'Anurag Tiwari',
      status: 'I ❤️ To Code and Teach!',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
    {
      uid: 5,
      name: 'Tanay Pratap',
      status: 'Engineer turned educator | Invact Metaversity',
      imageUrl: 'https://avatars.githubusercontent.com/u/13540669?v=4',
    },
    {
      uid: 6,
      name: 'Akshay Saini',
      status: 'Bringing Fun to JavaScript Learning!',
      imageUrl: 'https://avatars.githubusercontent.com/u/16986428?v=4',
    },
    {
      uid: 7,
      name: 'Rohit Gohri',
      status: 'Full Stack Developer & Open Source Enthusiast',
      imageUrl: 'https://avatars.githubusercontent.com/u/10333860?v=4',
    },
    {
      uid: 8,
      name: 'Manoj Kumar',
      status: 'Software Engineer @ LambdaTest | Open Source Contributor',
      imageUrl: 'https://avatars.githubusercontent.com/u/1571086?v=4',
    },
    {
      uid: 9,
      name: 'Kunal Kushwaha',
      status: 'DevRel | Open Source | CNCF | Teaching DevOps',
      imageUrl: 'https://avatars.githubusercontent.com/u/42698533?v=4',
    },
    {
      uid: 10,
      name: 'Gaurav Sen',
      status: 'Educator | System Design & DSA',
      imageUrl: 'https://avatars.githubusercontent.com/u/1482809?v=4',
    },
  ];

   const visibleContacts = isExpanded ? contacts : contacts.slice(0, 4)

  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {visibleContacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      {/* Toggle Button */}
      <TouchableOpacity
        onPress={() => setIsExpanded(!isExpanded)}
        style={styles.toggleButton}>
        <Text style={styles.toggleButtonText}>
          {isExpanded ? 'Show Less' : 'More Profiles'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    backgroundColor: '#273c75',
    padding: 4,
    borderRadius: 10,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 14,
  },
  userName: {
    fontSize: 18,
    fontWeight: 600,
    color: '#ffffff',
  },
  userStatus: {
    fontSize: 12,
    color: '#ffffff',
  },
  toggleButton: {
    backgroundColor: '#ffffff',
    width: 130,
    alignSelf: 'center', 
    justifyContent: 'center',
    alignItems: 'center', 
    marginTop: 10,
    borderRadius: 90,
    paddingVertical: 10, 
  },
  toggleButtonText: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
