function maxlength()
{
    for(let k=0;k<81;k++)
    {
        document.getElementsByTagName("input")[k].maxLength="1";
        document.getElementsByTagName("input")[k].addEventListener("input",function(){
            this.value=this.value.replace(/[^1-9]/g,'');
        })
    }
}
function fetchSudoku(){
    const api = 'https://sugoku.herokuapp.com/board?difficulty=';
    const sudokuForm = document.querySelector('#sudokuForm');
    const loader = document.querySelector('#loader');
    sudokuForm.classList.remove('show');
    sudokuForm.classList.add('hide');
    loader.classList.remove('hide');
    loader.classList.add('show');
    const sudokuGrid = document.querySelector('#sudokuGrid');
    const difficulty = document.querySelector('#difficulty').value;
    fetch(`${api}${difficulty}`)
    .then(response => response.json()).
    then(data => {
        const board = data.board;
        let k=0;
        for(let i=0;i<9;i++){
            for(let j=0;j<9;j++){
                if(board[i][j]!=0){
                    document.getElementsByTagName("input")[k].value= board[i][j];
                    document.getElementsByTagName("input")[k].disabled= true;
                }
                k++;
            }
        }
    })
    .then( () => {
        loader.classList.remove('show');
        loader.classList.add('hide');
        sudokuGrid.classList.remove('hide');
        sudokuGrid.classList.add('show');
    });
    
}

// for expanding the picture in footer
var coll= document.getElementsByClassName("collapsible");
coll[0].addEventListener("click",function(){
    this.classList.toggle("active");
    var content=this.nextElementSibling;
    if(content.style.maxHeight)
    {
        content.style.maxHeight=null;
    }else{
    content.style.maxHeight= content.scrollHeight+"px";
    }
});