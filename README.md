## ONLINE MARKETPLACE
### PREREQUESITES:
#### INSTALL TRUFFLE
    `npm install -g truffle`
    
#### INSTALL GANACHE FROM https://truffleframework.com/ganache
    * After getting the App Image of ganache, go to properties of the file, in permissions tab check "Allow executing file as program".
    * After installation go to settings on the ganache application and set HOSTNAME AS "127.0.0.1 - lo", PORT NUMBER AS "7545", NETWORK ID AS "5777".
    * SELECT SAVE AND RESTART

### COMPILE & MIGRATE, GET THE CONTRACT ADDRESS
    * Navigate to the project folder, execute "truffle compile"
    * After succesful compile, truffle generates a build folder.
    * Execute "truffle migrate --reset".
    * After migration is successful, contracted address will be printed on the console or you can also get it from /build/OnineMarket.json file
    * Copy & Paste the contract address in api/Web.js in return new web.eth.Contract(abi_contract,'/* PASTE HERE */').
    
RETURN TO YOUR ROOT FOLDER RUN THE COMMAND "node app".

### GET THE POSTMAN COLLECTION FROM https://www.getpostman.com/collections/4d1266ceaf5e4ed2b733 to use API.

### PROCESS FLOW TO USE API
    * ADD A PRODUCT USING http://localhost:4000/product - POST REQUEST with body eg :- { "id" : "1" , "name" : "tablet" , "price" : "100" }
    * BUY A PRODUCT USING http://localhost:4000/product/:productid/buy - PUT REQUEST with body eg :- { "id" : "1"}
    * SOLD PRODUCTS USING http://localhost:4000/product - GET REQUEST 
    * PRODUCS FOR SALE USING http://localhost:4000/product/forsale - GET REQUEST 

### TESTING THE PROJECT
    Execute the command `truffle test`
