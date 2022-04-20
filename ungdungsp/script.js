let product = ["Sony Xperia", "Samsung Galaxy", "Nokia6",
    "Xiaomi Redmi Note 8", "Apple Iphone 13", "Xiaomi Mi 5s",
    "Apple Iphone 12", "Fujiysu F-04E", "Oppo A71"]
let display = "<table>"

function load() {
    for (let i = 0; i < product.length; i++) {
        display += `<tr><th class="sp">${product[i]}</th>
<td><button value="${i}" onclick="edit(this.value)">Edit</button></td><td><button value="${i}" onclick="deleteProduct(this.value)">Delete</button></td></tr>`
    }
    display+="</table>"
    document.getElementById("display").innerHTML=display
}
let name=""
function addProduct(){
name=document.getElementById("name").value
    product.push(name)
    display = "<table>"
    load()
    numBer()
}
function deleteProduct(value){
    value = parseInt(value)

    for (let i = value; i < product.length-1; i++) {
        product[i]=product[(i+1)]
    }
    product.pop()
    display = "<table>"
    load()
    numBer()
}
let nameproduct=""
function edit(value){
    nameproduct=prompt("Nhập tên")
    value=parseInt(value);
    product[value]=nameproduct
    display = "<table>"
    load()
}
let num=0;
function numBer(){
    num=product.length
    document.getElementById("num").innerHTML=num+" products"
}