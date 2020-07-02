import {EventEmitter} from '@angular/core'

export class NotificaionService{

    notifier = new EventEmitter<string>()

    notify(message: string){
        this.notifier.emit(message)

    }
    
}