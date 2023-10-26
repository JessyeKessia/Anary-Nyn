import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import { faUser, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formGroup: FormGroup = new FormGroup({
    valor: new FormControl('', Validators.required),
    nome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefone: new FormControl(''),
    notificacoes: new FormControl(false),
    termos: new FormControl(false)
  });

  userIcon = faUser;
  phoneIcon = faPhone;
  emailIcon = faEnvelope;

  onSubmit() {
    if (this.formGroup.valid) {
      Swal.fire({
        icon: 'success',
        title: 'Obrigado!',
        text: 'Doação realizada com sucesso!',
        showConfirmButton: false,
        timer: 2000
      })

      this.formGroup.reset()
    }
  }
}
