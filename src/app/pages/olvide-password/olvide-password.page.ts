import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-olvide-password',
  templateUrl: './olvide-password.page.html',
  styleUrls: ['./olvide-password.page.scss'],
})
export class OlvidePasswordPage implements OnInit {
  recoveryForm!: FormGroup;
  preguntas = ['Nombre de tu primera mascota', 'Ciudad de nacimiento', 'Nombre de tu escuela'];
  hasSecurityQuestion = false; // Cambiar si el usuario ya la configuró
  stepCompleted = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.recoveryForm = this.fb.group({
      pregunta: ['', this.hasSecurityQuestion ? [] : Validators.required],
      respuesta: ['', this.hasSecurityQuestion ? [] : Validators.required],
      nueva: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])/)
      ]],
      confirmacion: ['', Validators.required]
    }, { validator: this.passwordsMatch });
  }

  passwordsMatch(group: FormGroup) {
    return group.get('nueva')?.value === group.get('confirmacion')?.value
      ? null : { mismatch: true };
  }

  onSubmit() {
    // Aquí enviarías a tu backend
    this.stepCompleted = true;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
