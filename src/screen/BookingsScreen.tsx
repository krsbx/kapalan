import React, { useMemo, useState } from 'react';
import _ from 'lodash';
import { connect, ConnectedProps } from 'react-redux';
import { SafeAreaView, View, FlatList } from 'react-native';
import { safeAreaViewStyle } from '../utils/styles';
import { IBookingsStackProps } from '../utils/interface';
import DefaultContainer from '../components/DefaultContainer';
import InnerContainer from '../components/InnerContainer';
import { RootState } from '../store';
import { getBookings } from '../store/selectors/bookings';
import DetailContainer from '../components/DetailContainer';
import AppTitle from '../components/AppTitle';
import SubTitle from '../components/SubTitle';
import { searchBookings } from '../utils/searchs';
import { Input } from 'react-native-elements';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const BookingsScreen: React.FC<Props> = ({ bookings, navigation }) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const filteredData = useMemo(() => {
    if (searchValue.trim() === '') return bookings;

    return searchBookings(bookings, searchValue);
  }, [bookings, searchValue]);

  return (
    <SafeAreaView style={safeAreaViewStyle.default}>
      <DefaultContainer>
        <InnerContainer>
          <View style={{ width: '100%' }}>
            <View
              style={{
                alignItems: 'center',
              }}
            >
              <AppTitle />
              <SubTitle subtitle={'Pemesanan'} />
              <Input
                value={searchValue}
                onChangeText={setSearchValue}
                autoCompleteType="off"
                placeholder="Cari Riwayat Pemesanan"
                leftIcon={<FontAwesome5Icon name="search" size={20} />}
              />
            </View>
            <FlatList
              data={_.toArray(filteredData)}
              renderItem={({ item, index }) => (
                <DetailContainer
                  booking={item}
                  key={index}
                  onPress={() =>
                    navigation.push('SelectedBooking', {
                      bookingId: item.id,
                    })
                  }
                />
              )}
            />
          </View>
        </InnerContainer>
      </DefaultContainer>
    </SafeAreaView>
  );
};

const mapStateToProps = (state: RootState) => ({
  bookings: getBookings(state),
});

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector> & IBookingsStackProps<'Bookings'>;

export default connector(BookingsScreen);
