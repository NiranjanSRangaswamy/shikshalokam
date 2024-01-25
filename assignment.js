//Assignment 1

function shortestSubstring(s,x){
    let newArray=[];
    while(newArray.length==0 && x<=s.length){
        for(let i=0;i<s.length;i++){
            if(s[i]==s[i+x-1] && (i+x-1)<s.length){
                newArray.push(s.substr(i,x))
            }
        }
        x++;
    }
    if(newArray.length==0)
        console.log('not-found')
    else
        newArray.forEach(str=>console.log(str))
}

shortestSubstring('abccdbacca',5)


//Assignment 2

function modifyString(s){
    let arr=[],flag=[];
    s.split('').map((char)=>arr.push(char.charCodeAt()))
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0 && i<arr.length-1){
            if(!flag[i+1]){
                arr[i+1]+=arr[i]%7;
                if(arr[i+1]<0 | arr[i+1]>127)
                arr[i+1]=83
                flag[i+1]=true
            }
        }
        else if(arr[i]%2==1 && i>1){
            if(!flag[i-1]){
                arr[i-1]-=arr[i]%5
                if(arr[i-1]<0 | arr[i-1]>127)
                arr[i-1]=83
                flag[i-1]=true
            }
        }
    }
    for(let i=0;i<arr.length;i++){
        arr[i]=String.fromCharCode(arr[i])
    } 
   console.log(arr.join(''))
}
modifyString('sHQen}')