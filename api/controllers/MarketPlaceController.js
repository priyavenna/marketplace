let controller = require('./../Web')
const myContract = controller.web_func();

async function addProduct(req, res) {
    try {
        /* Adding a product */
        let add_product = await myContract.methods.addProduct(req.body.id, req.body.name, req.body.price).send({ from: '0x26329502242c8Ff3C77472b25a142552F8838bfA' });
        console.log(JSON.stringify(req.body))
        /* Get & Set product count to smart contract */
        let product_count = await myContract.methods.getTotalProducts().call({ from: '0x26329502242c8Ff3C77472b25a142552F8838bfA' });
        console.log(product_count);
        product_count++;
        let prod = await myContract.methods.set_total_products(product_count).send({ from: '0x26329502242c8Ff3C77472b25a142552F8838bfA' }).then(console.log);

        res.status(200).send('product created') // success response

    }
    catch (err) {
        console.log(err)

        res.status(500).send('unable to add product') // error response
    }

}

async function buyProduct(req, res) {
    try {

        /* To Buy a Product */
        console.log(req.body.id)
        let buyProduct = await myContract.methods.buyProduct(req.body.id).send({ from: '0x26329502242c8Ff3C77472b25a142552F8838bfA' });
        /* Get and set Sold Products */
        let soldproducts = await myContract.methods.getSoldProducts().call({ from: '0x26329502242c8Ff3C77472b25a142552F8838bfA' });
        soldproducts++;
        await myContract.methods.setSoldProducts(soldproducts).send({ from: '0x26329502242c8Ff3C77472b25a142552F8838bfA' });
        
        console.log(buyProduct)
        
        res.status(200).send('product bought'); //success response
    }
    catch (err) {
        console.log(err)
        res.status(500).send('unable to buy product'); //error response
    }
}

async function getSoldProducts(req, res) {
    try {
       /* Get Sold Products */
        let getSoldProducts_val = await myContract.methods.getSoldProducts().call({ from: '0x26329502242c8Ff3C77472b25a142552F8838bfA' });
        console.log(getSoldProducts_val)
        res.status(200).send(getSoldProducts_val); //success response
    }
    catch (err) {
        console.log(err)
        res.status(500).send('unable to get number of sold products'); //error response
    }
}

async function getProduct(req, res) {
    try {
        /* Get Product */
        let getproduct = await myContract.methods.getProduct(req.query.id).call({ from: '0x26329502242c8Ff3C77472b25a142552F8838bfA' });
        console.log(getproduct);
        res.status(200).send(getproduct); //success response
    }
    catch (err) {
        console.log(err); 
        res.status(500).send('unable to get product'); // error response
    }
}

async function getmap(req, res) {
    try {
        /* Get Products for Sale */
        let rest = await myContract.methods.getmap().call({ from: '0x26329502242c8Ff3C77472b25a142552F8838bfA' });
        console.log(rest);
        res.status(200).send(rest);
    }
    catch (err) {
        console.log(err);
    }
}
module.exports = {
    addProduct,
    buyProduct,
    getSoldProducts,
    getProduct,
    getmap
}