import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Import by Arif
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Home } from './components/home/home';
import { Contact } from './pages/contact/contact';


@Component({
  selector: 'app-root',
  // Import by Arif 
  imports: [RouterOutlet, Header, Footer, Home, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-first-app');
}
