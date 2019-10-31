import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  render() {
    return (
      <ion-app class="bg">
        <ion-router useHash={false}>
          <ion-route url="/" component="app-login" />
          <ion-route url="/auth/" component="app-login" />
          <ion-route url="/auth/register" component="app-lregister" />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
