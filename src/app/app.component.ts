import { Component } from '@angular/core';

export class Unicorn {
  id: number;
  name: string;
}

const UNICORNS: Unicorn[] = [
  {id: 11, name: "Apple Jack"},
  {id: 12, name: "Pinkie Pie"},
  {id: 13, name: "Rarity"},
  {id: 14, name: "Fluttershy"},
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Stable of Unicorns';
  unicorns: Unicorn [] = UNICORNS;
  selectedUnicorn: Unicorn;

  onSelect(unicorn: Unicorn): void {
    this.selectedUnicorn = unicorn;
  }
}
