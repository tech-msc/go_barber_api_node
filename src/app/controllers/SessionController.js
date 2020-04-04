import jwt from 'jsonwebtoken'
import User from '../models/User.js'

import authConfig from '../../config/auth'

const JWT_TOKEN_SECRET = '062c4e8941db8c045e5885bf29a5a17c'

class SessionController {
  async store (req, res) {
    const { email, password } = req.body

    const user = await User.findOne({ where: { email } })

    if (!user) {
      return res.status(401).json({ error: 'User not found' })
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' })
    }

    const { id, name } = user

    return res.json({
      user: {
        id,
        name,
        email
      },
      token: jwt.sign({ id }, JWT_TOKEN_SECRET, {
        expiresIn: '11d'
      })
    })
  }
}

export default new SessionController()
