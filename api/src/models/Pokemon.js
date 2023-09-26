const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vida: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ataque:{
      type: DataTypes.STRING,
      
      allowNull: false,
    },
    defensa: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    velocidad: {
      type: DataTypes.STRING,
      
    },
    altura: { 
      type: DataTypes.STRING,
      
    },
    peso: {
      type: DataTypes.STRING,
      
    },
    createdInDb: {
      type:DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    tipoPokemon: {
      type:DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    }
  },
  );
};
