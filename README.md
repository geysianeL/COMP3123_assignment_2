# Employee Management

## Requirements

- docker
- docker compose

- For development
  - node v22
  - npm

## How to run ( Developer Mode - Front-end)

- As developer, if you want to debug the react application
  run on powersheel

```
.\debug-frontend.ps1
```

then go to `.\src\frontend` and run

```
npm start
```

- the `react app` is being served on [http://localhost:3002](http://localhost:3002)
- the `node js is` being served on [http://localhost:3000](http://localhost:3000)
- the `mongo db` is being served on [http://localhost:27017](http://localhost:27017)
- the `mongo express` is being served on [http://localhost:8081](http://localhost:8081)

## How to run ( Developer Mode - Back-end)

- As developer, if you want to debug the react application and Nodejs

  run on powersheel

```
.\debug-all.ps1
```

then go to `.\src\frontend` and run

```
npm start
```

then go to `.\src\backend` and run

```
npm start
```

- the `react app` is being served on [http://localhost:3002](http://localhost:3002)
- the `node js is` being served on [http://localhost:3000](http://localhost:3000)
- the `mongo db` is being served on [http://localhost:27017](http://localhost:27017)
- the `mongo express` is being served on [http://localhost:8081](http://localhost:8081)
