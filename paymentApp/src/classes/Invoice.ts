import { HasRenderer } from '../interfaces/HasRenderer.js';

export class Invoice implements HasRenderer {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  render() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
