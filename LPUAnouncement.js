
let samples = document.getElementById('samples');
samples.addEventListener('click',openSampleFun);

function openSampleFun(){
    let firstContainer = document.getElementById('firstContainer');
    firstContainer.classList.add('firstContainer');

    let sampleOptions = document.getElementById('sampleOptions');
    sampleOptions.classList.remove('invisible');
    sampleOptions.classList.add('ani');

    let hidden = document.getElementById('hidden');
    hidden.classList.remove('invisible');

}


let hidden = document.getElementById('hidden');
hidden.addEventListener('click',kickOptionsFun);

function kickOptionsFun(){
    let firstContainer = document.getElementById('firstContainer');
    firstContainer.classList.replace('firstContainer','firstContainerReverse');
    
    let sampleOptions = document.getElementById('sampleOptions');
    sampleOptions.classList.replace('ani','aniReverse');
    setTimeout(function(){
        firstContainer.classList.remove('firstContainerReverse')
        sampleOptions.classList.add('invisible');
        sampleOptions.classList.remove('aniReverse');
    },1500);
    
    let hidden = document.getElementById('hidden');
    hidden.classList.add('invisible');

}


let clear = document.getElementById('clear');
clear.addEventListener('click',clearFun);

function clearFun(){
    let form = document.getElementById('form');
    form.reset();
}

let form = document.getElementById('form');
form.addEventListener('submit',createAnouncement);

function createAnouncement(x){
    let body = document.getElementById('body');
    body.classList.remove('bg-dark');
    body.classList.remove('px-2');

    let firstContainer = document.getElementById('firstContainer');
    firstContainer.classList.add('invisible');

    let thirdContainer = document.getElementById('thirdContainer');
    thirdContainer.classList.remove('invisible');



    let formHeading = document.getElementById('formHeading').value;
    let formDateTime = document.getElementById('formDateTime').value;
    let formContent = document.getElementById('formContent').value;
    let formBottom = document.getElementById('formBottom').value;


    let html = `
    <img class="float-start" src="icon.jpg" alt="">
            
                <p class="ph"><b>${formHeading}</b> (${formDateTime})</p>

                <br><br>

                <p class="p">${formContent}</p>

                <br>
                
                <p class="p"><b>Uploaded By:</b></p>
                <p class="p">${formBottom}</p>
    `;

    let content = document.getElementById('content');
    content.innerHTML = html;
    x.preventDefault();
}

let formContent = document.getElementById('formContent');
formContent.addEventListener('focus',function(){
    document.addEventListener('keyup',function(e){
        if(e.keyCode === 13){
            console.log('enter');
    let firstContainer = document.getElementById('firstContainer');
firstContainer.style.backgroundColor = 'red';
        }
    })
})