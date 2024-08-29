declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.png" {
  const value: any;
  export = value;
}

declare module "*.pdf" {
  const value: any;
  export = value;
}
