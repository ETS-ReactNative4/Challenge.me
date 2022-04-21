import { Accessibility as AccessibilityPrisma } from '@prisma/client';

export interface Accessibility {
  id: number;
  label: string;
}

export default class AccessibilityImpl implements Accessibility {
  id: number;
  label: string;

  static fromPrisma(a: AccessibilityPrisma): AccessibilityImpl {
    return new this(a.id, a.label);
  }

  constructor(id: number, label: string) {
    this.id = id;
    this.label = label;
  }
}
