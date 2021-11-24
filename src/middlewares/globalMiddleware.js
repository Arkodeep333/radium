// let captureInfo = function (req, res, next) {
//     let acceptHeaderValue = req.headers['accept']
    // req.headers['batch']='Radium'
    // console.log('Global middleware called')
    // res.send('Global middleware called')
// }
const validateAppType = function(req, res, next){
    let appTypeHeader = req.headers['isfreeapp']
    let isAppFree
    if(!appTypeHeader) {
        return res.send({message: 'Mandatory header missing'})
    }

    if(appTypeHeader === 'false') {
        isAppFree = false
    } else {

        isAppFree = true
    }
    req.isFreeAppUser = isAppFree

    next()
}

module.exports.validateAppType = validateAppType
// module.exports.captureInfo = captureInfo