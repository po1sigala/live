module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1],
    },
  });

  // Add a belongsTo association to Authors here
<<<<<<< HEAD
  // Example: https://github.com/sequelize/express-example/blob/3fca27909b3ec9d72874ebe3317ffd8e5842b17e/models/task.js
=======
>>>>>>> c49247dba96cf559abec5076064d89253a25b3d7
  return Post;
};
