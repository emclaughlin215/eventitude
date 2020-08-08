export interface IGlobalButtonStyle {
  backgroundColor: string;
  color: string;
}

export interface IGlobalContainerStyle {
  backgroundColor: string;
  color: string;
}

export interface IGlobalStyle {
  container: IGlobalContainerStyle;
  buttonPrimary?: IGlobalButtonStyle;
  buttonSecondary?: IGlobalButtonStyle;
}

export const globalStylesLight = {
  container: {
    backgroundColor: '#D8E1E8',
    color: '#30404D',
  },
  buttonPrimary: {
    backgroundColor: '#399561',
    color: '#30404D',
  },
  buttonSecondary: {
    backgroundColor: '#FFC940',
    color: '#30404D',
  },
};

export const globalStylesDark = {
  container: {
    backgroundColor: '#30404D',
    color: '#D8E1E8',
  },
};
