import { Observable, Observer } from 'rxjs';
import { take } from 'rxjs/operators';


const observer: Observer<any> = {
    next: value => console.log('Next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('complete')
}


const interval$ = new Observable<number>(sub => {
    let count = 0;
    const interval = setInterval(() => {
        count = count + 1;
        sub.next(count)
    }, 1000);
    return () => {
        clearInterval(interval);
        console.log('observable destroyed')
    }
})

const sub = interval$.subscribe(num => console.log('num: ', num));

setTimeout(() => {
    sub.unsubscribe();
    console.log('unsubcribe')
},4000)

