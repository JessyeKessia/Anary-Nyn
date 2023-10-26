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

  showFormatoMoeda = false;
  valorCustomizadoSelecionado = false

  onSubmit() {
    if (this.formGroup.get('nome')?.errors && this.formGroup.get('nome')?.hasError('required')) {
      (document.querySelector('.status-nome') as Element).textContent = 'Campo Obrigatório';
      (document.querySelector('.control-input1') as Element).classList.add('status-border');
    }

    if (this.formGroup.get('email')?.errors && this.formGroup.get('email')?.hasError('required')) {
      (document.querySelector('.status-email') as Element).textContent = 'Campo Obrigatório';
      (document.querySelector('.control-input2') as Element).classList.add('status-border');
    }

    if (this.formGroup.get('email')?.errors && this.formGroup.get('email')?.hasError('email')) {
      (document.querySelector('.status-email') as Element).textContent = 'E-mail inválido';
      (document.querySelector('.control-input2') as Element).classList.add('status-border');
    }

    if (this.formGroup.valid) {
      Swal.fire({
        icon: 'success',
        title: 'Obrigado!',
        text: 'Doação realizada com sucesso!',
        showConfirmButton: false,
        timer: 2000
      });

      (document.querySelector('.status-nome') as Element).textContent = '';
      (document.querySelector('.control-input1') as Element).classList.remove('status-border');

      (document.querySelector('.status-email') as Element).textContent = '';
      (document.querySelector('.control-input2') as Element).classList.remove('status-border');

      this.formGroup.reset();
      this.showFormatoMoeda = false;
      (document.querySelector('#valor-customizado') as HTMLInputElement).classList.remove('fill');
    }
  }

  onFocusValorCustomizado(event: FocusEvent) {
    if (this.formGroup.get('valor')?.value !== '') {
      this.formGroup.get('valor')?.reset()
    }

    this.showFormatoMoeda = true;

    (event.target as HTMLInputElement).classList.add('fill')

    if ((event.target as HTMLInputElement).value === '') {
      (event.target as HTMLInputElement).value = '0'
    }
  }

  onFocusValorPadrao() {
    if (this.showFormatoMoeda || this.formGroup.get('valor')?.value === '') {
      this.showFormatoMoeda = false;
      (document.querySelector('#valor-customizado') as HTMLInputElement).value = '';
      (document.querySelector('#valor-customizado') as HTMLInputElement).classList.remove('fill');
    }
  }
}
