import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-login',
  styleUrl: 'app-login.css'
})
export class AppLogin {
  render() {
    return (
    <ion-card class="auth-form">
      <ion-item>
        <ion-label position="floating">Email: </ion-label>
        <ion-input placeholder="johndlamini@email.co.zw"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Password: </ion-label>
        <ion-input placeholder="*************" type="password"></ion-input>

      </ion-item>
      <a href="auth/register">Create account</a>
      <ion-button size="small" class="auth-btn btn" shape="round" expand="full">login</ion-button>
    </ion-card>
    );
  }
}
