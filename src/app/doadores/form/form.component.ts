import { Component, OnInit } from '@angular/core';
import { faUser, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent implements OnInit {
  formGroup: FormGroup;
  userIcon = faUser;
  phoneIcon = faPhone;
  emailIcon = faEnvelope;

  constructor(){
    this.formGroup = new FormGroup({
      doacao: new FormControl(),
      nome: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      notificacoes: new FormControl(false),
      termos: new FormControl(false)
    });
  }

  ngOnInit(): void {
    
  };

  onSubmit() {
      Swal.fire({
    icon: 'success',
    title: 'Sucesso',
    text: 'Cliente cadastrado com sucesso!',
    showConfirmButton: false,
    timer: 1500
  })
    console.log(this.formGroup.valid)
    if (this.formGroup.valid) {
      console.log('oii')
      const dadosFormulario = this.formGroup.value;
      console.log('oii')
      this.formGroup.reset();
    }
    else {
      }
    };
  }
