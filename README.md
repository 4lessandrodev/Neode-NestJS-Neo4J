# Graph Neode Neo4J with NestJS

```shell
How to run this project

git clone https://github.com/4lessandrodev/Neode-NestJS.git

cd Neode-NestJS

yarn install

docker-compose up -d

open browser on http://localhost:7474

connect with user: neo4j password: neo4j

set your new password

create a .env file on project root. follow .env.example

run application

yarn start:dev

```

### Avaliable endpoints

POST - Create a new user
`http://localhost:3000/v1/users`

```json
{
  "name": "User 1",
  "email": "user1@mail.com",
  "password": "123456",
  "avatar": "http://aws.s3/bucket/SG.21356-IOAS5-00/image1.jpeg"
}
```

GET - List all users
