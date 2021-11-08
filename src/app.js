const logger= require('./util/logger')
const formatter= require('../validator/formatter')
const helper= require('./util/helper')

logger.loggingname('Arkodeep')
logger.welcomemessage()
console.log(logger.endpoint)

helper.date()
helper.month()
helper.batch()

formatter.trimming('    Arkodeep   ')
formatter.changetolower('ARKODEEP')
formatter.changetoupper('arkodeep')

const _ = require('lodash')
console.log(_.chunk(["Jan","Feb","Mar","Apr","May","June","July","August","Sept","Oct","Nov","Dec"],3))
console.log("_____________________________________________________________________________________________")
console.log(_.tail([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]))
console.log("_____________________________________________________________________________________________")
console.log(_.union([1], [2,2], [3], [4,5], [2,5]))
console.log("_____________________________________________________________________________________________")
console.log(_.fromPairs([['horror','The Shining'],['drama',"Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]))


