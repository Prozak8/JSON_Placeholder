## **JSON Placeholder Project**

npm install for node modules
ng s to startup localhost

### Built With

* HTML
* [Typescript](https://www.typescriptlang.org/)
* [Angular](https://angular.io/) 
* [Bootstrap V4](https://getbootstrap.com/docs/3.3/)

### **Overview**
[PivotalTracker](https://www.pivotaltracker.com/n/projects/2240009)

### **Bare Bone Call w/ Ruby**
```
require 'rest-client'
response = RestClient.get('https://jsonplaceholder.typicode.com/users')
puts response.body
```

For Docker 
```
docker build -t something-clever .
```
```
docker run -it \
  -v ${PWD}:/usr/src/app \
  -v /usr/src/app/node_modules \
  -p 4200:4200 \
  --rm \
  something-clever
```
```
docker run -d \
  -v ${PWD}:/usr/src/app \
  -v /usr/src/app/node_modules \
  -p 4200:4200 \
  --name something-clever-container \
  something-clever
```
### **Author**
-------
* **Zakary Howard**