import { Component } from '@angular/core';
import { UiComponent } from '@poseidon/ui';

@Component({
  standalone: true,
  imports: [UiComponent],
  selector: 'poseodon-root',
  template: `
    <!-- This just an entry point for the UI, so that users can have the CMS running on their side -->
    <!-- Everything, including routing is handled by the @poseodon/ui package, that serves as the entry point -->
    <app-ui></app-ui>
  `,
})
export class AppComponent {}
