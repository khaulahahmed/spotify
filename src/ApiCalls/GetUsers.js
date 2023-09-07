import {useQuery, useInfiniteQuery} from 'react-query';

const getData = async ({pageParam = 1}) => {
  const response = await fetch(
    `https://proadminapi.foapp.com/api/users?Page=${pageParam}&Limit=5&FullName=`,
    {
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6MTc3OTQsImlhdCI6MTY5Mzk4MzE4NH0.-g0tpM3F6u8s49tAicmq9YrtNabW7LJd4VSqBB54-oM',
      },
    },
    {method: 'GET'},
  ).then(response => response.json());

  //   console.log('Data', response);
  return {response, nextPage: pageParam + 1};
};

export const GetUsers = () => {
  //   const {isLoading, data, error, status} = useQuery('data', getData);
  const {
    data,
    isLoading,
    fetchNextPage,
    error,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery('data', getData, {
    getNextPageParam: lastPage => {
      //   console.log('last Page', lastPage);
      return lastPage.nextPage;
    },
  });
  return {
    isLoading,
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};
