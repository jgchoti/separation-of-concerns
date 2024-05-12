// this file is the program's Entry Point
import { input } from '../components/input.js'
import { changeBackground } from '../logic/util.js'
import { DEFAULT_COLOR } from '../constant.js'
import { eventListener } from '../listeners/listener.js'

input()
changeBackground(DEFAULT_COLOR)
eventListener()