import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw';
import rehypeFormat from 'rehype-format';

const Markdown = ({content}: { content: string }) => {
    return (
        <ReactMarkdown
            className={' markdown'}
            children={content}
            rehypePlugins={[rehypeRaw, rehypeFormat]}
            remarkPlugins={[remarkGfm]}
        />
    )
}
export default Markdown