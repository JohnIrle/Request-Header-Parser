# Request-Header-Parser
An express app that parses the header of a request and returns a JSON object with the IP address, language and operating system of the requester.  

## Usage
Visiting [https://carnelian-button.glitch.me/api/whoami](https://carnelian-button.glitch.me/api/whoami) returns a JSON object.

```JSON
{
  "ipaddress": "IP address",
  "language": "language",
  "software": "operating system"
}
```
