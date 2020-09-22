const sequelize = require('../config/connection');
const User = require('../models/User.js');

test('Prevents null values', async () => {
  const user = {
    username: '',
    email: '',
    password: '',
  };
  const newUser = User.build(user);
  console.log(newUser);
  return expect(newUser.email).toBeNull();
});
