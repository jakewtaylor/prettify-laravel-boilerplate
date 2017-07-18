# prettify-laravel-boilerplate

Converts boilerplate Laravel files to my preferred styles:

Run the command `prettify-laravel-boilerplate:prettify` or use the packages menu to run the script.

## Classes
```PHP
class User extends Authenticatable
{
    ...
}
```

becomes

```PHP
class User extends Authenticatable {
    ...
}
```

## Functions
```PHP
function index()
{
    ...
}
```

becomes

```PHP
function index () {
    ...
}
```

## DocBlocks

DocBlocks (any multiline comments starting with `/**`) get removed.