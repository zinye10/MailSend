import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmailService } from './email.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'mailFrontend';

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
    this.sendEmail();
  }

  sendEmail() {
    const name = 'Zin Ye!';
    const emailData = {
      to: 'octoberprince.1995@gmail.com',
      subject: 'Test Email',
      html: `<h1>This is a Test Email</h1><p>This email contains <strong>${name}</strong> content.</p>`,
    };

    this.emailService.sendEmail(emailData).subscribe(
      response => {
        console.log('Email sent successfully', response);
      },
      error => {
        console.log('Error sending email', error);
      }
    );
  }
}
