module.exports = {
  up: async function (migration, DataTypes) {
    await migration.createTable('Carts', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING(128),
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      deletedAt: DataTypes.DATE
    })

    await migration.addIndex('Carts', ['email'], {
      indexName: 'email_index',
      indicesType: 'UNIQUE'
    })
  },

  down: async function (migration, DataTypes) {
    await migration.dropTable('Carts')
  }
}
