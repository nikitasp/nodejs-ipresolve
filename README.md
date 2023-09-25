## Setup

### Docker
```bash
make build
```
It will make docker images with dna325 prefixes. Latter you could stop and delete them with following
```bash
make kill
make rm
```
### Local development

```bash
npm install

cp .env.example .env

make redis

npm run start:debug
```

## Testing

I've made a file that contain all possible requests that could be executed with any jetbrains IDE 

```bash
./test/api.http
```