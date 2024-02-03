module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
  });

//   sequelize.sync().then(() => {
//     console.log('Role table created successfully!');
//  }).catch((error) => {
//     console.error('Unable to create table : ', error);
//  });

  return User;
};