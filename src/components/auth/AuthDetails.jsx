import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const AuthDetails = () => {

    const navigate = useNavigate();

    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);

                if (window.location.pathname != "/signUp")
                {
                    navigate("/signIn");
                }
                //alert();
            }
        });

        return () => {
            listen();
        }
    }, []);

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log("signed out succesfully");
            navigate("/signIn");
        }).catch((error) => {
            console.log(error);
        })
    }
  return (
    <div className='px-8 py-8 font-thin'>
        { authUser ?
        <> 
        <p>{`Signed In as: ${authUser.email}`}</p>
        <button className='' onClick={userSignOut}>Sign Out</button>
        </> : <>
        {window.location.pathname === "/signUp" ? 
        <button className='' onClick={() => navigate("/signIn")}>Sign In</button>
        : <button className='' onClick={() => navigate("/signUp")}>Create Account</button>
    }
        </> 
        }
    </div>
  )
}

export default AuthDetails