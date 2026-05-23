import { IBuyer, TValidationErrors } from "../../types";

export class Buyer {
  private data: IBuyer = {
    payment: null,
    email: "",
    phone: "",
    address: "",
  };

  setData(data: Partial<IBuyer>): void {
    this.data = { ...this.data, ...data };
  }

  getData(): IBuyer {
    return this.data;
  }

  clear(): void {
    this.data = {
      payment: null,
      email: "",
      phone: "",
      address: "",
    };
  }

  validate(): TValidationErrors {
    const errors: TValidationErrors = {};

    if (!this.data.email) {
      errors.email = "Введите корректный E-mail адрес";
    }

    if (!this.data.phone) {
      errors.phone = "Введите корректный номер телефона";
    }

    if (!this.data.address) {
      errors.address = "Введите корректный адрес";
    }

    if (!this.data.payment) {
      errors.payment = "Выберите способ оплаты";
    }

    return errors;
  }
}
