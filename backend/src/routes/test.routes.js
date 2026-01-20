const { Router } = require('express')

const testRoutes = Router()

testRoutes.get('/', (req, res) => {
    return res.status(200).json({ message: "Test route is working"})
})

module.exports = testRoutes