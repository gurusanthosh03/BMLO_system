export const table_columns = [
  'PAN Number', 'Mark Sheet Details', 'Assets'
]

export interface HardcodedDetails {
  [id: number]: {
    panNumber: string;
    markSheetDetails: string;
    assets: string;
  };
}

export const hardcodedDetails: HardcodedDetails = {
  1: {
    panNumber: 'ABCD1234',
    markSheetDetails: 'Mark Sheet Details 1',
    assets: 'Assets Details 1'
  },
  2: {
    panNumber: 'EFGH5678',
    markSheetDetails: 'Mark Sheet Details 2',
    assets: 'Assets Details 2'
  },
  3: {
    panNumber: 'IJKL9012',
    markSheetDetails: 'Mark Sheet Details 3',
    assets: 'Assets Details 3'
  },
  4: {
    panNumber: 'MNOP3456',
    markSheetDetails: 'Mark Sheet Details 4',
    assets: 'Assets Details 4'
  },
  5: {
    panNumber: 'QRST7890',
    markSheetDetails: 'Mark Sheet Details 5',
    assets: 'Assets Details 5'
  }
};

  