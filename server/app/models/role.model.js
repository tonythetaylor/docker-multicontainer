module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("roles", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      }
    });

    // sequelize.sync().then(() => {
    //     console.log('Role table created successfully!');
    //  }).catch((error) => {
    //     console.error('Unable to create table : ', error);
    //  });
  
    return Role;
  };