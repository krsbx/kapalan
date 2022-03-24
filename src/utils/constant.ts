import { IBookings } from './reducerInterface';

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
const SCHEDULE: IBookings = {
  1: {
    id: 1,
    arrival: 'PELABUHAN_BARU',
    departure: 'PELABUHAN_LAMA',
    createdAt: '2020-01-02',
    service: 'EXPRESS',
    date: '2020-03-21T09:00:00.000Z',
    person: 'ADULT',
    total: 4,
    orderPerson: {
      fullName: 'John Doe',
      age: 30,
      gender: 'PRIA',
    },
  },
  2: {
    id: 2,
    arrival: 'PELABUHUAN_JAYA',
    departure: 'SEBUAH_PELABUHAN',
    createdAt: '2020-03-02',
    service: 'EXPRESS',
    date: '2020-03-22T09:00:00.000Z',
    person: 'CHILDREN',
    total: 2,
    orderPerson: {
      fullName: 'Jane Doe',
      age: 14,
      gender: 'WANITA',
    },
  },
  3: {
    id: 3,
    arrival: 'SEBUAH_TEMPAT',
    departure: 'SEBUAH_PELABUHAN',
    createdAt: '2021-03-02',
    service: 'EXPRESS',
    date: '2021-03-22T09:00:00.000Z',
    person: 'ADULT',
    total: 2,
    orderPerson: {
      fullName: 'Jane Doe',
      age: 22,
      gender: 'WANITA',
    },
  },
  4: {
    id: 4,
    arrival: 'SEBUAH_PELABUHAN',
    departure: 'SEBUAH_TEMPAT',
    createdAt: '2022-03-18',
    service: 'REGULER',
    date: '2022-03-22T09:00:00.000Z',
    person: 'CHILDREN',
    total: 2,
    orderPerson: {
      fullName: 'James Doe',
      age: 13,
      gender: 'PRIA',
    },
  },
  5: {
    id: 5,
    arrival: 'SEBUAH_PELABUHAN',
    departure: 'PELABUHAN_BARU',
    createdAt: '2022-03-21',
    service: 'VIP',
    date: '2022-03-23T09:00:00.000Z',
    person: 'CHILDREN',
    total: 2,
    orderPerson: {
      fullName: 'Michael',
      age: 12,
      gender: 'PRIA',
    },
  },
};

const AVATAR_URI =
  'https://media-exp1.licdn.com/dms/image/C5603AQE4ptdWOzR12A/profile-displayphoto-shrink_800_800/0/1610812548641?e=1653523200&v=beta&t=O3X7g-ju1FOxXGX4AL3xuoy4V10H36hkZUaqArrECgU';

const MEDIA = {
  LINKEDIN: 'https://www.linkedin.com/in/muhammad-firdaus-sati-7a0b541b6/',
  GITHUB: 'https://github.com/krsbx',
};

export {
  COLOR_PALETTE,
  HARBOUR,
  SERVICES,
  CALC_TABLE,
  SCHEDULE,
  PLACEHOLDER,
  PEOPLE,
  GENDER,
  AVATAR_URI,
  MEDIA,
};
