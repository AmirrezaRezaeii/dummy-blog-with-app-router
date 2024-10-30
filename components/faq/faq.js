import { getFaqData, getFaqObjects } from "@/lib/util/faq-util";
import ReactMarkdown from "react-markdown";

export default function Faq() {
  const content = getFaqData();
  const faqs = getFaqObjects();
  console.log(faqs)

  return (
    <main className="markdown">
        <ReactMarkdown>
           
        </ReactMarkdown>
    </main>
  );
}
