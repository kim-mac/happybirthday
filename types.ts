
export enum ViewState {
  INTRO = 'INTRO',
  QUESTION = 'QUESTION',
  REJECTION = 'REJECTION',
  WISH = 'WISH',
  GIFTS = 'GIFTS'
}

export interface GiftBox {
  id: number;
  isOpen: boolean;
  label: string;
  subLabel: string;
  icon: string;
  contentIcon: string;
  contentImageUrl: string;
  isSpecial: boolean;
}
