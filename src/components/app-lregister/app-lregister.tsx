import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-lregister',
  styleUrl: 'app-lregister.css'
})
export class AppLregister {

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
      <ion-item>
        <ion-label position="floating">Repeat Password: </ion-label>
        <ion-input placeholder="*************" type="password"></ion-input>
      </ion-item>
      <ion-button size="small" class="auth-btn btn" shape="round" expand="full">Register</ion-button>
    </ion-card>
    );
  }
}
