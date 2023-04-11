import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

const Markdown = ({content} : {content : string}) => {
  return(
      <ReactMarkdown children={content} remarkPlugins={[remarkGfm]}  />
  )
}
export default Markdown