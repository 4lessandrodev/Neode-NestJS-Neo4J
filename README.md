# Graph Neode Neo4J with NestJS


#### How to run this project

`git clone https://github.com/4lessandrodev/Neode-NestJS.git`


`cd Neode-NestJS`


`yarn install`


`docker-compose up -d`

#### open browser on http://localhost:7474

#### connect with 

user: `neo4j` password: `neo4j`

#### set your new password

create a .env file on project root. follow `.env.example`

#### ensure your .env has your new database password

#### run application

`yarn start:dev`

---

### Avaliable endpoints

POST - Create a new user `http://localhost:3000/v1/users`

```json
{
  "name": "User 1",
  "email": "user1@mail.com",
  "password": "123456",
  "avatar": "http://aws.s3/bucket/SG.21356-IOAS5-00/image1.jpeg"
}
```

GET - List all users `http://localhost:3000/v1/users`

---

I'm waiting for acceptance of pull request # 151 to resolve the schema indexed error.

[Pull Request #151](https://github.com/adam-cowley/neode/pull/151)

[Error on schema](./src/user-module/schemas/user.schema.ts)
