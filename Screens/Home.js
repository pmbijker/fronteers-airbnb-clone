import React from 'react';
import { FlatList, Image, ScrollView, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const Categories = ({ data }) => {
  return (<View>
    <Text style={ styles.subHeading }>Waar ben je naar op zoek?</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={ false }>
      <FlatList
          style={ styles.categoryList }
          horizontal
          data={ data }
          renderItem={ ({ item, index }) => <View style={ EStyleSheet.child(styles, 'category', index, 3) }>
            <Image
              style={ styles.categoryImage }
              source={{ uri: item.image }}
            />
            <Text style={ styles.categoryText }>{ item.title }</Text>
          </View> }
        />
      </ScrollView>
  </View>)
}

export default class Home extends React.Component {
  render() {
    const categories = [
      { "key": "1", "title": "Woningen", "image": "https://a0.muscache.com/im/pictures/8b7519ec-2c82-4c09-8233-fd4d2715bbf9.jpg?aki_policy=small" },
      { "key": "2", "title": "Ervaringen", "image": "https://a0.muscache.com/im/pictures/cb8b3101-d419-4c17-8e2f-4989b39b98c3.jpg?aki_policy=small" },
      { "key": "3", "title": "Restaurants", "image": "https://a0.muscache.com/im/pictures/da2d8e97-90b7-409f-94ac-5ab0327c289b.jpg?aki_policy=small" }
    ]

    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={ false }>
          <Categories data={categories} />
        </ScrollView>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subHeading: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    margin: 10,
  },
  categoryList: {
    flex: 1,
    width: '100%'
  },
  category: {
    width: 150,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginLeft: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2
  },
  'category:last-child': {
    marginRight: 10
  },
  categoryImage: {
    borderRadius: 5,
    width: 148,
    height: 98
  },
  categoryText: {
    padding: 5,
    shadowOpacity: 0
  },
});
