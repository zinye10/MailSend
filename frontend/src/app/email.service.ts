import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  sendEmail(emailData: any): Observable<any> {
    console.log("mail sent", emailData);
    return this.http.post<any>(this.apiUrl + 'send-email', emailData).pipe(
      tap(response => console.log(response)),  // Add this line to log the response
      catchError(error => {
        console.error('Error:', error);
        return throwError(error);
      })
    );
  }
}
/*
let transporter = nodemailer.createTransport({
  host: 'smtp.yourdomain.com', // Your SMTP server
  port: 587, // Commonly used SMTP port
  secure: false, // True for 465, false for other ports
  auth: {
    user: 'YOUR_EMAIL@yourdomain.com', // Your email address
    pass: 'YOUR_EMAIL_PASSWORD' // Your email password
  }
});*/

