package main

import (
	"http/templates"
	"net/http"
)

var temp = templates.Must(templates.ParseGlob("templates/*html"))

func main() {
	http.HandleFunc("/", index)
	http.ListenAndServe(":8000", nil)
}

func index(w http.ResponseWriter, r *http.Request) {
	temp.ExecuteTemplate(w, "index", nil)
}
