

const words = [
    "khaled",
    // "programming",
    // "javascript",
    "sawada",
    "computer",
    "container",
    "mohamed",
    "apple",
    "data",
    // "algorithmes",
    // "linked list",
    // "tree",
    "stack",
    // "beautiful",
    // "upcoming",
];




let stratBtn = document.querySelector('.start');
let lvlName = document.querySelector('.message .lvl');
let secondSpan = document.querySelector('.message .seconds');
let theWord = document.querySelector('.the-word');
let upWord = document.querySelector('.upcoming-word');
let input = document.querySelector('.input');
let timeSpan = document.querySelector('.time span');
let scoreTotal = document.querySelector('.score .total');
let scoreGot = document.querySelector('.score .got');
let finish = document.querySelector('.finish');

// let get_levels = document.createElement('div');
// get_levels.className = 'cont';
// let form = document.createElement('form');
// let levels = document.createElement('input');
// levels.
// let get_label = document.querySelector('.cont div label');
// get_levels.onclick = function(){
// if(get_levels.value === "easy"){
//     get_label.innerHTML = lvl.easy;
// }
// }


let get_normal = document.getElementById('normal');
let get_easy = document.getElementById('easy');
let get_hard = document.getElementById('hard');

const lvl ={
    "easy": 6,
    "normal": 4,
    "hard": 2,
}; 

let defaultLevelName;
let defaultLevelSeconds;

    get_hard.onclick = function(){
        defaultLevelName = "hard";
        defaultLevelSeconds = lvl[defaultLevelName];
       lvlName.innerHTML = defaultLevelName;
       secondSpan.innerHTML = defaultLevelSeconds;
       timeSpan.innerHTML = defaultLevelSeconds;
       stratBtn.onclick = function(){
        stratBtn.remove();
        input.focus();
        generate_words();
    }
    }
    get_easy.onclick = function(){
        defaultLevelName = "easy";
        defaultLevelSeconds = lvl[defaultLevelName];
       lvlName.innerHTML = defaultLevelName;
       secondSpan.innerHTML = defaultLevelSeconds;
       timeSpan.innerHTML = defaultLevelSeconds;
       stratBtn.onclick = function(){
        stratBtn.remove();
        input.focus();
        generate_words();
    }
       
    }
    get_normal.onclick = function(){
        defaultLevelName = "normal";
        defaultLevelSeconds = lvl[defaultLevelName];
       lvlName.innerHTML = defaultLevelName;
       secondSpan.innerHTML = defaultLevelSeconds;
       timeSpan.innerHTML = defaultLevelSeconds;
       stratBtn.onclick = function(){
        stratBtn.remove();
        input.focus();
        generate_words();
    }
    }



scoreTotal.innerHTML = words.length;

input.onpaste = function(){
    return false;
}



function generate_words(){
    let randow_word = words[Math.floor(Math.random() * words.length)];
    let index_of_word = words.indexOf(randow_word);
    words.splice(index_of_word, 1);

    theWord.innerHTML = randow_word;
    upWord.innerHTML = '';
    for(let i =0; i<words.length; i++){
        let div = document.createElement('div');
        let txt = document.createTextNode(words[i]);
        div.appendChild(txt);
        upWord.appendChild(div);
    }
    start_game();
}

function lvls(){
    if(defaultLevelName === "normal"){
        timeSpan.innerHTML = defaultLevelSeconds
    }
   else if(defaultLevelName === "hard"){
        timeSpan.innerHTML = defaultLevelSeconds
    }
    else if(defaultLevelName === "easy"){
        timeSpan.innerHTML = defaultLevelSeconds
    }

}
function start_game(){

          lvls();  
    let start = setInterval(() => {
        timeSpan.innerHTML--;
        if(timeSpan.innerHTML === "0"){
            clearInterval(start);
            if(theWord.innerHTML.toLowerCase() === input.value.toLowerCase()){
                input.value = '';
                scoreGot.innerHTML++;
                if(words.length > 0){
                    generate_words();
                  } else{
                    let span = document.createElement('span');
                    span.className = 'good';
                    let spantxt = document.createTextNode("congratz");
                    span.appendChild(spantxt);
                    finish.appendChild(span);
                    setInterval(() => { finish.innerHTML+='.'}, 1000);
                    setTimeout(() => {location.reload()}, 4000);
                  }
            }
            else{
                let span = document.createElement('span');
                span.className = 'bad';
                let spantxt = document.createTextNode("game over");
                span.appendChild(spantxt);
                finish.appendChild(span)
                setInterval(() => { finish.innerHTML+='.'}, 1000);
                setTimeout(() => {location.reload()}, 4000);
               
            }
        } 

    }, 1000);
}