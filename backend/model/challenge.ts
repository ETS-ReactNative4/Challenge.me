import { Challenge as ChallengePrisma } from '@prisma/client';

export interface Challenge {
  id: number;
  label: string;
  points: number;
  createdAt: Date;
  accessibilityIds: number[];
}

export default class ChallengeImpl implements Challenge {
  id: number;
  label: string;
  points: number;
  createdAt: Date;
  accessibilityIds: number[];

  static fromPrisma(
    c: ChallengePrisma,
    accessibilityIds: number[] = []
  ): ChallengeImpl {
    return new this(c.id, c.label, c.points, c.createdAt, accessibilityIds);
  }

  constructor(
    id: number,
    label: string,
    points: number,
    createdAt: Date,
    accessibilityIds: number[]
  ) {
    this.id = id;
    this.label = label;
    this.points = points;
    this.createdAt = createdAt;
    this.accessibilityIds = accessibilityIds;
  }
}
