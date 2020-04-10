import Sequelize, { Model } from 'sequelize'
const URL_FILE = 'http://localhost:3003/files/'
class File extends Model {
  static init (sequelize) {
    super.init({
      name: Sequelize.STRING,
      path: Sequelize.STRING,
      url: {
        type: Sequelize.VIRTUAL,
        get () {
          return `${URL_FILE}${this.path}`
        }
      }
    },
    {
      sequelize
    })

    return this
  }
}

export default File
