// let password_mouse= document.getElementById("password");
// password_mouse.onmousedown = () => {
//     document.getElementById("extra_left").style.display = 'none';
//     console.log("extra")
// }

// document.getElementById("password").addEventListener("onmousedown",myFunction);

// function myFunction (){
    // document.getElementById("extra_right").style.display = 'block';
    //     console.log("el")
    // document.getElementById("extra_left").style.display = 'block';
    //     console.log("el")
// }


// let reg= document.getElementById("Register")
let reg= document.getElementById("signup_btn")
reg.onclick= function (){
    Register();
    // console.log("ko")
    };
// let login= document.getElementById("Login");
// login.onclick= function(){
//     Login();
  
// }
// const profile= document.getElementById('profile');

class User {
    constructor(){

    }

validateUsername(username){

    return username.includes('@')?false:true;
}
validatePassword(password){

    return password.length<8?false:true;
}




async signUP(n,e,u,p,m,d){
    let isvalidate=this.validateUsername(u)&&this.validatePassword(p);
    if(isvalidate){
this.name=n;
this.email=e;
this.username=u;
this.password=p;
this.mobile=m;
this.description=d;
const register_api=`https://masai-api-mocker.herokuapp.com/auth/register`
try{
    const response = await fetch(register_api, {
        method:'POST',
        body: JSON.stringify(this),
        headers: {
            'Content-Type':'application/json',
        }
     });

    const data= await response.json()
    console.log("data",data.message)
    if(data.message==="Registration failed, user already exists"){
        alert("Registration failed, user already exists")
    }else{
    alert("Registration Success");
    window.location.href="./login.html"
    }

}catch(err){
   
    alert("'Registration failed, user already exists'")
}


    }
}


}

let user = new User;

const Register=()=>{
    const name= form.username.value;
    const email= form.email.value;
    const username= form.username.value;
    const password= form.password.value;
    let mobile= form.mobile.value;
    // const id= reg_form.username.value;
    const description= "okay";
user.signUP(name,email,username,password,mobile,description);


}

const Login=async()=>{
    
const username= document.getElementById("login-username").value;
const password= document.getElementById("login-password").value;
let {token}=await user.Login(username,password)
getProfile(username,token);

}



const getProfile=async(username,token)=>{

    let api_link=`https://masai-api-mocker.herokuapp.com/user/${username}`
    let response= await fetch(api_link,{
        headers:{
            Authorization:`Bearer ${token}`,
            'Content-Type':`application/json`
        }
    })
    let data= await response.json();
    console.log("dataa",data)

    profiledata(data)
    
   
//  Profiles(data)
//  profile.innerHTML=""

};


const profiledata= async(Data)=>{
  
let name= Data.name;
let description=Data.description;
let email= Data.email;
let username=Data.username;
let password=Data.password;
let mobile=Data.mobile;
let token= Data.token;
// let id= Data.username;
let send_this_data= {
   name,
   email,
   mobile,
   username,
   password,
   description,
   token,
   
   
};
// above data is accesible to whom? local 
// is it supposed to be accesible to everyone? yes
// where above data should go? sever (local sever)
// json server 
let res= await fetch(`https://floating-island-82380.herokuapp.com/users`,{
    method:"POST",
    body:JSON.stringify(send_this_data),
    headers:{
        'Content-Type':'application/json',
    }
});
let dataa= await res.json();
console.log("data",dataa);

}




// const Profiles= async(Data)=>{
//     let name= Data.name;
//     let description=Data.description;
//     let email= Data.email;
//     let username=Data.username;
//     let password=Data.password;
//     let mobile=Data.mobile;
//     let token= Data.token;
//     let id= Data.username;

//  let p=document.createElement("h5");
//  p.innerText=username;

//  profile.append(p);
    
//     }