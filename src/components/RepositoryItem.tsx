import {Text, View, Image, StyleSheet, Pressable, Button} from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import theme from '../theme'

export type Props = {
  item: {
    id: string,
    fullName: string,
    description: string,
    language: string,
    forksCount: number,
    stargazersCount: number,
    ratingAverage: number,
    reviewCount: number,
    ownerAvatarUrl: string,
  }
}

const styles = StyleSheet.create({
  img: {
    width: 56,
    height: 56,
    borderRadius: 5,
  },
  repoWrapper: {
    flexDirection: 'row',
  },
  titleContainer: {
    marginLeft: 16,
  },
  author: {
    color: theme.colors.titleColor,
    fontSize: theme.fontSize.titleFontSize,
    marginBottom: 8,
  },
  description: {
    color: theme.colors.descriptionTextColor,
    fontSize: theme.fontSize.descriptionSize,
  },
  languageStyle: {
    color: theme.colors.whiteTextColor,
    backgroundColor: theme.colors.languageBg,
    paddingVertical: 8,
    paddingHorizontal: 16,
    width: 'max-content',
    borderRadius: 5,
    marginVertical: 16,
    fontWeight: '600',
    fontSize: theme.fontSize.descriptionSize,
  },
  statsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  stat: {
    alignItems: 'center',
  },
  statFigure: {
    fontWeight: 'bold',
    fontSize: theme.fontSize.titleFontSize
  }

})

const RepositoryItem = ({ item }: Props) => {
 
  return (
    <View style={{marginVertical: 16}}>
      <View style={styles.repoWrapper}>
        <Image source={{uri: item.ownerAvatarUrl}} style={styles.img}/>
        <View style={styles.titleContainer}>
          <Text style={styles.author}>{item.fullName}</Text>
          <Text style={styles.description}>
            {item.description}
          </Text>
            <Text style={styles.languageStyle}>{item.language}</Text>
        </View>
      </View>
      <View style={styles.statsWrapper}>
        <View style={styles.stat}>
          <Text style={styles.statFigure}>{item.forksCount}</Text>
          <Text style={styles.description}>Forks</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statFigure}>{item.stargazersCount}</Text>
          <Text style={styles.description}>Stars</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statFigure}>{item.reviewCount}</Text>
          <Text style={styles.description}>Reviews</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statFigure}>{item.ratingAverage}</Text>
          <Text style={styles.description}>Rating</Text>
        </View>
      </View>
    </View>
  ) 
}
	
export default RepositoryItem 