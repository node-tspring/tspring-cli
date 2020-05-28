import yargs from 'yargs'
import * as create from './command/create'

yargs
  .command(create)
  .help()
  .argv
