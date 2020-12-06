import { UserService } from './user.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from './models/app-user';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User>;

  constructor(
    private afAuth: AngularFireAuth,
    private route : ActivatedRoute,
    private userService : UserService
  ) {
    this.user$ = afAuth.authState;
   }

  login() {

    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

    // Sign in with Facebook
  FacebookAuth() {
    return this.AuthLogin(new firebase.auth.FacebookAuthProvider());
  }  
  
  // Sign in with Twitter
  TwitterAuth() {
    return this.AuthLogin(new firebase.auth.TwitterAuthProvider());
  }  

/* Sign up */
SignUp(email: string, password: string) {
  this.afAuth
  .auth
  .createUserWithEmailAndPassword(email, password)
  .then(res => {
  console.log('You are Successfully signed up!', res);
  })
  .catch(error => {
  console.log('Something is wrong:', error.message);
  });
  }
   
  /* Sign in */
  SignIn(email: string, password: string) {
  this.afAuth
  .auth
  .signInWithEmailAndPassword(email, password)
  .then(res => {
  console.log('You are Successfully logged in!');
  })
  .catch(err => {
  console.log('Something is wrong:',err.message);
  });
  }
   
  /* Sign out */
  SignOut() {
  this.afAuth
  .auth
  .signOut();
  }

  AuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
    .then((result) => {
        console.log('You have been successfully logged in!')
    }).catch((error) => {
        console.log(error)
    })
  }


  get appUser$(): Observable<AppUser> {
    return this.user$
      .switchMap( user => {
        if (user) return this.userService.get(user.uid)
        ;
        return Observable.of(null);
      });
  }
}
