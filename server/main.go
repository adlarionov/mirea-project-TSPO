package main

import (
	"fmt"
	"net/http"
)

func main() {

	http.HandleFunc("/", func(responseWriter http.ResponseWriter, request *http.Request) {
		fmt.Fprintf(responseWriter, "Hello world! %s", request.URL.Path)
	})

	http.ListenAndServe(":80", nil)
}
