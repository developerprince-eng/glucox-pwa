import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-login',
  styleUrl: 'app-login.css'
})
export class AppLogin {
  render() {
    return (
    <div class="auth-form">

      <h1>MyGluco</h1>
      <ion-item class="input-item">
        <ion-label position="stacked">Email: </ion-label>
        <ion-input placeholder="johndlamini@email.co.zw"></ion-input>
      </ion-item>
      <ion-item class="input-item">
        <ion-label position="stacked">Password: </ion-label>
        <ion-input placeholder="*************" type="password"></ion-input>
      </ion-item>
      <a href="auth/register">Create account</a>
      <ion-button size="small" class="auth-btn" shape="round" expand="full">login</ion-button>
    </div>
    );
  }
}
