const sequelize = require('../config/connection');
const User = require('../models/User.js');

test('Does not accept null values', async () => {
  const user = {};

  const newUser = User.create(user);

  const checkUser = (newUser) => {
    if (!newUser) {
      throw new Error('User was not created');
    }
  };

  test('thorws error'),
    async () => {
      expect(() => {
        checkUser();
      }).toThrow('User was not created');

      expect(() => {
        checkUser();
      }).not.toThrow();
    };
});

// test('Prevents null values for email', async () => {
//   const user = {
//     username: '',
//     email: '',
//     password: '',
//   };
//   const newUser = User.build(user);

//   console.log(newUser.email);
//   return expect(newUser.email).toBeTruthy();
// });

// test('Prevents null values for password', async () => {
//   const user = {
//     username: '',
//     email: '',
//     password: '',
//   };
//   const newUser = User.build(user);

//   console.log(newUser.password);
//   return expect(newUser.password).toBeTruthy();
// });
