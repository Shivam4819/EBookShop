# EBookShop

#### This app is build to enable user to buy books online , it has two front one for user and one for admin. Application is eniterly build on MERN stack 

## TechStack 

#### Nodejs, Reactjs, Mongodb, JWT, Antd, Postman
## API

updated api are present inside  <b>Backend/routers</b> file

<b>1.Books </b>
* Get books- this api will display all the books to both user and this api does not need authentication
* Post book- this api help admin to add new book to database and require user authentication
* Get particular book- this api help user to get detail of specific book based on id
* Delete book- this help admin to delete the particular book based on id
* Update book- this api allow admin to update details like award name for the book or the books price

<b>2.Categories </b>
* Get book category- this api will display all the categories and this api does not need authentication
* Post new category- this api help admin to add new book category to database and require user authentication
* Get particular category- this api help user to get detail of specific book category based on id
* Delete book category- this help admin to delete the particular book category based on id
* Update book category- this api allow admin to update book category based on id

<b>3.Order </b>
* Get order- this api will display all the order to the admin
* Post new order- this api help user buy new books
* Get particular order- this api help admin to get detail of specific order based on id
* Delete book- this help admin to delete the particular book based on id
* Update order status- this api allow admin to update order status from pending to dispatched to delivered

<b>4.User </b>
* Get user record- this api will display user details to admin
* Register user- this api help users register themselves on the application
* Get specific user- this api help admin to get detail of particular user based on id
* Delete user- this help admin to delete the particular user based on id
* Authenticate user- this api allow users to authenicate there details and it generates a jwt token as response

## Models

#### There 5 models used in this project 

* user
* books
* category
* order
* order-items

updated schema is present inside models <b>Backend/folders</b> file

## Frontend- 

#### The front end is only build using react js and its code is present inside frontend folder

## Note-

#### Front end is only build for admin side and user side it has to be developed and jwt is still not integrated with the front end so its still pending 

## Video Link-

<b>* Backend</b>
* Part1-  https://www.loom.com/share/f56bca0753404cbe98605e4032a9e0c3
* Part2-  https://www.loom.com/share/953532559e3e436c95c930a5cabce1be

<b>* Frontend</b>
* https://www.loom.com/share/fa545773bdee4be597161035e2f6549e


