import Sequelize, { Model } from 'sequelize'
import Bcrypt from 'bcrypt'
const SALT = 12

class User extends Model {
  static init (sequelize) {
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.VIRTUAL,
      password_hash: Sequelize.STRING,
      provider: Sequelize.BOOLEAN
    },
    {
      sequelize
    })

    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await Bcrypt.hash(user.password, SALT)
      }
    })

    return this
  }

  static associate (models) {
    this.belongsTo(models.File, {
      foreignKey: 'avatar_id'
    })
  }

  checkPassword (password) {
    return Bcrypt.compare(password, this.password_hash)
  }
}

export default User
