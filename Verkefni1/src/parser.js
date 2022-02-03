import { marked } from "marked";
import matter from 'gray-matter';

/**
 * parse markdown string
 * @param {string} input Input markdown string
 * @returns {string}parsed markdown
 */

export function parse(input){
    const {
        content,
        data,
    } = matter(input);

    const { data } = data;

    const parsed = marked.parse(content);


    return {
        content: parsed,
        data,
    };
}