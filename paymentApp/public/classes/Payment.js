export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    render() {
        return `${this.recipient} is owed $${this.amount} for ${this.details}`;
    }
}
