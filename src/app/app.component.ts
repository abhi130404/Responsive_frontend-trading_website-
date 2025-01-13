import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchButtonComponent } from './search-button/search-button.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SearchButtonComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'figma_assignment';
}
