export type LogTagStyleObject = { [key in ConsoleAllowedCssProps]?: string };

// https://developer.mozilla.org/en-US/docs/Web/API/console#styling_console_output
export type ConsoleAllowedCssProps =
    | "background"
    | "background-attachment"
    | "background-clip"
    | "background-color"
    | "background-image"
    | "background-origin"
    | "background-position"
    | "background-repeat"
    | "background-size"
    | "border"
    | "border-color"
    | "border-style"
    | "border-width"
    | "border-radius"
    | "box-decoration-break"
    | "box-shadow"
    | "clear"
    | "float"
    | "color"
    | "cursor"
    | "display"
    | "font"
    | "font-family"
    | "font-size"
    | "font-stretch"
    | "font-style"
    | "font-variant"
    | "font-weight"
    | "line-height"
    | "margin"
    | "margin-left"
    | "margin-right"
    | "margin-bottom"
    | "margin-top"
    | "outline"
    | "outline-color"
    | "outline-style"
    | "outline-width"
    | "padding"
    | "padding-left"
    | "padding-right"
    | "padding-bottom"
    | "padding-top"
    | "text"
    | "text-align"
    | "text-align-last"
    | "text-combine-upright"
    | "text-decoration"
    | "text-decoration-color"
    | "text-decoration-line"
    | "text-decoration-style"
    | "text-indent"
    | "text-justify"
    | "text-orientation"
    | "text-overflow"
    | "text-shadow"
    | "text-transform"
    | "text-underline-position"
    | "white-space"
    | "word-spacing"
    | "word-break"
    | "writing-mode";
