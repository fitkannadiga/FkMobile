import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { MenuController, LoadingController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

    userPushToken: any;
    initialComments: any  = [];

    constructor(public http: HttpClient, private afDataBase: AngularFireDatabase, private fire:AngularFireAuth, public toastr: ToastController) {
    }

    // Get the user profile from the firebase database
    getprofile(uid) {
        return this.afDataBase.database.ref(`profiles/`+uid)
        .once('value').then(function(bref) {
            // console.log("bref cal", bref.val());
            var fullname= bref.val().fullname;
            var email= bref.val().email;
            var dob=bref.val().dob;
            var gender=bref.val().gender;
            var height=bref.val().height;
            var weight=bref.val().weight;
            var client=bref.val().client;
            var role=bref.val().role;
            var username=bref.val().username;
            var description=bref.val().description;
            var fbTermAcceptance=bref.val().fbTermAcceptance;
            var disabled=bref.val().disabled;

            var userProfile = {
                uid: uid,
                fullname: fullname,
                username: username,
                role: role,
                email: email,
                dob: dob,
                gender: gender,
                height: height,
                weight: weight,
                client: client,
                description: description,
                fbTermAcceptance: fbTermAcceptance,
                disabled: disabled
            };
            
            return userProfile;
        });
    }

    // get the Faq section
    getFaq() {
        var promise = new Promise((resolve, reject) => {
            this.afDataBase.database.ref(`/faq`).once('value', (snapshot) => {
                resolve(snapshot.val());
            }).catch((err) => {
                reject(err);
            })
        })
        return promise;
    }

    // set initial comment
    setComments(data){
        this.initialComments = [];
        this.initialComments = JSON.parse(JSON.stringify(data));
    }

    getInitialComments(){
        return this.initialComments;
    }

    // get the Faq section
    // Never used
    getComments(url) {
        var promise = new Promise((resolve, reject) => {
            this.afDataBase.database.ref(url).once('value', (snapshot) => {
                resolve(snapshot.val());
            }).catch((err) => {
                reject(err);
            })
        })
        return promise;
    }

    // get the Diet and Workout
    getClientsData(authId) {
        var promise = new Promise((resolve, reject) => {
        this.afDataBase.database.ref(`/client/`+authId).once('value', (snapshot) => {
            resolve(snapshot.val());
        }).catch((err) => {
            reject(err);
        })
    })
    return promise;
    }

    // get the Faq section
    getFoodList() {
        var promise = new Promise((resolve, reject) => {
        this.afDataBase.database.ref(`/foodList`).once('value', (snapshot) => {
            resolve(snapshot.val());
        }).catch((err) => {
            reject(err);
        })
    })
    return promise;
    }

    // get video list 
    getVideoList(){
        var promise = new Promise((resolve, reject) => {
        this.afDataBase.database.ref(`/videos`).once('value', (snapshot) => {
            resolve(snapshot.val());
        }).catch((err) => {
            reject(err);
        })
        })
        return promise;
    }

    // get usernames in the registered list
    getUserNames(){
        var promise = new Promise((resolve, reject) => {
            this.afDataBase.database.ref(`/userNames`).once('value', (snapshot) => {
                resolve(snapshot.val());
            }).catch((err) => {
                reject(err);
            })
            })
            return promise;
    }

    // get banner images
    getBannerImages(){
        var promise = new Promise((resolve, reject) => {
        this.afDataBase.database.ref(`/banner`).once('value', (snapshot) => {
            resolve(snapshot.val());
        }).catch((err) => {
            reject(err);
        })
        })
        return promise;
    }

    // get images of client transformatio
    getTransformatioImages(){
        var promise = new Promise((resolve, reject) => {
            this.afDataBase.database.ref(`/transformation`).once('value', (snapshot) => {
                resolve(snapshot.val());
            }).catch((err) => {
                reject(err);
            })
        })
        return promise;
    }

    // get home page workout list
    getHomeWorkoutList(){
        var promise = new Promise((resolve, reject) => {
            this.afDataBase.database.ref(`/homePageWorkout`).once('value', (snapshot) => {
                resolve(snapshot.val());
            }).catch((err) => {
                reject(err);
            })
        })
        return promise;
    }

    //get home short information card
    getHomeShortCard(){
        var promise = new Promise((resolve, reject) => {
            this.afDataBase.database.ref(`/homeShortCard`).once('value', (snapshot) => {
                resolve(snapshot.val());
            }).catch((err) => {
                reject(err);
            })
        })
        return promise;
    }

    // get client testimonials
    getTestimonials(){
        var promise = new Promise((resolve, reject) => {
            this.afDataBase.database.ref(`/testimonials`).once('value', (snapshot) => {
                resolve(snapshot.val());
            }).catch((err) => {
                reject(err);
            })
        })
        return promise;
    }

    // get workouts
    getWorkouts(){
        var promise = new Promise((resolve, reject) => {
        this.afDataBase.database.ref(`/workout`).once('value', (snapshot) => {
            resolve(snapshot.val());
        }).catch((err) => {
            reject(err);
        })
        })
        return promise;
    }

    // get individual muscle group list
    getMuscleGroups(){
        var promise = new Promise((resolve, reject) => {
            this.afDataBase.database.ref(`/muscleGroups`).once('value', (snapshot) => {
                resolve(snapshot.val());
            }).catch((err) => {
                reject(err);
            })
        })
        return promise;
    }

    // get recipes
    getRecipes(){
        var promise = new Promise((resolve, reject) => {
            this.afDataBase.database.ref(`/recipes`).once('value', (snapshot) => {
                resolve(snapshot.val());
            }).catch((err) => {
                reject(err);
            })
        })
        return promise;
    }

    // get the english articles
    getArticles(lang) {
        var promise = new Promise((resolve, reject) => {
            this.afDataBase.database.ref(`/articles`).child('/'+lang+'/').once('value', (snapshot) => {
                resolve(snapshot.val());
            }).catch((err) => {
                reject(err);
            })
        })
        return promise;
    }

    // setUserToken
    setToken(token){
        this.userPushToken = token;
    }

    // send push notification to the particular user/admin
    sendPushNotification(){
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'key=AAAAj2nx9Fo:APA91bGP24zHcZ286_bGqif8FfombILw9DuVwKVsRIO9sRZPd1kF--ZFdJ4SQWSfWWccQ_-C3ym18C-Ib1sxO3gpsG1YXPh0vvkcyH5iJuQRcgyL0F8ifvB59tGWKWbl5Zk-WDnxp2lX1aCu_kLokHWK2F6KGGScrQ'});
        let options = { headers: headers };
        let body = {
            "to" : this.userPushToken,
            "collapse_key" : "type_a",
            "notification" : {
                "body" : "Chat Support",
                "title": "You have a message from your coach!"
            },
            "data" : {
                "body" : "Please check your calorie intake....",
                "title": "New message from Admin",
                "key_1" : "Value for key_1",
                "key_2" : "Value for key_2"
            }
        }
        return this.http.post('https://fcm.googleapis.com/fcm/send', body, options);
    }
}
