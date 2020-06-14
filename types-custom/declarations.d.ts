declare const IS_CLIENT: boolean;
declare const HOT_RELOAD: boolean;

declare module '*.scss' {
  export const content: { [className: string]: string };
  export default content;
}
