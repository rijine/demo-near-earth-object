# Backend Coding Practice

## Using
- Node.js + express server
- All code is in Typescript
- Test are partially written using Jest
- Basic Docker file is created - tested in container (docker-compose.yaml is not created)

## To Run
- clone repo
- start mongo
- update configuration mongo connection string in /config/db.config.ts if necessary
- npm install
- npm build
- npm run serve

# Accessing Apis
  - hit rollup api first to migrate data from nasa.
  - remaining api calls can perform now. Refer table below.


## References
|No. |Api| Route| Parameters|Description|
|:--- |:--- |:--- |:--- |:--- |
| 1| default| / | - | returns {hello: "world"}|
| 2| version | /api/version | - | returns {version: "v1"}|
| 3| rollup | /neo/rollup | -| pull asteroids information from api and push to db|
||||||
|4| hazardous | /neo/hazardous | | returns all hazardous asteroids from the db|
|5| fastest | /neo/fastest | hazardous=true/false | returns fastest hazardous/non hazardous asteroids from the db based on parameter|
|6| best-year | /neo/best-year | hazardous=true/false | returns a year and no asteroids based on count hazardous/non hazardous asteroids from the db|
|7| best-month | /neo/best-year | hazardous=true/false | returns a month and no asteroids based on count hazardous/non hazardous asteroids from the db|


# Dockerize
Basic: Docker file is attached to the sourcecode
 - This is not using docker compose
 - You need to set mongodb host before building image - for now.
### Build
> "docker build -t mcmklr/nasa-engine ."

### Run
> "docker run --name=nasa1 -p 3000:3000 -d mcmklr/nasa-engine"

### Save
> "docker save -o <path-to-store>/nasa-engine.tar <image-id>"

### Loading
> "docker load -i nasa-engine.tar"
