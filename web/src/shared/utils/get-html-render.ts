import { marked } from "marked";

export type TagTitle =
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "original";

export const getHtmlSimpleCopy = (
    markdown: string = "",
    tagTitle: TagTitle = "p",
) => {
    const renderer = new marked.Renderer();
    if (tagTitle === "original") {
        renderer.heading = (data) => {
            return `<h${data.depth} class="a-title" >${data.text}</h${data.depth}>`;
        };
    } else {
        renderer.heading = (data) => {
            return `<${tagTitle} class="a-title" >${data.text}</${tagTitle}>`;
        };
    }

    marked.setOptions({ renderer });
    return marked(markdown);
};
