const COLOR_PALETTE = {
  DEEP_BLUE: {
    100: '#BBE1FA',
    200: '#3282B8',
    300: '#0F4C75',
    400: '#1B262C',
  },
  LIGHT_BLUE: {
    100: '#EFFFFD',
    200: '#B8FFF9',
    300: '#85F4FF',
    400: '#42C2FF',
  },
} as const;

const PLACEHOLDER = {
  DEPART: 'Pilih Pelabuhan Awal',
  ARRIVAL: 'Pilih Pelabuhan Tujuan',
  SERVICES: 'Pilih Layanan',
  DATE: 'Pilih Tanggal dan Jam Masuk',
};

const HARBOUR = {
  DEPART: {
    id: 'DEPART',
    name: 'Pilih Pelabuhan Awal',
  },
  ARRIVAL: {
    id: 'ARRIVAL',
    name: 'Pilih Pelabuhan Tujuan',
  },
  PELABUHUAN_JAYA: {
    id: 'PELABUHUAN_JAYA',
    name: 'Pelabuhan Jaya',
  },
  SEBUAH_PELABUHAN: {
    id: 'SEBUAH_PELABUHAN',
    name: 'Sebuah Pelabuhan',
  },
  PELABUHAN_BARU: {
    id: 'PELABUHAN_BARU',
    name: 'Pelabuhan Baru',
  },
  PELABUHAN_LAMA: {
    id: 'PELABUHAN_LAMA',
    name: 'Pelabuhan Lama',
  },
  SEBUAH_TEMPAT: {
    id: 'SEBUAH_TEMPAT',
    name: 'Sebuah Tempat',
  },
} as const;

const SERVICES = {
  SERVICES: {
    id: 'SERVICES',
    name: 'Pilih Layanan',
    prices: {
      CHILDREN: 20,
      ADULT: 30,
    },
  },
  REGULER: {
    id: 'REGULER',
    name: 'Reguler',
    prices: {
      CHILDREN: 20,
      ADULT: 30,
    },
  },
  EXPRESS: {
    id: 'EXPRESS',
    name: 'Express',
    prices: {
      CHILDREN: 35,
      ADULT: 45,
    },
  },
  VIP: {
    id: 'VIP',
    name: 'VIP',
    prices: {
      CHILDREN: 60,
      ADULT: 80,
    },
  },
} as const;

const CALC_TABLE = {
  SERVICES: {
    CHILDREN: {
      multiplier: 1,
      bookingFee: 0,
    },
    ADULT: {
      multiplier: 1,
      bookingFee: 0,
    },
  },
  REGULER: {
    CHILDREN: {
      multiplier: 1.5,
      bookingFee: 5,
    },
    ADULT: {
      multiplier: 1.5,
      bookingFee: 10,
    },
  },
  EXPRESS: {
    CHILDREN: {
      multiplier: 1.5,
      bookingFee: 15,
    },
    ADULT: {
      multiplier: 1.5,
      bookingFee: 20,
    },
  },
  VIP: {
    CHILDREN: {
      multiplier: 1.5,
      bookingFee: 25,
    },
    ADULT: {
      multiplier: 1.5,
      bookingFee: 30,
    },
  },
};

const PEOPLE = {
  ADULT: 'Dewasa',
  CHILDREN: 'Anak-anak',
};

const GENDER = {
  PRIA: 'Laki-Laki',
  WANITA: 'Perempuan',
} as const;

// TODO: Fill this later
const SCHEDULE = {};

export { COLOR_PALETTE, HARBOUR, SERVICES, CALC_TABLE, SCHEDULE, PLACEHOLDER, PEOPLE, GENDER };
