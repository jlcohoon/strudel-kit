export interface DataFilter {
  field: string;
  value: string | number | any[] | null;
  operator: string;
}

export interface FilterConfig {
  field: string;
  label: string;
  filterComponent: string;
  group?: string;
  tooltip?: string;
  filterProps?: any;
}

export enum FilterOperator {
  CONTAINS = 'CONTAINS',
  CONTAINS_ONE_OF = 'CONTAINS_ONE_OF',
  EQUALS = 'EQUALS',
  EQUALS_ONE_OF = 'EQUALS_ONE_OF',
  BETWEEN_INCLUSIVE = 'BETWEEN_INCLUSIVE',
  BETWEEN_DATES_INCLUSIVE = 'BETWEEN_DATES_INCLUSIVE',
}

export interface DataCard {
  title: string;
  content?: string;
  tags?: string;
}