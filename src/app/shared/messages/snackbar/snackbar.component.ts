import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations'
import {NotificaionService} from '../notification.service'
import {Observable} from 'rxjs/Observable'
//import { do } from "rxjs/operators"
import 'rxjs/add/observable/timer'
//import 'rxjs/add/operator/tap'
import 'rxjs/add/operator/switchMap'
import { map } from 'rxjs/operator/map';
//import 'rxjs/internal/operators'

@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snack-visibility', [
      state('hidden', style({
        opacity: 0,
        bottom: '0px'
      })),
      state('visible', style({
        opacity: 1,
        bottom: '30px'
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out'))
    ])
  ]
})

export class SnackbarComponent implements OnInit {

  message: string

  snackVisibility: string = 'hidden'

  constructor(private notificaionService: NotificaionService) { }



ngOnInit() { 
  this.notificaionService.notifier.subscribe(message =>{
    this.message = message
    this.snackVisibility =  'visible'
    Observable.timer(3000).subscribe(timer=> this.snackVisibility = 'hidden')
    
    

    })
  }



  



}
