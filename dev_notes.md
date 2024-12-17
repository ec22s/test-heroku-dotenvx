# Development notes

### preparation
```sh
touch Procfile # EDIT
touch package.json # EDIT
npm i express --save
touch index.js # EDIT
heroku login
heroku apps:create MY_APP_NAME
git commit -am "initial commit"
git push heroku # OPEN APP AND CHECK IT OUT
```

### add dotenvx
```sh
touch .env.production # EDIT
brew install dotenvx/brew/dotenvx
dotenvx encrypt -f .env.production
cat .env.keys # CHECK PRIVATE KEY
heroku config:set DOTENV_PRIVATE_KEY_PRODUCTION='************************'
heroku config # CHECK
heroku buildpacks:add https://github.com/dotenvx/heroku-buildpack-dotenvx
open Procfile # EDIT
git commit -am "..." # EDIT COMMIT COMMENT
git push heroku # OPEN APP AND CHECK IT OUT
```
