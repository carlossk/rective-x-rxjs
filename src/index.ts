import { Observable, Observer } from 'rxjs';

const observer:Observer<any>={
    next:value=>console.log('Next: ',value),
    error: error=>console.warn('error: ',error),
    complete: ()=>console.info('complete')
}

const obs$ = new Observable(sub=>{
        sub.next('Hola');
        sub.next('Carlos');

        sub.complete();
        sub.next('no se ejecuta');
        sub.next('x2');
})

obs$.subscribe(observer);




