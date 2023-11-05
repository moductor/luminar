// Each string represents the corresponging CSS class.
const styles = {
  display1: {
    medium: "font-display-1-medium",
    bold: "font-display-1-bold",
    black: "font-display-1-black",
  },

  display2: {
    medium: "font-display-2-medium",
    bold: "font-display-2-bold",
    black: "font-display-2-black",
  },

  heading1: {
    medium: "font-heading-1-medium",
    bold: "font-heading-1-bold",
    black: "font-heading-1-black",
  },

  heading2: {
    medium: "font-heading-2-medium",
    bold: "font-heading-2-bold",
    black: "font-heading-2-black",
  },

  heading3: {
    semiBold: "font-heading-3-semi-bold",
    bold: "font-heading-3-bold",
    black: "font-heading-3-black",
  },

  subheading1: {
    regular: "font-subheading-1-regular",
    semiBold: "font-subheading-1-semi-bold",
  },

  subheading2: {
    regular: "font-subheading-2-regular",
    semiBold: "font-subheading-2-semi-bold",
  },

  body: {
    regular: "font-body-regular",
    bold: "font-body-bold",
  },

  caption: {
    regular: "font-caption-regular",
    bold: "font-caption-bold",
  },
};

export default styles;

export function getValues(): string[] {
  const values: string[] = [];

  type Variants = {
    [name: string]: string;
  };

  type Styles = {
    [name: string]: Variants;
  };

  for (const styleName of Object.keys(styles)) {
    const style = (styles as Styles)[styleName];

    for (const variant of Object.keys(style)) {
      const className = style[variant];
      values.push(className);
    }
  }

  return values;
}
