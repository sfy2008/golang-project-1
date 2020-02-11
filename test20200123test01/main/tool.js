function randomColor(){
    var str = "rgba("+parseInt(Math.random()*256)+","+parseInt(Math.random()*256)+","+parseInt(Math.random()*256)+")";
    return str
}


function elementsByClassName(node,classStr){
    var nodes = node.getElementsByTagName("*");
    var arr= [];
    for (var i=0;i<nodes.length;i++){
        if(nodes[i].className ===classStr){
            arr.push(nodes[i]);
        }
    }
    return arr
}

function drag(node){
    node.onmousedown = function(ev){
        var e = ev|| window.event;
        var offsetX = e.clientX - node.offsetLeft;
        var offsetY = e.clientY - node.offsetTop;

        document.onmousemove = function(ev){
            var e = ev || windo.event;
            node.style.left = e.clientX -offsetX+"px";
            node.style.top = e.clientY -offsetY+"px";
        }
    }

    document.onmouseup = function(){
        document.onmousemove = null;
    }
}


function limitdrag(node){
    node.onmousedown = function(ev){
        var e = ev|| window.event;
        var offsetX = e.clientX - node.offsetLeft;
        var offsetY = e.clientY - node.offsetTop;



        document.onmousemove = function(ev){
            var e = ev || windo.event;
            var l = e.clientX -offsetX+"px";
            var t = e.clientY -offsetY+"px";

            if(l<=0){
                l=0;
            }

            var windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
            if(l>=windowWidth - node.offsetWidth){
                l = windowWidth-node.offsetWidth;
            }

            node.style.left = l + 'px';
            node.style.top = t +'px';
        }
    }

    document.onmouseup = function(){
        document.onmousemove = null;
    }

    

}




function getStyle(node,cssStyle){
    return node.currentStyle ? node.currentStyle[cssStyle] : getComputedStyle(node)[cssStyle];
}

function numTestCode(n){
    var arr= [];
    for(var i=0;i<n;i++){
        var num = parseInt(Math.random()*10);
        arr.push(num);
    }
    return arr.join("");
}

function testCode(n){
    var arr=[];
    for (var i =0;i<n;i++){
        var num = parseInt(Math.random()*123);
        if(num>=0 && num <=9){
            arr.push(num);
        }else if(num >= 97 && num <=122|| num>= 65 && num <=90){
            arr.push(String.fromCharCode(num));
        }else{
            i--
        }
    }
    return arr.join("");
}



function bubbleSort(){
    for(var i=0;i<Array.length-1;i++){
        for (var j=0;j<Array.length-(i+1);j++){
            if(arr[j]>arr[j+1]){
                var tmp= arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=tmp;
            }
        }
    }
}


function bubbleSortDesc(){
    for(var i=0;i<Array.length-1;i++){
        for (var j=0;j<Array.length-(i+1);j++){
            if(arr[j]<arr[j+1]){
                var tmp= arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=tmp;
            }
        }
    }
}
function changeSortAsc(arr){
    for(var i = 0;i<arr.length -1;i++){
        for (var j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                var tmp = arr[i];
                arr[i]=arr[j];
                arr[j]=tmp;
            }
        }
    }
}

function changeSortDesc(arr){
    for(var i = 0;i<arr.length -1;i++){
        for (var j=i+1;j<arr.length;j++){
            if(arr[i]<arr[j]){
                var tmp = arr[i];
                arr[i]=arr[j];
                arr[j]=tmp;
            }
        }
    }
}

function getStyle(node,cssStyle){
    return node.currentStyle ? node.currentStyle[cssStyle] : getComputedStyle(node)[cssStyle];
}