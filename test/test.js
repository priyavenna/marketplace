const OnlineMarket = artifacts.require("OnlineMarket");
var chai = require('chai');
var expect = chai.expect;
var asssert = require('chai').assert;

contract("OnlineMarket",products => {
it("should add product to Market",async () => {
    try{
    let instanceofOnline = await OnlineMarket.new()
    let resultx = await instanceofOnline.addProduct("1","bread","10")
    const result = await instanceofOnline.getProduct("1")
    assert.notEqual(result,"")
}
catch(err)
{
    console.log(err)
}
})



it("should count total products",async () => {
    try{
    let instanceofOnline = await OnlineMarket.new()
    await instanceofOnline.addProduct("1","bread","10")
    await instanceofOnline.addProduct("2","chocolate","10")
    await instanceofOnline.addProduct("3","perfume","100")
    await instanceofOnline.addProduct("4","watch","50")
    await instanceofOnline.set_total_products("4")
    const result1 = await instanceofOnline.getTotalProducts()
    //console.log('result is ',result)
    assert.equal(result1,"4")
}
catch(err)
{
    console.log(err)
}
})
})