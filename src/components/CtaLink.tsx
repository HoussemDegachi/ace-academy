import { Link } from 'react-router-dom'
import CtaBtn from './CtaBtn'

type CtaLinkProps = {
    className?: string,
    text: string,
    link: string
}

function CtaLink({className, text, link}: CtaLinkProps) {
  return (
    <Link to={link} className={className&&className} ><CtaBtn text={text} className={className} /></Link>
  )
}

export default CtaLink