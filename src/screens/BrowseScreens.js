import {FlatList, StyleSheet, View} from 'react-native';

import {Pressable} from '@react-native-material/core';
import React from 'react';
import {GetUsers} from '../ApiCalls/GetUsers';
import TextComponent from '../components/Text/TextComponent';
import {browsingData} from '../data/BrowsingData';
import {COLORS} from '../theme/Colors';
import Metrics from '../theme/Metrics';

const BrowseScreens = ({route, navigation}) => {
  const itemId = route.params.itemId;
  const itemDetails = browsingData.find(item => item.id === itemId);
  // const {data, error, status} = GetUsers();
  const {
    data,
    isLoading,
    isFetching,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    error,
  } = GetUsers();

  const flattenData = data?.pages?.flatMap(item => item.response.Data.Users);

  console.log('flattenData', flattenData[0] ?? '');
  console.log('FirstName', flattenData[0]);

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* {data ? (
        data.pages.map((item, i) =>
          item.response.Data?.Users?.map(data => (
            <View key={data.Id}>
              <TextComponent text={data.FirstName} type="Bold" color="white" />
            </View>
          )),
        )
      ) : (
        <TextComponent text={'No Data'} type="Bold" color="white" />
      )} */}
      <FlatList
        data={flattenData}
        key={item => item.Id}
        renderItem={({item}) => (
          <View>
            <TextComponent
              text={item.FirstName}
              size={20}
              type="Bold"
              color="white"
            />
          </View>
        )}
        thres
      />
      <Pressable
        onPress={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
        style={{
          width: Metrics.screenWidth / 2,
          backgroundColor: COLORS.DARKER_GREY,
          padding: Metrics.scale(10),
          justifyContent: 'center',
          borderRadius: Metrics.scale(10),
          alignItems: 'center',
        }}>
        {isFetchingNextPage ? (
          <TextComponent text={'Loading more...'} type="Bold" color="white" />
        ) : hasNextPage ? (
          <TextComponent text={'Load more'} type="Bold" color="white" />
        ) : (
          <TextComponent
            text={'Nothing More to load'}
            type="Bold"
            color="white"
          />
        )}
      </Pressable>
    </View>
  );
};

export default BrowseScreens;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: 'white',
    padding: 30,
  },
  FlatListContainer: {
    width: '100%',
    alignItems: 'center',
    padding: Metrics.scale(10),
  },
  FlatListItem: {
    backgroundColor: COLORS.DARKER_GREY,
    margin: Metrics.scale(4),
    padding: Metrics.scale(10),
    borderRadius: Metrics.scale(10),
    justifyContent: 'space-around',
    alignItems: 'center',
    width: Metrics.screenWidth / 2 - Metrics.scale(20),
    height: Metrics.screenWidth / 5 - Metrics.scale(20),
    flexDirection: 'row',
  },
});
