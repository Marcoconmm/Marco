import { Component, OnInit } from '@angular/core';
import { DataDbService } from '../../services/data-db.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'contactForm',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  createFormGroup() {
    return new FormGroup({
      email: new FormControl(''),
      name: new FormControl(''),
      message: new FormControl('')
    });
  }

  contactForm: FormGroup;

  constructor(private dbData: DataDbService) {
    this.contactForm = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  // Metodo para limpiar formulario
  onResetForm() {
    this.contactForm.reset();
  }


  //Metodo para guardar valores de formulario
  onSaveForm() {
    console.log('Saved', this.contactForm.value);
    const newContact = {
      name: 'Marco',
      email: 'marcoconmm@gmail.com',
      message: 'Hola Mundo'
    }
    //this.dbData.saveMessage(newContact);
  }

}
