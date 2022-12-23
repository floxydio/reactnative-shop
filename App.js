import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  // const data = [{title: 'Hai dari Dio'}, {title: 'Hai dari Cokro'}];
  const [username, setUsername] = useState();
  const [todosList, setTodosList] = useState([]);

  async function getTodos() {
    await fetch('https://fakestoreapi.com/products', {method: 'GET'})
      .then(res => res.json())
      .then(data => setTodosList(data));
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <Text
        style={{
          marginLeft: 10,
          marginTop: 20,
          fontSize: 28,
          fontWeight: 'bold',
        }}>
        FLOX SHOP
      </Text>
      <ScrollView horizontal={true}>
            
      </ScrollView>
      <Text
        style={{
          fontSize: 25,
          fontWeight: '700',
          marginLeft: 10,
          marginTop: 20,
        }}>
        Kebutuhan Anda
      </Text>
      <FlatGrid
        itemDimension={130}
        data={todosList}
        spacing={10}
        renderItem={({item}) => (
          <View>
            <Image
              source={{
                uri: item.image,
              }}
              style={{height: 200, borderRadius: 10}}
            />
            <Text
              style={{
                fontSize: 16,
              }}>
              {item.title}
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>${item.price}</Text>
              <Icon name="star" color="gold" size={12}>
                <Text style={{color: 'black'}}>{item.rating.rate}</Text>
              </Icon>
            </View>
          </View>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
    backgroundColor: 'white',
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});
