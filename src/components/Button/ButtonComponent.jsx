import { Button } from "@nextui-org/react";

const ButtonComponent = ({children, href}) => {
  return (
    <Button as="a" href={href} css={{borderRadius: '$md', border:'$space$1 solid $white', background: '$black', width: '190px'}}>{children}</Button>
  )
}

export default ButtonComponent