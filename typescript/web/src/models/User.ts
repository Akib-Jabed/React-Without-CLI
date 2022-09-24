interface UserInterface {
  name?: string;
  age?: number;
}

export class User {
  constructor(private data: UserInterface) {}

  get(property: string): string | number {
    return this.data[property];
  }

  set(updateData: UserInterface): void {
    Object.assign(this.data, updateData);
  }
}
