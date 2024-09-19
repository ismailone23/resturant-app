import jwt from 'jsonwebtoken'

export async function createtoken({ username, phone, password }: { username: string, phone: string, password: string }) {
    return await new Promise((resolve, reject) => jwt.sign({ username, phone, password, iat: Date.now().toLocaleString() },
        'topsupersecret',
        { algorithm: 'RS512', expiresIn: 24 * 60 * 60 },
        (err, token) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(token)
            }
        }))
}
export async function verifytoken(token: string) {
    return await new Promise((resolve, reject) => jwt.verify(token, 'topsupersecret', (err, data) => {
        if (err) {
            reject(err)
        }
        else {
            resolve(data)
        }
    }))
}