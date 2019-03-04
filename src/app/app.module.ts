import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { Network } from '@ionic-native/network/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Insomnia } from '@ionic-native/insomnia/ngx';

// PAGE MODULES
import {LoginPageModule} from './pages/login/login.module';
import {TabsPageModule} from './tabs/tabs.module'
import {HomePageModule} from './pages/home/home.module';
import {RegistrationPageModule} from './pages/registration/registration.module';
import {RecipesPageModule} from './pages/recipes/recipes.module';
import {FitBookPageModule} from './pages/fit-book/fit-book.module';
import {VideosPageModule} from './pages/videos/videos.module';

// ANGULAR FIRE MODULES
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { Firebase } from '@ionic-native/firebase/ngx';

import { FIREBASE_CONFIG } from './app.firebase.config';
import { UserStoryComponent } from './components/user-story/user-story.component';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';
import { CKEditorModule } from 'ng2-ckeditor';
import {FormsModule} from '@angular/forms';
import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@NgModule({
  declarations: [
    AppComponent,
    UserStoryComponent,
    CreateRecipeComponent
  ],
  entryComponents: [
    UserStoryComponent,
    CreateRecipeComponent
  ],
  imports: [
    BrowserModule, 
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    TabsPageModule,
    LoginPageModule,
    VideosPageModule,
    FitBookPageModule,
    RecipesPageModule,
    RegistrationPageModule,
    HomePageModule,
    HttpClientModule,
    CKEditorModule,
    FormsModule
  ],
  providers: [
    GooglePlus,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    InAppBrowser,
    TextToSpeech,
    Network,
    Insomnia,
    Firebase,
    SocialSharing,
    File    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
