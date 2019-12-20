import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { Network } from '@ionic-native/network/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Insomnia } from '@ionic-native/insomnia/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { NetworkService } from './api/network.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

// PAGE MODULES
import {LoginPageModule} from './pages/login/login.module';
import {TabsPageModule} from './tabs/tabs.module'
import {HomePageModule} from './pages/home/home.module';
import {RegistrationPageModule} from './pages/registration/registration.module';
import {RecipesPageModule} from './pages/recipes/recipes.module';
import {FitBookPageModule} from './pages/fit-book/fit-book.module';
import {VideosPageModule} from './pages/videos/videos.module';

// COMPONENTS FOR SUB PAGES
import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';
import { WorkoutInfoComponent } from './components/workout-info/workout-info.component';
import { UserStoryComponent } from './components/user-story/user-story.component';

// ANGULAR FIRE MODULES
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { Firebase } from '@ionic-native/firebase/ngx';
import { FIREBASE_CONFIG } from './app.firebase.config';

// CUSTOM MODULES IMPORTED
import { CKEditorModule } from 'ng2-ckeditor';

@NgModule({
  declarations: [
    AppComponent,
    UserStoryComponent,
    CreateRecipeComponent,
    WorkoutInfoComponent
  ],
  entryComponents: [
    UserStoryComponent,
    CreateRecipeComponent,
    WorkoutInfoComponent
  ],
  imports: [
    BrowserModule, 
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    CKEditorModule,
    FormsModule,
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
    HomePageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    InAppBrowser,
    TextToSpeech,
    Network,
    Insomnia,
    Firebase,
    NetworkService,
    Camera,
    WebView,
    ScreenOrientation
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
