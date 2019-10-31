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
      <ion-thumbnail class="auth-img">
      <ion-img src="/assets/icon/icon192.png"></ion-img>
      </ion-thumbnail>
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
      <ion-button size="large" shape="round" expand="full">Register</ion-button>
    </div>
    );
  }
}
