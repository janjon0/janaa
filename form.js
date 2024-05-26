var users=[
    {lu:"jana",lp:"123"}
];
function signup(){
    var name=document.getElementById('su').value;
    var pass=document.getElementById('sp').value;
    var confirmpass=document.getElementById('scp').value;
    var email=document.getElementById('se').value;

    if(name==""||pass==""||confirmpass==""||email==""){
        alert("enter empty fields");
    }
    else if(pass!==confirmpass){
        alert("Enter your confirm password again ");
    }
    else if(name <5 || name>15){
        alert("Enter username bigger than 5 and smaller than 15");
    }
    else{
        var obj={lu:name,lp:pass};
        users.push(obj);
        alert("sinup succefuly");
    }
}
function login(){
    var username=document.getElementById('lu').value;
    var password=document.getElementById('lp').value;
    if(username==""||password==""){
        alert("ENter empty fields");
    }
    
    var login=false;
    for(var i=0;i<users.length;i++){
        if(username==users[i].lu && password==users[i].lp){
            login =true;
            break;
        }
    }
    if(login){
        alert("login succefuly");
        window.location.href="home.html";
    }
    else{
        alert("try again");
    }
}
function forgetforget(){
    var fuu=document.getElementById('fu').value;
    var newpass=document.getElementById('fp').value;
    if(fuu==""||newpass==""){
        alert("try again");
    }
    var abdate=false;
    for(var i=0;i<users.length;i++ ){
        if(fuu==users[i].lu){
            users[i].lp=newpass;
            abdate=true;
            break;
        }
    }
    if(abdate){
        alert("abdated succefuly");
    }
    else{
        alert("cannot abdated");
    }
}