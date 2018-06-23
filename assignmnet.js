function items(item,status){
    
    this.item=item;
    this.status=status;
}

function update(){
    
    for(i=0;i<array.length;i++)
        array[i].item.id=i;
    
}
var array=[];
var str="";
var counter=0;

var list=document.getElementById("list");


document.getElementById("add").onclick=function(){
    
    var value=document.getElementById("input").value;
    
    /*var element=new items(value,false);
    a.push(element);
    

    str+="<li class='item'><input type='checkbox' class='form-check-input check' onclick='a()' >" + value +"<i class='fas fa-arrow-up updown'></i><i class='fas fa-arrow-down updown'></i></li>";
    

document.getElementById("list").innerHTML=str;
    
    $(".updown").click(function(){
        console.log(this.parent);
    })
    
    */
    if(value!=""){
    var li=document.createElement("li");
    li.id=counter;
    li.innerHTML=value;
    li.setAttribute("class","design");
      var t = document.createTextNode(value);
   var checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class","check");
    var up=document.createElement("i");
    
    $(up).addClass("fas fa-arrow-up updown upar");
    //up.setAttribute("style","display:none;");
    
  
    
      var down=document.createElement("i");
    $(down).addClass("fas fa-arrow-down updown neeche");
    
        $(down).hide();
    
    
       
        li.appendChild(checkbox);
             li.appendChild(up);
        li.appendChild(down);
    

    
    var x=new items(li,false);
    
    
    array.push(x);
    list.appendChild(li);
    
    if(li.previousElementSibling)
        {
            var previous=li.previousElementSibling.childNodes[3];
            $(previous).show();
        }
    else{
        
        var variable=li.childNodes[2];
        $(variable).hide();
    }
        
        

    
    $(".check").click(function(){
        
        
        
        if(!this.checked)
        {
        
            this.parentElement.style.textDecoration="none";
            
        }
        else
        {
            this.parentElement.style.textDecoration="line-through";
        }
        
        
    })
    
    
    
    
    counter++;
    
up.onclick=function(){
    
    var p=this.parentElement;
    var id=this.parentElement.id;
            if(p.previousElementSibling)
                {
                    list.insertBefore(p,p.previousSibling);
                }
    
    /*if(id>=1)
        {
            var li=p.id;
            var status=array[id].status;
            array[id].item=array[id-1].item;
            array[id].item=array[id-1].status;
            array[id-1].item=li;
            array[id-1].status=p;
        }
    
    update();
    for(var i=0;i<array.length;i++){
        
        if(i==0)
            {
                array[i].item.childNodes[2].style.display="none";
                 array[i].item.childNodes[3].style.display="inline";
                
            }
        else if(i<length-1)
            {
                array[i].item.childNodes[2].style.display="inline";
                array[i].item.childNodes[3].style.display="inline"
            
            }
        else if(i==length-1)
            {
                array[i].item.childNodes[2].style.display="inline";
                array[i].item.childNodes[3].style.display="none";
            
            }
         
    }*/
    
    var count=list.childElementCount;
    for(var i=1;i<=count;i++)
    {
         if(i==1 && list.childElementCount==1)
            {
                list.childNodes[i].childNodes[2].style.display="none";
                list.childNodes[i].childNodes[3].style.display="none";
            }
        else if(i==1)
            {
                list.childNodes[i].childNodes[2].style.display="none";
                list.childNodes[i].childNodes[3].style.display="inline";
            }
        else if(i==count)
            {
                 list.childNodes[i].childNodes[2].style.display="inline";
                list.childNodes[i].childNodes[3].style.display="none";
            }
        else
            {
                 list.childNodes[i].childNodes[2].style.display="inline";
                list.childNodes[i].childNodes[3].style.display="inline";
            }
    }
    
    var array=[];
    for(var i=1;i<=count;i++)
        {
            array.push(list.childNodes[i],status);
            list.childNodes[i].id=i-1;
        }
    
    
}

down.onclick=function(){
 var p=this.parentElement;
    var id=p.id;
            if(p.nextSibling)
                {
                    $(p).insertAfter(p.nextSibling);
                    
                }   
    /*for(var i=0;i<array.length;i++){
        
        if(i==0)
            {
                array[i].item.childNodes[2].style.display="none";
                 array[i].item.childNodes[3].style.display="inline";
                
            }
        else if(i<length-1)
            {
                array[i].item.childNodes[2].style.display="inline";
                array[i].item.childNodes[3].style.display="inline"
            
            }
        else if(i==length-1)
            {
                array[i].item.childNodes[2].style.display="inline";
                array[i].item.childNodes[3].style.display="none";
            
            }
         
    }
    console.log(id);
    var li=p;
    
   var status=array[id].status;
    console.log(array);


array[id].status=array[id+1].status;

array[id].item=array[id+1].item;
array[id+1].item=li;
array[id+1].status=status;
    
    update();
    */
    
    var count=list.childElementCount;
    for(var i=1;i<=count;i++)
    {
         if(i==1 && list.childElementCount==1)
            {
                list.childNodes[i].childNodes[2].style.display="none";
                list.childNodes[i].childNodes[3].style.display="none";
            }
        else if(i==1)
            {
                list.childNodes[i].childNodes[2].style.display="none";
                list.childNodes[i].childNodes[3].style.display="inline";
            }
        else if(i==count)
            {
                 list.childNodes[i].childNodes[2].style.display="inline";
                list.childNodes[i].childNodes[3].style.display="none";
            }
        else
            {
                 list.childNodes[i].childNodes[2].style.display="inline";
                list.childNodes[i].childNodes[3].style.display="inline";
            }
    }
     array=[];
    for(var i=1;i<=count;i++)
        {
            array.push(list.childNodes[i],status);
            list.childNodes[i].id=i-1;
        }

    
    
}
    $(".bad").hide();
        $(".good").html("<strong>Item Successfully added</strong>")
        $(".good").show();
    }
    else{
        $(".bad").html("<strong>Your input field is empty</strong>");
        $(".good").hide();
        $(".bad").show();
        
    }

}


$("#delete").click(function(){
    
    var z=0;
    var count=list.childElementCount;
    if(array.length==0)
    {
        $(".good").hide();
        $(".bad").html("<strong>Your Todolist is empty</strong>");
        $(".bad").show();
    }
    else
    {
        var c=0;
        for(var i=1;i<=list.childElementCount;i++)
        {
            if(list.childNodes[i].childNodes[1].checked){
                list.removeChild(list.childNodes[i]);
                z=1;
                c++;
                i--;
            }
        }
    if(z==1){
        
        var count=list.childElementCount;
        if(count==0)
        {
             $(".good").hide();
            $(".bad").html("<strong>Your Todo list is now empty</strong>");
            $(".bad").show();
        }
        else if(c==1)
            {
               $(".bad").hide();
               
                $(".good").html("<strong>" + c + " element deleted</strong>");
                $(".good").show(); 
            }
        
        else 
        {
               $(".bad").hide();
               
        $(".good").html("<strong>" + c + " elements deleted</strong>");
                $(".good").show();
        }
        
        
            var count=list.childElementCount;
    for(var i=1;i<=count;i++)
    {
         if(i==1 && list.childElementCount==1)
            {
                list.childNodes[i].childNodes[2].style.display="none";
                list.childNodes[i].childNodes[3].style.display="none";
            }
        else if(i==1)
            {
                list.childNodes[i].childNodes[2].style.display="none";
                list.childNodes[i].childNodes[3].style.display="inline";
            }
        else if(i==count)
            {
                 list.childNodes[i].childNodes[2].style.display="inline";
                list.childNodes[i].childNodes[3].style.display="none";
            }
        else
            {
                 list.childNodes[i].childNodes[2].style.display="inline";
                list.childNodes[i].childNodes[3].style.display="inline";
            }
    }
             array=[];
            for(var i=1;i<=count;i++){
                    array.push(list.childNodes[i],status);
                    list.childNodes[i].id=i-1;
                
            }
        
        
    }
    else
        {
            $(".good").hide();
        $(".bad").html("<strong>No element is selected to be deleted</strong>");
        $(".bad").show();
        }
    }
    
})

$("#move").click(function(){
    
    var count=list.childElementCount;
    if(count==0)
    {
        $(".good").hide();
        $(".bad").html("<strong>List Is Empty</strong>");
        $(".bad").show(); 
    }
    else
    {
        var b=[];
    for(var i=1;i<=list.childElementCount;i++)
        {
            if(list.childNodes[i].childNodes[1].checked)
                {
                    var data=list.childNodes[i];
                    list.removeChild(data);
                    b.push(data);
                    i--;
                }
        }
        
    for(var i=0;i<b.length;i++)
        list.appendChild(b[i]);
        
        
        
        
        
        for(var i=1;i<=list.childElementCount;i++)
    {
        
        if(i==1 && list.childElementCount==1)
            {
                list.childNodes[i].childNodes[2].style.display="none";
                list.childNodes[i].childNodes[3].style.display="none";
            }
        else if(i==1)
            {
                list.childNodes[i].childNodes[2].style.display="none";
                list.childNodes[i].childNodes[3].style.display="inline";
            }
        else if(i==count)
            {
                 list.childNodes[i].childNodes[2].style.display="inline";
                list.childNodes[i].childNodes[3].style.display="none";
            }
        else
            {
                 list.childNodes[i].childNodes[2].style.display="inline";
                list.childNodes[i].childNodes[3].style.display="inline";
            }
    }
      array=[];
    for(var i=1;i<=list.childElementCount;i++)
        {
            array.push(list.childNodes[i],status);
            list.childNodes[i].id=i-1;
        }
    }
    
})
