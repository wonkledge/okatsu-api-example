# OKATSU : Implementation API example



## Quick start

```
git clone git@github.com:wonkledge/okatsu-api-example.git
```

```bash
cd okatsu-api-example
```

```bash
npm install
```

```
npm start
```



> Server will run on port 8080



Our client a librarian who want to be able to list all his book



## Endpoint

​	For the purpose of the example, I append `success, successWithMapping, failed` to the route books to explicit what i am doing. 

​	In real life, the route would be `/library/books`

#### 	/library/books/success

#### 	/library/books/successWithMapping

#### 	/library/books/failed

#### 	/library/books/:id

​		you can try to provided incorrect id to see what's happen
