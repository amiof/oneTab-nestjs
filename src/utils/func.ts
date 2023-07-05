import * as bcrypt from "bcryptjs"
const hashPassword = async (pass: string) => {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hashSync(pass, salt)
}


export { hashPassword }
