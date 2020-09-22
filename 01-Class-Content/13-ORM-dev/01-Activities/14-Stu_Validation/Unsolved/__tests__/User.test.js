const sequelize = require('../config/connection');
const User = require('../models/User.js');

test('Check for user validation', async () => {
  const user = {
    username: 'test',
    email: 'test@email.com',
    password: 'password123',
  };
  const newUser = User.build(user);
  const validatedUser = await newUser.validate();
  console.log(validatedUser);
  return expect(validatedUser).toBeDefined();
});
