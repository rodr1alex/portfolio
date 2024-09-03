import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Message } from '../../models/Message';
import { ContactService } from '../../services/contact.service';
@Component({
  selector: 'contact-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  message: Message = new Message();

  constructor(private contactService: ContactService){}


  sendMessage(userForm: NgForm){
    this.contactService.sendMessage(this.message).subscribe(
      {
        next: response =>{
          alert(response.response);
          userForm.reset();
        }
      }
    )
  }
}
