import { useState } from 'react';
import {FlatList, SafeAreaView, View, StyleSheet} from 'react-native'
import RepositoryItem, { Props } from './RepositoryItem'

const repositories = [
  {
    id: 'jaredpalmer.formik',
    fullName: 'jaredpalmer/formik',
    description: 'Build forms in React, without the tears',
    language: 'TypeScript',
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4, 
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
  },
  {
    id: 'rails.rails',
    fullName: 'rails/rails',
    description: 'Ruby on Rails',
    language: 'Ruby',
    forksCount: 18349,
    stargazersCount: 45377,
    ratingAverage: 100,
    reviewCount: 2,
    ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
  },
  {
    id: 'django.django',
    fullName: 'django/django',
    description: 'The Web framework for perfectionists with deadlines.',
    language: 'Python',
    forksCount: 21015,
    stargazersCount: 48496,
    ratingAverage: 73,
    reviewCount: 5,
    ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
  },
  {
    id: 'reduxjs.redux',
    fullName: 'reduxjs/redux',
    description: 'Predictable state container for JavaScript apps',
    language: 'TypeScript',
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
  },
];

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  }
})
const RepositoryList = () => {
  // const [modifiedList, setModifiedList] = useState(repositories)
  const renderItem = ({ item }: Props) => {


  // const convertToDecimal = (val: Number) => {
  //   let valToStringArr = val.toString().split('')
  //   valToStringArr.splice(2,0, '.')
  //   let newVal = Number(parseFloat(valToStringArr.join('')).toFixed(1))
  //   return newVal 
  // }
  // modifiedList.map((item) : any => {
  //   if(item.forksCount >= 1000) {
  //     item.forksCount = convertToDecimal(item.forksCount)
  //     setSelectedId(item.id)
  //   }
  //   if(item.ratingAverage >= 1000) {
  //     item.ratingAverage = convertToDecimal(item.ratingAverage)
  //     // setSelectedId(item.id)
  //   }
  //   if(item.reviewCount >= 1000)  {
  //     item.reviewCount = convertToDecimal(item.reviewCount)
  //     // setSelectedId(item.id)
  //   }
  //   if(item.stargazersCount >= 1000) {
  //     item.stargazersCount = convertToDecimal(item.stargazersCount)
  //     // setSelectedId(item.id)
  //   }

  //   return item
  // })

    return(
      <RepositoryItem item={item} />
    )
  }

  return(
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={repositories}
        renderItem={renderItem}
      />
    </SafeAreaView>
  )
}

export default RepositoryList