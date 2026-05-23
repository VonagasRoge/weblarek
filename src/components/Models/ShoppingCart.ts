import { IProduct } from "../../types";

export class ShoppingCart {
  private items: IProduct[] = [];

  getItems(): IProduct[] {
    return this.items;
  }

  addItem(product: IProduct): void {
    if (!this.containsItem(product.id)) {
      this.items.push(product);
    }
  }

  removeItem(productId: string): void {
    this.items = this.items.filter(item => item.id !== productId);
  }

  clear(): void {
    this.items = [];
  }

  getTotalPrice(): number {
    return this.items.reduce((sum, item) => {
      return item.price !== null ? sum + item.price : sum;
    }, 0);
  }

  getItemCount(): number {
    return this.items.length;
  }

  containsItem(productId: string): boolean {
    return this.items.some(item => item.id === productId);
  }
}
