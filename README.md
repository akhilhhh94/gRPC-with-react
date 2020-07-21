# gRPC with react js
Simple `hello world` implementation

 We need proxy server for gRPC implementation. Here we use [envoyproxy](https://www.envoyproxy.io/) for it.

## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

```bash
npm install
npm start #start react client
```

### gRPS server setup
```node
  node server/server.js
```


### Proxy server setup
```docker
docker build -t envoytest .
docker run  -it  --network=host envoytest:latest
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
