// CSS module declaration for mestro-ui/styles import
declare module 'mestro-ui/styles' {
  const css: string;
  export = css;
}

// Fallback for any CSS imports
declare module '*.css' {
  const css: string;
  export default css;
}
