import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-remove-button',
  templateUrl: './remove-button.html',
  imports: [TranslatePipe],
  styleUrl: './remove-button.scss',
})
export class RemoveButton {}
