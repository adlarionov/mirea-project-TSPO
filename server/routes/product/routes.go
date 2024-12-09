package routes

import (
	auth "shop.co/controllers/auth"
	product "shop.co/controllers/product"
	"shop.co/middlewares"

	"github.com/gin-gonic/gin"
)

func ProductRoutes(router *gin.Engine) {
	// Авторизация
	router.POST("/register", auth.Register)
	router.POST("/login", auth.Login)

	// CRUD для продуктов, защищен middleware
	auth := router.Group("/")
	auth.Use(middlewares.AuthMiddleware())
	{
		auth.GET("/products", product.GetProducts)
		auth.GET("/products/:id", product.GetProduct)
		auth.POST("/products", product.CreateProduct)
		auth.PUT("/products/:id", product.UpdateProduct)
		auth.DELETE("/products/:id", product.DeleteProduct)
	}
}
