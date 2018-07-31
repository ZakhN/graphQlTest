const db = {
  locations: [
    {
      _id: '1', name: 'Огород бабушки Леши', status: 'FULL', coordinates: { lat: 23.5, lng: 12.5 },
    },
    {
      _id: '2', name: 'Кафе Русь', status: 'EMPTY', coordinates: { lat: 23.2, lng: 12.1 },
    },
    {
      _id: '3', name: 'Туалет ЮФУ', status: 'EMPTY', coordinates: { lat: 23.3, lng: 12.2 },
    },
  ],
  couriers: [
    {
      _id: '1', firstName: 'Nickolay', lastName: 'Zakh', locations: ['2'],
    },
  ],
  users: [
    { _id: '1', email: 'user@mail.ru' },
  ],
};

export default db;
