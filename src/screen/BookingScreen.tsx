import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import DatePicker from 'react-native-date-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialComIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLOR_PALETTE } from '../utils/constant';
import { safeAreaViewStyle } from '../utils/styles';
import { IBookingScreenProps } from '../utils/interface';
import HarbourModal from '../components/modals/HaborModal';

const BookingScreen: React.FC<Props> = ({}) => {
  const [date, setDate] = useState<Date | undefined>();
  const [isOpen, setIsOpen] = useState(false);
  const [departOpen, setDepartOpen] = useState(false);

  return (
    <SafeAreaView style={safeAreaViewStyle.default}>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>KAPALAN</Text>
          <View
            style={{
              marginVertical: 10,
            }}
          >
            <Text>Pelabuhan Awal</Text>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginVertical: 10,
              }}
            >
              <MaterialComIcons name="sail-boat" size={35} />
              <Input
                autoCompleteType={'off'}
                containerStyle={{
                  width: '90%',
                  height: 35,
                }}
                placeholder="Pilih Pelabuhan Awal"
              />
            </View>
          </View>
          <View
            style={{
              marginVertical: 10,
            }}
          >
            <Text>Pelabuhan Tujaun</Text>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginVertical: 10,
              }}
            >
              <MaterialComIcons name="sail-boat" size={35} />
              <Input
                autoCompleteType={'off'}
                containerStyle={{
                  width: '90%',
                  height: 35,
                }}
                placeholder="Pilih Pelabuhan Tujaun"
              />
            </View>
          </View>
          <Button
            containerStyle={{
              width: '100%',
            }}
            buttonStyle={{
              backgroundColor: 'transparent',
            }}
            iconPosition={'left'}
            icon={<MaterialIcons name="date-range" size={35} />}
            title="Cari"
            onPress={() => setDepartOpen(true)}
          />
        </View>
      </View>
      <HarbourModal isOpen={departOpen} onClose={() => setDepartOpen(false)} />
      <DatePicker
        modal
        open={isOpen}
        onConfirm={(newDate) => {
          setDate(newDate);
          setIsOpen(false);
        }}
        onCancel={() => setIsOpen(false)}
        date={date || new Date()}
        onDateChange={setDate}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLOR_PALETTE.LIGHT_BLUE['200'],
  },
  container: {
    flex: 0.85,
    backgroundColor: 'white',
    alignItems: 'center',
    margin: '5%',
    padding: 20,
    borderRadius: 25,
  },
  title: {
    padding: 15,
    fontSize: 30,
    color: COLOR_PALETTE.DEEP_BLUE['400'],
    fontWeight: '700',
  },
});

type Props = IBookingScreenProps<'Booking'>;

export default BookingScreen;
