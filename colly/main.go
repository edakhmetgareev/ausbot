package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/PuerkitoBio/goquery"
	"github.com/gocolly/colly/v2"
	"github.com/joho/godotenv"
	"github.com/robertkrimen/otto"
)

func main() {
	godotenv.Load()
	domain := "otv.verwalt-berlin.de"
	url := "https://otv.verwalt-berlin.de/ams/TerminBuchen/wizardng?sprachauswahl=en"
	// urlWithProcessId := "https://otv.verwalt-berlin.de/ams/TerminBuchen/wizardng/006248b7-e345-42c0-a10f-9ac3146a74e3"

	client := http.Client{
		CheckRedirect: func(req *http.Request, via []*http.Request) error {
			fmt.Printf("Rediredted: %s \n", req)
			return nil
		},
	}

	res, err := client.Get(url)
	if err != nil {
		log.Fatal(err)
		return
	}

	cookies := res.Cookies()
	token := getSessionToken(cookies)
	if token == "" {
		log.Fatal("no token")
		return
	}

	doc, err := goquery.NewDocumentFromReader(res.Body)

	firstScript := doc.Find("script").Next()
	fmt.Println("Doc: ", doc.Text(), firstScript.Text())

	vm := otto.New()

	x, err := vm.Run(firstScript.Text())
	check(err)
	fmt.Println(x)

	// Instantiate default collector
	c := colly.NewCollector(
		colly.AllowedDomains(domain),
	)

	fmt.Println(c)
	// // On every a element which has href attribute call callback
	// c.OnHTML("a[href]", func(e *colly.HTMLElement) {
	// 	link := e.Attr("href")
	// 	if link == "?mfDirect=true" {
	// 		fmt.Printf("Link found: %q -> %s\n", e.Text, link)
	// 		c.Visit(e.Request.AbsoluteURL(link))
	// 	}
	//
	// 	fmt.Printf("Link found: %q -> %s\n", e.Text, link)
	// })
	//
	// // Before making a request print "Visiting ..."
	// c.OnRequest(func(r *colly.Request) {
	// 	fmt.Println("Visiting", r.URL.String())
	// })
	//
	// // Start scraping on https://hackerspaces.org
	// c.Visit(url)
}

func getSessionToken(cookies []*http.Cookie) string {
	var token string
	for _, c := range cookies {
		if c.Name == "JSESSIONID" {
			token = c.Value
		}
	}
	return token
}

func check(err error) {
	if err != nil {
		log.Fatal(err)
	}
}
