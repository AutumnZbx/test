import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private navCtrl: NavController) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    const { email, password } = this.loginForm.value;

    // Puedes reemplazar esto con lógica real de autenticación
    if (email === 'admin@correo.com' && password === 'Admin123!') {
      localStorage.setItem('usuario', email);
      this.navCtrl.navigateRoot('/home');
    } else {
      alert('Correo o contraseña incorrectos');
    }
  }

  goToForgotPassword() {
    this.navCtrl.navigateForward('/olvide-password');
  }
}
