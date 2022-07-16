let input=document.querySelectorAll('input');
let output= document.querySelector('.two');
let val="No";
let imp = document.querySelector('#imp')
console.log("hiii")
for(let i of input)
{
i.addEventListener('click',function(){
 output.style.cursor=`${this.value}`;
 imp.innerHTML=` cursor:${this.value}`;
})
}