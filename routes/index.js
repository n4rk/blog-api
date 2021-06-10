var privateRouter 	= require("express").Router()
var publicRouter 	= require("express").Router()

require('./users')(privateRouter)
require('./auth')(publicRouter)

module.exports ={
	private: privateRouter,
	public: publicRouter
}