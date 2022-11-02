function onLoad()
{
    reload();
}


class shopItem
{
    constructor(price, stock, tax, cart)
    {
        this.nPrice = price;
        this.nStock = stock;
        this.nTax = tax; 
        this.nCart = cart;
    }
}

let bucket = new shopItem(5, 10, 21, 0)
let stapler = new shopItem(3, 10, 21, 0)
let pencilHolder = new shopItem(6, 10, 21, 0)

function reload(){
    

    document.getElementById("bucketPrice").innerHTML = "€" + bucket.nPrice;
    document.getElementById("bucketStock").innerHTML = "Stock: " + bucket.nStock;
    document.getElementById("bucketTax").innerHTML = "Tax: " + bucket.nTax + "%";

    document.getElementById("staplerPrice").innerHTML = "€" + stapler.nPrice;
    document.getElementById("staplerStock").innerHTML = "Stock: " + stapler.nStock;
    document.getElementById("staplerTax").innerHTML = "Tax: " + stapler.nTax + "%";

    document.getElementById("pencilHolderPrice").innerHTML = "€" + pencilHolder.nPrice;
    document.getElementById("pencilHolderStock").innerHTML = "Stock: " + pencilHolder.nStock;
    document.getElementById("pencilHolderTax").innerHTML = "Tax: " + pencilHolder.nTax + "%";
}



function buttonClickBucket()
{
    if(bucket.nStock > 0)
    {
        
        bucket.nCart++;
        bucket.nStock--;
        document.getElementById("firstItem").innerHTML = "Buckets: " + bucket.nCart;
        calculateNewPrice(bucket.nPrice);
        

    }
    else
    {
       alert("Out of stock!") 
    }
    reload();
}

function buttonClickStapler()
{
     
    if(stapler.nStock > 0)
    {
        stapler.nCart++
        stapler.nStock--;
        document.getElementById("secondItem").innerHTML = "Staplers: " +stapler.nCart;
        calculateNewPrice(stapler.nPrice);
    }
    else
    {
       alert("Out of stock!") 
    }
    reload();
}

function buttonClickPencilHolder()
{
    
    if(pencilHolder.nStock > 0)
    {
        pencilHolder.nCart++
        pencilHolder.nStock--;
        document.getElementById("thirdItem").innerHTML = "Pencil Holders: " + pencilHolder.nCart;
        calculateNewPrice(pencilHolder.nPrice);
    }
    else
    {
       alert("Out of stock!") 
    }
    reload();
}

function calculateNewPrice(secondValue) {
    const fValue = document.getElementById("firstValue");
    firstValue.innerHTML = parseFloat(fValue.innerHTML) + parseFloat(Math.round( (secondValue + Number.EPSILON) * 100 ) / 100 * 1.21);
}