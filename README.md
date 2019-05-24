# AlphaKART

Alpha Kart is a web application that provides online shopping of electronic goods.

Below functionalites are included in the website
 1. Allows the user to search electronic items which is available in the website
 2. Electronic goods are divided based on their categories
 3. User can create an account for shopping or Can shop through anonymous user/ guest user
 4. In user account, user can check the orders data and Maintain address for shipping, Shipping method and payment information
 5. User can add the items in the cart and do the checkout later
 6. Cart summary shows the added products in the cart
 7. Order confirmation provides the total amount for the purchase
 
##### Pages
##### Home page
 Home page displays Header, Footer and Body. Header component have logo, Search bar to search for the products, login / register button  and cart button. Footer have informations like about us and help.
 Body component have a carousel with slider to display the latest products and offers, below that three main categories with their products are listed.
 
##### Login Page
 User can login the website by presssing the login button in the homepage. Login Page provides textbox to enter user ID and password and it will be authenticated based on the user input.
 
##### Register 
 User can create an account by pressing the register button in the homepage. It asks the user to enter basic informations like first name, last name , email id, password and confirm password. 
 
##### Categories
  Once the user presses the button categories in the homepage, drop down mega menu with the electronic categories will be shown. User can select from the categories and will be directed to the page with product listing.
  
##### Product listing
  Product listing page contains list of products with an image, price and add to cart button for each product. If the user selects a particular product, it directs the user to product detail page.
  
##### Product detail
Product detail page display product image, price , add to cart button and information about the product.

##### Cart Summary
Cart summary page provides the information of products added in the cart.

##### Order History
In user's account, one can check the order history by pressing the button My Orders.

##### Contact Us
Contact us page displays address, email id and contact number of the company.

##### Address book
In user's account, user can maintain more than one address. It can be seen in the address book page.

##### 404 page
If the user enters the wrong link, it display the error message and provides a button to navigate to the home page.


### Note
Application will not work with SRH Free wifi because it blocks the connection to database MongoDB. It works well with WIFI hotspot from anyones phone or private WIFI connection.

- **Unit Testing** with jsdom, mocha, sinon & enzyme
	- Reducers
	- Components ([Enzyme](http://airbnb.io/enzyme))
	- Synchronous and Asynchronous Actions

- Express 4.x server with a ton of middleware
- Mongoose for MongoDB
- Sequelize for Postgres
- Procfile to enable deployment to Heroku & Docs on Salt configurations + Deployment for Digital Ocean



#### Data Flow

A simplistic representation of data flow from server to client is:

```
Express app.use() receives a request
-> Calls a pre-built webpack file for the server
-> Runs matching of routes in react-router for server
-> Makes async data fetching request
-> Renders Route component to string
-> Construct HTML file (with Meta, Link tags using helmet)
-> Browser receives html file with initial state
-> Client side React.JS kicks in and initializes with given state
-> Continues where it left off
-> Everyone is happy :)

#### Database

We currently support MongoDB and Postgres, as well as the ability to not use any database. [Learn](docs/databases.md) about how to configure your app.


