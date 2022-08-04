
// info API 
let Name=['First','Last','Email','Phone','City']


// Get All ELements \\
let filterDiv=document.getElementById('filterDiv');
let check=document.getElementById('check')
// console.log(check)

// ___________________________\\


// Table div create \\


for(let i=0;i<Name.length;i++){
    let div =document.createElement('div')
    div.classList.add('checkBox')
    let label=document.createElement('label');
    label.innerText=`${Name[i]} Name`
    div.appendChild(label)
    let input=document.createElement('input')
    input.setAttribute('type','checkbox')
    input.classList.add('filter')
    input.setAttribute('id',`${Name[i]}`)
div.appendChild(input)
check.appendChild(div)


}

// ___________________________________\\

// Table Data MAtching to show data by filter \\

let input=document.getElementsByClassName('filter')

for(let i=0;i<input.length;i++){
      let idName= input[i].id
      console.log(idName)
      if(idName=='First'){
        tableStructure(idName)
        console.log(tableStructure(idName))
      }
      else if(idName=='Last'){
        tableStructure(idName)
      }
      else if(idName=='Email'){
        tableStructure(idName)
      }
      else if(idName=='Phone'){
        tableStructure(idName)
      }
      else if(idName=='City'){
        tableStructure(idName)
      }
}

// ___________________________________\\

// tableStructure All Function \\


function dataTable(dataName){
    let datasName=document.getElementsByClassName(`data${dataName}Name`);
    return datasName
}
function checkName(name){
    let filterName=document.getElementById(name)
    return filterName
}
function tableStructure(name){
    let filterName=checkName(name)
    let dataFilter=dataTable(name)
    filterName.addEventListener('click',function(){
        for(let i=0;i<dataFilter.length;i++){
            if(filterName.checked){
                dataFilter[i].style.display='inline'}
           else if(!filterName.checked){
            dataFilter[i].style.display='none'  
            }
        }
        
        })
}

// ________________________________________________________\\




















// ________________________________________________________\\
// ________________________________________________________\\
// ________________________________________________________\\


// let info=[
//     {
//         Fname:'Ali',
//         LName:'Hossain',
//         Email:'alihossain@gmail.com',
//         Phone:'01849329837',
//         City:'Dhaka'
//     },
//     {
//         Fname:'Lalin',
//         LName:'Islam',
//         Email:'lalinislam@gmail.com',
//         Phone:'01739038939',
//         City:'DINAJPUR'
//     },
//     {
//         Fname:'Shakil',
//         LName:'Ahmed',
//         Email:'shakilAhmed@gmail.com',
//         Phone:'01937792703',
//         City:'Sylhet'
//     },
// ]
// ________________________________________________________\\
// ________________________________________________________\\
// ________________________________________________________\\
