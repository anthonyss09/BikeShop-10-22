## :bike: Welcome to The Bike Shop

The Bike Shop is an ecommerce web app aimed at selling bikes. This app is minimally styled and meant to showcase the tech stacks and frameworks in use. Keep reading for more details on implementation.

![homePage](/assets/images/homePage.png)

## description

The project's base stack is: react, nodejs, express, mongodb.
Redux toolkit is leveraged to manage global state. Within RTK (redux toolkit) this project takes advantage of RTK query.
Other fetching is done with axios within async thunks available with RTK.

RTK reducers are used to update store with data such as static products, admin permissioned user updated products, cart storage which is persisted on local storage and/or cart storage which is data base stored for logged in users.

The backend api server is written on nodeJs with express. Routes are created with express.router and controller functions are passed into routes in Routes folder.
The object data modelling library Mongoose is used to create model structures and connect with mongo data base.

As of now the bike shop takes test payments using stripe.

## features

###### adding products as admin

User models contain a boolean admin property. An initial check is performed on the frontend wether to display the menu link to `addProduct`. A secondary admin check is done on the backend within the controller `createProduct` which is passed the user object.
The npm package multer is used to to upload images when adding products.
[multer](https://www.npmjs.com/package/multer)

###### shopping cart

Shopping cart data for users who are not logged in are stored on local storage. Initial state data for cart is loaded from local storage if local storage cart data exists.

The user model contains the userCart property which is copied to localCart upon login so initial state data can be accurate and accessible. If user is logged in and cart is updated patch requests are sent to data base updating `userCart` all actions updating `user` and `userCart` are performed in `userSlice`. The user object on local storage is then updated while the localCart is updated within `cartSlice` (where all cart updates pertaining to non logged in users are made).

![shoppingCart](/assets/images/shoppingCart.png)

###### accepting payments

Currently this app accepts payments in a rudementary test of stripe. In /controllers/productController.js `createCheckoutSession` creates a stripe check out session. The controller function accepts a total and uses the stripe api to create a product, price and session.

[stripe](https://stripe.com/payments/checkout)

## installation

- Have use of some code editor e.g. VSC code or atom.
- clone git repository
- copy the following url open up your terminal and execute following command

https://github.com/anthonyss09/BikeShop-10-22.git

`$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY`

- install packages

`npm install`
