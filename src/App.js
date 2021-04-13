import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import { auth, createUserProfileDocument } from './Firebase/Firebase.utils';
import CheckoutPage from './pages/checkout/checkout';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/Shop/Shop';
import SignInSignUp from './pages/SignIn-and SignUp-Page/SignIn-SignUp';
import setCurrentUser from './redux/user/userAction';
import { selectCurrentUser } from './redux/user/user_selector';


function App() {

  const dispatch = useDispatch();

  const currentUser = useSelector(state => selectCurrentUser(state));

  let unsubscribeFromAuth = null;

  useEffect(()=>{
   unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          dispatch(setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          }));

        });
      }else{
        dispatch(setCurrentUser(userAuth));
      }

    })

  },[])

  useEffect(() => {
    return () => {
        unsubscribeFromAuth()
    }
}, [])

  return (
    <div className='app'>
       <Header />
       <Switch>
         <Route exact path='/' component={Homepage} />
         <Route path='/shop' component={Shop} />
         <Route exact path='/signin' render={()=> currentUser ? <Redirect to='/'/> : <SignInSignUp />}  />
         <Route exact path='/checkout' component={CheckoutPage} />
       </Switch>
    </div>
  );
}

export default App;