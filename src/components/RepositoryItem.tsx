import {Text, View} from 'react-native'

export type Props = {
  item: {
    fullname: string,
    description: string,
    language: string,
    forksCount: number,
    stargazersCount: number,
    ratingAverage: number,
    reviewCount: number,
  }
}
const RepositoryItem = ({ item }: Props) => {
  return (
    <View style={{marginVertical: 16}}>
      <Text >Full Name: {item.fullname}</Text>
      <Text>Description: {item.description}</Text>
      <Text>Language: {item.language}</Text>
      <Text>Forks: {item.forksCount}</Text>
      <Text>Stars: {item.stargazersCount}</Text>
      <Text>Rating: {item.ratingAverage}</Text>
      <Text>Number of Reviews: {item.reviewCount}</Text>
    </View>
  )
}

export default RepositoryItem