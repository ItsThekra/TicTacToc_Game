let title = document.querySelector(".title");
let squares = []; 
let turn = "X"; 

function game(id) 
{
    let element = document.getElementById(id); 
    if (turn==="X" && element.innerHTML=="") 
    { 
        element.innerHTML="X"; 
        turn ="O"; 
        title.innerHTML="O"; 
    }
    else if(turn==="O" && element.innerHTML=="")
    {
        element.innerHTML="O";
        turn ="X"; 
        title.innerHTML="X";
    }

    winner();
}

function winner(){
    for(let i=1;i<10;i++){
    squares[i]=document.getElementById("item"+ i).innerHTML;
    }

    if(squares[1]==squares[2] && squares[2]==squares[3] && squares[1]!="")
    {
        greenligth(1,2,3);
    }

    else if(squares[4]==squares[5] && squares[5]==squares[6] && squares[4]!="")
    {
        greenligth(4,5,6);
    
    }

    if(squares[7]==squares[8] && squares[8]==squares[9] && squares[7]!="")
    {
        greenligth(7,8,9);
    }

    if(squares[1]==squares[4] && squares[4]==squares[7] && squares[1]!="")
    {
        greenligth(1,4,7);
    }

    if(squares[2]==squares[5] && squares[5]==squares[8] && squares[2]!="")
    {
        greenligth(2,5,8);
    }

    if(squares[3]==squares[6] && squares[6]==squares[9] && squares[3]!="")
    {
        greenligth(3,6,9);
    }

    if(squares[1]==squares[5] && squares[5]==squares[9] && squares[1]!="")
    {
        greenligth(1,5,9);
    }

    if(squares[3]==squares[5] && squares[5]==squares[7] && squares[3]!="")
    {
        greenligth(3,5,7);
    }

   
}

function greenligth(num1,num2,num3)
{
    title.innerHTML=`${squares[num1]} is winner !`;
    document.getElementById(`item`+num1).style.background="green";
    document.getElementById(`item`+num2).style.background="green";
    document.getElementById(`item`+num3).style.background="green";

    setInterval
    (
        function()
        {title.innerHTML+="." , 1000},1000
    )
    setTimeout
    (
        function(){location.reload()},1200
    )

}
