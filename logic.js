var a=new Array(9);
var i,j,k=0;
var final="";

function maxlength()
{
    for(k=0;k<81;k++)
    {
        document.getElementsByTagName("input")[k].maxLength="1";
        document.getElementsByTagName("input")[k].addEventListener("input",function(){
            this.value=this.value.replace(/[^1-9]/g,'');
        })
    }
}

for(i=0;i<9;i++)
{
    a[i]=new Array(9);
}
for(i=0;i<9;i++)
{
    for(j=0;j<9;j++)
    {
        a[i][j]=0;
    }
}


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



function implement()
{
    document.getElementById("validatemsg").innerHTML="";
    k=0;
    for(i=0;i<9;i++)
    {
        for(j=0;j<9;j++)
        {
            a[i][j]=document.getElementsByTagName("input")[k].value;
            k++;
        }
    }
    solve();
    represent();
}

function Hint()
{
    document.getElementById("validatemsg").innerHTML="";
    k=0;
    for(i=0;i<9;i++)
    {
        for(j=0;j<9;j++)
        {
            a[i][j]=document.getElementsByTagName("input")[k].value;
            k++;
        }
    }
    var r,c;
    do {
        r=Math.floor(((Math.random())*(10)));
        c=Math.floor(((Math.random())*(10)));
    } while (a[r][c]!=0);
    solve();
    representSingleCell(r,c);
}

function represent()
{
    k=0;
    for(i=0;i<9;i++)
    {
        for(j=0;j<9;j++)
        {
            if(document.getElementsByTagName("input")[k].value==0)
            {
                document.getElementsByTagName("input")[k].placeholder=a[i][j];
            }
            k++;
        }
    }
}


function representSingleCell(r,c)
{
    k=(9*r)+c;
    document.getElementsByTagName("input")[k].placeholder=a[r][c];
}