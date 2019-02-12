pragma experimental ABIEncoderV2;
pragma solidity ^0.5.0;

contract OnlineMarket
{   

    uint public sold_products;
    uint public totalprice;
    uint public totalproducts;

    struct Product
    {
       
        string productName;
        uint price;
        address owner;
        uint8 status;
    }
   
    
    mapping(uint => Product) public products;
    
    event ProductState(uint pID, address owner, uint8 state);

    //this function will add product with owner as sender and "1" represent item is for sale
    function addProduct(uint pID_, string memory pName_, uint price_) public
    {
        products[pID_].owner = msg.sender;
        products[pID_].status = 1;
        products[pID_].productName = pName_;
        products[pID_].price = price_;

        emit ProductState(pID_, products[pID_].owner, products[pID_].status);
    }

    //this function is used to get the product with the product id
    
    function getProduct(uint pID_) public view returns(string memory, uint)
    {
        return (products[pID_].productName, products[pID_].price);
     
    }

    //this function allow user to buy a product and sets status as 0 to represent sold
    function buyProduct(uint pID_) public
    {
        products[pID_].status = 0;

    }
    
  //this function retruns total number of products
 
    function getTotalProducts()public view returns(uint)
    {
        return(totalproducts);
    }

    //setter for total products
    function set_total_products(uint num)public
    {
        totalproducts = num;
    }

    //this function returns average price of products
    function getAveragePrice() public view returns(uint)
    {
        return(totalprice/totalproducts);
    }
  
    //this function will set sold products
    function setSoldProducts(uint val)public
    {
        sold_products = val;
    }
    
    //this function will return count of sold products
    function getSoldProducts() public view returns(uint)
    {
        return(sold_products);
    }

    //this functionn returns products for sale 
    function getmap() public view returns(string[] memory,uint[] memory)
    {
        uint counter;
        string[] memory pnames = new string[](totalproducts);
        uint[] memory pids = new uint[](totalproducts);
        for(uint8 i = 1; i < totalproducts+1 ; i++)
        {
            if(products[i].status == 1)
            {
                pnames[i] = products[i].productName;
                pids[i] = products[i].price;
            }
            counter++;
        }
        return(pnames,pids);
    }

}