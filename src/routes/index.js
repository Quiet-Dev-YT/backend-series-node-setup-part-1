const { Router } = require('express')
const testRoutes = require('./test.routes')
const router = Router()

router.use('/test', testRoutes)

module.exports = router