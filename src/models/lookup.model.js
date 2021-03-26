module.exports = (conn, sequelize) => {

    const Lookup = conn.define('lookup', {

      id:{
        type:sequelize.BIGINT,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      name:{
        type:sequelize.STRING(50),
        allowNull:false
      },
      abbreviation:{
        type:sequelize.STRING(45),
        allowNull:false
      },
    },
    {
      timestamps:false
    })

    return Lookup
}
