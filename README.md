# test-heroku-dotenvx
A simple test for dotenvx on Heroku

<br>

### Refs.
- https://dotenvx.com/docs/platforms/heroku
- https://github.com/dotenvx/heroku-buildpack-dotenvx

<br>

### Environment
```sh
$SHELL --version
# GNU bash, バージョン 5.2.37(1)-release (x86_64-apple-darwin23.4.0)

brew install dotenvx/brew/dotenvx
dotenvx -V
# 1.31.0
```

<br>

### Install
```sh
npm i
```

<br>

### Development using Heroku config vars
```sh
heroku login
heroku apps:create MY_APP_NAME
export $(heroku config -s --app MY_APP_NAME | xargs -L 1)
dotenvx run -- node index.js
# OPEN http://localhost:3001
```

<br>

### Modify Heroku config with dotenvx
```sh
dotenvx set VARIABLE_NAME VALUE -f .env.production
git commit -am "modify .env.production"
git push heroku
```
