# Fixer

Fixer is a website that helps stablishing communication about urban issues between citizens and city hall, aiming to increase the efficiency with which problems are solved, while also helping at prioritization through a user "Support" system similar to the one present on sites like Stack Overflow.

## 👀 Accessing

You can access the live version in this Railway deploy: **[https://fixer.up.railway.app/](https://fixer.up.railway.app/)**.

## ▶️ Executing

### With Docker Compose

This project provides a `Dockerfile` that can be used to build its image and later execute it. To build using it, the following command can be used:

```sh
docker build --build-arg VITE_API_URL=http://localhost:8000 --build-arg VITE_BASE_URL=/ --tag <tag> .
```

When building, the `VITE_API_URL` and `VITE_BASE_URL` variables can be used to define both the URL of the [Fixer API](https://github.com/nadjiel/fixer-api) instance to use and what base route to expect in the deploy of this app.

Once the image is available locally, run it using:

```sh
docker run --detach \
  --name <container-name> \
  --env-file .env \
  --publish <host-port>:80 \
  <image-name>:<image-version>
```

### With Plain Node

If you prefer not to use Docker, Fixer can also be executed directly with Node.js:

```sh
npm install
npm run start
```

Remember to configure your `.env` file in advance. Refer to `.env.example` for expected variables.

## 🧑‍💻 Developing

This application includes both a `Dockerfile` for building a production-ready image and a `docker-compose.yml` for spinning up a full environment that includes the database, API and an instance of this app.

Before running the development server, make sure to install dependencies and configure environment variables based on the `.env.example` file. To run the dev server, use:

```sh
npm run dev
```

## 🫂 Thank You

This project was initially developed in a [Hackathon](https://marcoslviana.github.io/Hackathao/) by these awesome people:

* [Daniel O. Sousa](https://github.com/nadjiel)
* [Ives Furtado](https://github.com/ivesfg1)
* [Jonathan César](https://github.com/Jonathaannn)
* [Lyzzandro Dualamo](https://github.com/lyzzandro)
* [Pedro Júnior](https://github.com/Pedro35803)
* [Ulisses Pereira](https://github.com/yolisses)

Thank you for checking out Fixer!
