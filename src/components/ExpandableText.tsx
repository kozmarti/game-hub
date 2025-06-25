import { Button } from '@chakra-ui/button';
import { useState } from 'react'

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({children, maxChars}: Props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    if (children.length <= (maxChars || 200))
        return <div>{children}</div>
    const text = isExpanded ? children : children.substring(0, maxChars) + '...';
  return (
    <div>{text} <Button marginLeft={1} size="xs" fontWeight="bold" colorScheme='yellow' onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? "Show less" : "Read More"}</Button></div>   
  )
}

export default ExpandableText