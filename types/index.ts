export type PetState = 'Working' | 'Needs you' | 'Done' | 'Quiet';

export type ProviderType = 'claude' | 'codex';

export interface StorageSegment {
  name: string;
  provider?: ProviderType;
  colorClass?: string;
  sizeDesc?: string;
}

export interface NavAction {
  label: string;
  href: string;
  external?: boolean;
}

export interface OutcomeKey {
  label: string;
  badge?: string;
}

export * from './cart';
