# Request-Header-Parser

An express app that parses the header of a request and returns a JSON object with the IP address, language and operating system of the requester.  

## Usage

Visiting [https://carnelian-button.glitch.me/api/whoami](https://carnelian-button.glitch.me/api/whoami) returns a JSON object.

Local development is localhost:5000/api/whoami

```JSON
{
  "ipaddress": "IP address",
  "language": "language",
  "software": "operating system"
}
```

### Installing

```node
npm install
```

## Local development

```node
npm run dev
```

## Building

```node
npm run build
```

and run with:

```node
npm run start
```


## Built With

* [Express](https://github.com/expressjs/express) - Handles requests and header parsing.  

## Author

* **John Irle** - [JohnIrle](https://github.com/JohnIrle)
