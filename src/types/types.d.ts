declare module "*.png" {
  const value: any;
  export = value;
}

declare module "@env" {
  export const PUBLIC_KEY: string;
  export const PRIVATE_KEY: string;
}
