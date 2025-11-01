import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

// Import by Arif
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { Services } from './pages/services/services';
import { Error404 } from './pages/error404/error404';


@Component({
  selector: 'app-root',
  // Import by Arif 
  imports: [RouterOutlet, RouterLink, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-first-app');
}