package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

func main() {
	// Get port from environment variable 
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	// Routes
	http.HandleFunc("/", homeHandler)
	http.HandleFunc("/health", healthHandler)

	fmt.Println("Server running on port:", port)

	// Start server
	log.Fatal(http.ListenAndServe(":"+port, nil))
}

// Handlers
func homeHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello, There \n")
}

func healthHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "OK")
}
