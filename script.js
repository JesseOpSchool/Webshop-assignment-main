function onLoad()
{
    reload();
}


class shopItem
{
    constructor(price, stock, tax, cart)
    {
        this.Mprice = price;
        this.Mstock = stock;
        this.Mtax = tax; 
        this.Mcart = cart;
    }
}

let bucket = new shopItem(5, 10, 21, 0)
let stapler = new shopItem(3, 10, 21, 0)
let pencilHolder = new shopItem(6, 10, 21, 0)

console.log(bucket.Mprice)

function reload(){
    

    document.getElementById("bucketPrice").innerHTML = "€" + bucket.Mprice;
    document.getElementById("bucketStock").innerHTML = "Stock: " + bucket.Mstock;
    document.getElementById("bucketTax").innerHTML = "Tax:" + bucket.Mtax + "%";

    document.getElementById("staplerPrice").innerHTML = "€" + stapler.Mprice;
    document.getElementById("staplerStock").innerHTML = "Stock: " + stapler.Mstock;
    document.getElementById("staplerTax").innerHTML = "Tax:" + stapler.Mtax + "%";

    document.getElementById("pencilHolderPrice").innerHTML = "€" + pencilHolder.Mprice;
    document.getElementById("pencilHolderStock").innerHTML = "Stock: " + pencilHolder.Mstock;
    document.getElementById("pencilHolderTax").innerHTML = "Tax:" + pencilHolder.Mtax + "%";
}

function buttonClickBucket()
{
    if(bucket.Mstock > 0)
    {
        bucket.Mcart++
        bucket.Mstock--;
        document.getElementById("firstItem").innerHTML = "Buckets: " + bucket.Mcart;
        document.getElementById("totalPrice").innerHTML = bucket.Mprice;

    }
    else
    {
       alert("Out of stock!") 
    }
    reload();
}

function buttonClickStapler()
{
     
    if(stapler.Mstock > 0)
    {
        stapler.Mcart++
        stapler.Mstock--;
        document.getElementById("secondItem").innerHTML = "Staplers: " +stapler.Mcart;
    }
    else
    {
       alert("Out of stock!") 
    }
    reload();
}

function buttonClickPencilHolder()
{
    
    if(pencilHolder.Mstock > 0)
    {
        pencilHolder.Mcart++
        pencilHolder.Mstock--;
        document.getElementById("thirdItem").innerHTML = "PencilHolders: " + pencilHolder.Mcart;
    }
    else
    {
       alert("Out of stock!") 
    }
    reload();
}

