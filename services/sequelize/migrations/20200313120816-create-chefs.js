// the date at the start of the file name assists with keeping our migrations in order and that the convention for SQL

// in the concept og migrations there is what's known as an UP and a DOWN
// up means we are upgrading the database system by taking it from one migration to the next and it is increasing in complexity
// down is the oppposit
module.exports.up = (queryInterface, DataTypes) => {
  // create a table
  return queryInterface.createTable(
    "chefs",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE
      }
    },
    {
      charset: "utf8"
    }
  );
};

// drop a table
module.exports.down = queryInterface => queryInterface.dropTable("chefs");
