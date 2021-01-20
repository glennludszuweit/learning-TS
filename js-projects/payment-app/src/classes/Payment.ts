import { HasRenderer } from '../interfaces/HasRenderer.js';

export class Payment implements HasRenderer {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}

  render() {
    return `${this.recipient} is owed $${this.amount} for ${this.details}`;
  }
}
