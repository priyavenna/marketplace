1. INSTALL TRUFFLE
    npm install -g truffle.

2. INSTALL GANACHE FROM https://truffleframework.com/ganache
    2.1. After getting the App Image of ganache, go to properties of the file, in permissions tab check "Allow executing file as program".
    2.2. After installation go to settings on the ganache application and set HOSTNAME AS "127.0.0.1 - lo", PORT NUMBER AS "7545", NETWORK ID AS "5777".
    2.3. SELECT SAVE AND RESTART.

3. COMPILE & MIGRATE, GET THE CONTRACT ADDRESS
    3.1. Navigate to the project folder, execute "truffle compile"
    3.2. After succesful compile, truffle generates a build folder.
    3.3. Execute "truffle migrate --reset".
    3.4. After migration is successful, contracted address will be printed on the console or you can also get it from /build/OnineMarket.json file
    3.5. Copy & Paste the contract address in api/Web.js in return new web.eth.Contract(abi_contract,'/* PASTE HERE */').
    
4. RETURN TO YOUR ROOT FOLDER RUN THE COMMAND "node app".

5. GET THE POSTMAN COLLECTION FROM https://www.getpostman.com/collections/4d1266ceaf5e4ed2b733 to use API.

6. PROCESS FLOW TO USE API
    6.1. ADD A PRODUCT USING http://localhost:4000/product - POST REQUEST with body eg :- { "id" : "1" , "name" : "tablet" , "price" : "100" }
    6.2. BUY A PRODUCT USING http://localhost:4000/product/:productid/buy - PUT REQUEST with body eg :- { "id" : "1"}
    6.3. SOLD PRODUCTS USING http://localhost:4000/product - GET REQUEST 
    6.4 PRODUCS FOR SALE USING http://localhost:4000/product/forsale - GET REQUEST 

7. TESTING THE PROJECT
    execute the command "truffle test"
