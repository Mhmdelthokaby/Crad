var pName=document.getElementById('name')
var pCategory=document.getElementById('category')
var pPrice=document.getElementById('price')
var pDes=document.getElementById('des')

var productContainer = [];

if(localStorage.getItem('product')!=null)
{
    productContainer=JSON.parse(localStorage.getItem('product'));
    display();
}

function addProduct()
{
    var productObj={
        name: pName.value,
        cat: pCategory.value,
        price:pPrice.value,
        des:pDes.value
    }

    productContainer.push(productObj);
    localStorage.setItem('product',JSON.stringify(productContainer));


    display();

    document.getElementById('name').value=" "
    document.getElementById('category').value=" "
    document.getElementById('price').value=" "
    document.getElementById('des').value=" "


}




function display(){
    var item = ``;
    for (var i = 0; i < productContainer.length; i++) {
        item += `
        <tr>
            <td>${i}</td>
            <td>${productContainer[i].name}</td>
            <td>${productContainer[i].cat}</td>
            <td>${productContainer[i].price}</td>
            <td>${productContainer[i].des}</td>
            <td><button onclick="Delete(${i})" class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></button></td>
            <td><button onclick="modify(${i})" class="btn btn-outline-warning"><i class="fa-solid fa-play"></i></button></td>
        </tr>
        `
    }
    document.getElementById('items').innerHTML=item;

}

function clear(){
    productContainer.clear()
    localStorage.setItem('product',JSON.stringify(productContainer))
    display()
}

function Delete(index)
{
    productContainer.splice(index,1);
    localStorage.setItem('product',JSON.stringify(productContainer))
    display()

}


function modify()
{

}
function search()
{
    var searchProduct= document.getElementById('searchpro').value;
    var box2=``;
    
    for(var i=0;i<productContainer.length;i++)
    {
        if(productContainer[i].name.includes(searchProduct)){
            box2+=
            `
            <tr>
            <td>${i}</td>
            <td>${productContainer[i].name.replace(searchProduct,'<span class="bg-info">'+searchProduct+'</span>')}</td>
            <td>${productContainer[i].cat}</td>
            <td>${productContainer[i].price}</td>
            <td>${productContainer[i].des}</td>
            <td><button onclick="Delete(${i})" class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></button></td>
            <td><button onclick="modify(${i})" class="btn btn-outline-warning"><i class="fa-solid fa-play"></i></button></td>
        </tr>
            `
        }
    }
    document.getElementById('items').innerHTML=box2;
}