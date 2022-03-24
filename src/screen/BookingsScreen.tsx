import React from 'react';
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

const BookingsScreen: React.FC<Props> = ({ bookings, navigation }) => {
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
            </View>
            <FlatList
              data={_.toArray(bookings)}
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
