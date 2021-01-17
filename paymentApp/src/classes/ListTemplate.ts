import { HasRenderer } from '../interfaces/HasRenderer.js';

export class ListTemplate {
  constructor(private container: HTMLUListElement) {}

  render(item: HasRenderer, heading: string, position: 'start' | 'end') {
    const li = document.createElement('li');
    const h4 = document.createElement('h4');
    const p = document.createElement('p');

    h4.innerText = heading;
    li.append(h4);
    p.innerText = item.render();
    li.append(p);

    if (position === 'start') {
      this.container.prepend(li);
    } else {
      this.container.append(li);
    }
  }
}
