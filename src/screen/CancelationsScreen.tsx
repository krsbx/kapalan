import React, { useMemo, useState } from 'react';
import _ from 'lodash';
import { connect, ConnectedProps } from 'react-redux';
import { SafeAreaView, View, FlatList } from 'react-native';
import { safeAreaViewStyle } from '../utils/styles';
import { IBottomScreenProps } from '../utils/interface';
import DefaultContainer from '../components/DefaultContainer';
import InnerContainer from '../components/InnerContainer';
import { RootState } from '../store';
import DetailContainer from '../components/DetailContainer';
import { getCancelations } from '../store/selectors/cancelations';
import AppTitle from '../components/AppTitle';
import SubTitle from '../components/SubTitle';
import { searchBookings } from '../utils/searchs';
import { Input } from 'react-native-elements';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const CancelationsScreen: React.FC<Props> = ({ cancelations }) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const filteredData = useMemo(() => {
    if (searchValue.trim() === '') return cancelations;

    return searchBookings(cancelations, searchValue);
  }, [cancelations, searchValue]);

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
              <SubTitle subtitle={'Pembatalan'} />
              <Input
                value={searchValue}
                onChangeText={setSearchValue}
                autoCompleteType="off"
                placeholder="Cari Riwayat Pembatalan"
                leftIcon={<FontAwesome5Icon name="search" size={20} />}
              />
            </View>
            <FlatList
              data={_.toArray(filteredData)}
              renderItem={({ item, index }) => <DetailContainer booking={item} key={index} />}
            />
          </View>
        </InnerContainer>
      </DefaultContainer>
    </SafeAreaView>
  );
};

const mapStateToProps = (state: RootState) => ({
  cancelations: getCancelations(state),
});

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector> & IBottomScreenProps<'Cancelation'>;

export default connector(CancelationsScreen);
