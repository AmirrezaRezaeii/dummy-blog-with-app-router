import matter from "gray-matter";
import fs, { readFileSync } from "node:fs";
import path from "node:path";
import { remark } from "remark";
import remarkParse from "remark-parse";


export function getFaqData() {
  const file = path.join(process.cwd(), "content/faq.md")
  const fileContent = readFileSync(file, "utf-8")
  return matter(fileContent);
}

export function getAllParsedElementsFromMd() {
  const fileContent = getFaqData();
  return remark().use(remarkParse).parse(fileContent.content)
}

export function getFaqObjects() {
  const parsed = getAllParsedElementsFromMd()
  let faqArray = []

  for (let i = 0; i < parsed.children[i].length; i++) {
    if (parsed.children[i].type === "heading") {
      let obj = {}
      obj.question = parsed.children[i].children[0].value
      obj.answer = parsed.children[i + 1].children[0].value
      faqArray.push(obj)
    }
  }
  
  return faqArray;
}
