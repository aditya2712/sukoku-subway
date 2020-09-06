let a=new Array(9);
let j,i;
for(i=0;i<9;i++){
    a[i]=new Array(9);
}
for(i=0;i<9;i++)
{
    for(j=0;j<9;j++){
        a[i][j]=0;
    }
}

const display= () => {
    let str='';
    for(i=0;i<9;i++)
    {
        for(j=0;j<9;j++)
        {
            str+=a[i][j]+' ';
        }
        str+='<br>';
    }
    document.getElementById('show').innerHTML=str;
}


let r,c,num;
r=Math.floor(Math.random()*9)+1;
c=Math.floor(Math.random()*9)+1;
num=Math.floor(Math.random()*9)+1;
console.log(r,c,num);
a[r-1][c-1]=num;

function valid(r,c,val)
{
    for(i=0;i<9;i++)
    {
        if(a[i][c]==val)
        return false;
    }
    for(j=0;j<9;j++)
    {
        if(a[r][j]==val)
        return false;
    }
var baserow= Math.floor(r/3);
var basecol= Math.floor(c/3);
for(i=baserow*3;i<baserow*3+3;i++)
{
    for(j=basecol*3;j<basecol*3+3;j++)
    {
        if(a[i][j]==val)
            return false;
    }
}
return true;
}


function solve()
{
    var r,c,arr=[-1,-1],val;
    arr=unassignedcell();
    if(arr[0]==-1)
    {
        return true;
    }
    else
    {
        r=arr[0];
        c=arr[1];
    }
    for(val=1;val<10;val++)
    {
        if(valid(r,c,val)==true)
        {
            a[r][c]=val;
            if(solve()==true)
                return true;
            a[r][c]=0;
        }
    }
    return false;
}

function unassignedcell()
{
    var arr=[-1,-1],r,c;
    for(r=0;r<9;r++)
    {
        for(c=0;c<9;c++)
        {
            if(a[r][c]==0)
            {
                arr[0]=r;
                arr[1]=c;
                break;
            }
        }
        if(arr[0]!=-1)
        break;
    }
    return arr;
}
solve();
display();