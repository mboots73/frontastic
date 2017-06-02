import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../course';
import {TabsComponent} from './tabs.component';
import {TabComponent} from './tab.component';
import { AngularFireModule } from  'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase} from  'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';
import * as functions from 'firebase-functions'
import * as firebase from 'firebase';
import { FirebaseService } from '../../firebase.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  @Input() name: string;
  @Input() category: string;
  @Input() imageurl: string;
  @Input() description: string;
  @Input() lesson1: string;
  @Input() lesson2: string;
  @Input() lesson3: string;
  @Input() lesson1url: string;
  @Input() imageurlprogress: string;
  @Input() imageurldone: string;
  constructor(private af: AngularFireDatabase) {

  }


  ngOnInit() {

        }

  progressImage() {
  document.getElementById('myImage').setAttribute('src', this.imageurlprogress);

  }
  finishedImage() {
  document.getElementById('myImage').setAttribute('src', this.imageurldone);

  }

}
