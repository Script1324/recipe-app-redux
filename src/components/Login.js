import React,{useState} from 'react'
import {login,toggleSign} from "../actions/user"
import {useSelector,useDispatch} from 'react-redux'
import "../styles/Login.css"
import { FacebookRounded, Google, Instagram } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import logo from "../images/chef.png"
import {createUserWithEmailAndPassword ,onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth"
import {auth,db} from "../firebase/FirebaseConfig"
import {setDoc,doc} from "firebase/firestore"

function Login() {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const dispatch = useDispatch()
    const display = useSelector((state)=>state.user.display)

    const Login_User = async(e) => {
        e.preventDefault();
        try{      
        alert('loooading....')     
        
        const userData = await signInWithEmailAndPassword(auth,email,password)    
        await setDoc(doc(db,"users",userData.user.uid),{
            email:userData.user.email
        })
        
  
        dispatch(login({
            usersData:{
                email:userData.user.email,
                id:userData.user.uid
            },
            loggedStatus:true
        }))

        }catch(err){
            alert(err)
        }

    }

    const SignUp_User = async(e) =>{
        e.preventDefault();
    
        try{
            const  userData = await createUserWithEmailAndPassword(auth,email,password)
            console.log(userData.user)
            dispatch(toggleSign())
        } catch(err){
                alert(err)
        }
            
    }

    onAuthStateChanged(auth,(user)=>{
            if(user){
                dispatch(login({
                    usersData:{
                        email:user.email,
                        id:user.uid
                    },
                    loggedStatus:true
                }))
            }else{
                dispatch(login({
                    loggedStatus:false
                }))
            }
    })

  return (
    <div className='login-wrapper'>

            <div className='login-background'>

                <div className='login-container'>
                    <div className='logo'>
                        <img src={logo}/>
                    </div>
                    <h1>Login</h1>
                    <h6>more than 25,000 recipes around the world</h6>

                    {display ? 
                    <form>
                        <div className='place-icon'>
                        <EmailIcon style={{position:"absolute",left:"0",color:"white"}}/>
                        <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="enter email here"/>
                        </div>
                        
                        <div className="place-icon">
                        <LockIcon style={{position:"absolute",left:"0",color:"white"}}/>
                        <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder='enter password'/>

                        </div>
                        
                        <button type="submit" onClick={Login_User}>Log In</button>

                        <h5>login with</h5>

                        
                        <div className='social-media-icons'>
                            <FacebookRounded style={{color:"#4267B2",fontSize:"30px"}}/>
                            <Google style={{color:"#4285F4",fontSize:"30px"}}/>
                            <Instagram style={{color:" #8a3ab9 ",fontSize:"30px"}}/>
                        </div>

                        <h6 onClick={()=>dispatch(toggleSign())}>No account? click here</h6>

                    </form>
                    :
                    <form>

                         <label>Email</label> 
                        
                        <div className='place-icon'>
                        <EmailIcon style={{position:"absolute",left:"0",color:"white"}}/>
                        <input type="email"  onChange={(e)=>setEmail(e.target.value)} placeholder="enter email here"/>
                        
                        </div>

                        <label>Password</label>
                        <div className="place-icon">
                        <LockIcon style={{position:"absolute",left:"0",color:"white"}}/>
                        <input type="password"  onChange={(e)=>setPassword(e.target.value)} placeholder='enter password'/>

                        </div>
                        
                        <button type="submit" onClick={SignUp_User} >Sign Up</button>


                    </form>
}
                
                </div>


            </div>    




{/*         
        <button onClick={()=> dispatch(login({name:'sasa',age:20,email:"@jdsjdaskd"}))}>Log in</button> */}
    </div>
  )
}

export default Login