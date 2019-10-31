import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-lregister',
  styleUrl: 'app-lregister.css'
})
export class AppLregister {

  render() {
    return (
      <div class="auth-form">
      <h1>MyGluco</h1>
      <ion-item class="input-item">
        <ion-label position="floating">Email: </ion-label>
        <ion-input placeholder="johndlamini@email.co.zw"></ion-input>
      </ion-item>
      <ion-item class="input-item">
        <ion-label position="floating">Password: </ion-label>
        <ion-input placeholder="*************" type="password"></ion-input>
      </ion-item>
      <ion-item class="input-item">
        <ion-label position="floating">Repeat Password: </ion-label>
        <ion-input placeholder="*************" type="password"></ion-input>
      </ion-item>
      <ion-button size="small" class="auth-btn" shape="round" expand="full">Register</ion-button>
    </div>
    );
  }
}
