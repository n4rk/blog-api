var privateRouter 	= require("express").Router()
var publicRouter 	= require("express").Router()

require('./users')(privateRouter)
require('./articles')(privateRouter)
require('./tags')(privateRouter)
require('./comments')(privateRouter)
require('./auth')(publicRouter)

module.exports ={
	private: privateRouter,
	public: publicRouter
}