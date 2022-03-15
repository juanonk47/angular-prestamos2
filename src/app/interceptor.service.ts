import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{
  intercept(req : HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent<any>> {
    const httpReq = req.clone({
      setHeaders: {
        Authorization: `${localStorage.getItem(`${environment.JWT_KEY}`)}`
      }
    });
    return next.handle(httpReq).pipe(
      tap(evet => {
        if(evet instanceof HttpResponse){
          if(evet.url?.includes("login")){
            localStorage.setItem(`${environment.JWT_KEY}`,evet.body.Bearer);
            localStorage.setItem(`${environment.JWT_KEY}-USER-ID`,evet.body.id_usuario);
          }
        }
      }),
      catchError((err: any) => {
        if(err instanceof HttpErrorResponse) {
            try {
                console.error(err.error.message, err.error.title, { positionClass: 'toast-bottom-center' });
            } catch(e) {
                console.error('An error occurred', '', { positionClass: 'toast-bottom-center' });
            }
            //log error
        }
        return of(err);
    })
    )
}
}
