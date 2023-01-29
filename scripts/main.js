var myImage = document.querySelector('img');
myImage.onclick = function()
{
    var mySrc = myImage.getAttribute('src');
        if (mySrc === 'images/videokarta.jpg')
        {
            myImage.setAttribute('src','images/processor.jpg')
        }
        else 
        {
            myImage.setAttribute('src','images/videokarta.jpg')
        };
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName()
{
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'NVIDIA GOOD, ' + myName;
}

if(!localStorage.getItem('name'))
{
    setUserName();
} 
else 
{
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'NVIDIA GOOD, ' + storedName;
}

myButton.onclick = function()
{ setUserName(); }