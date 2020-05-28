import fs from 'fs-extra'
import path from 'path'

export const command = 'create <projectName>'

export const describe = 'create tspring project'

export const builder = {

}

export function handler (argv: any) {

  const projectPath = argv.projectName

  if (!fs.existsSync(projectPath)) {
    fs.mkdirSync(projectPath)
  }
  fs.copy(path.join(__dirname, '../template'), projectPath)
}
