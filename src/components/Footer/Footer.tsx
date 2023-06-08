import { type FC } from 'react'
import { FooterWrapper } from './Footer.styled'

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
 <FooterWrapper data-testid="Footer">
    Footer Component
 </FooterWrapper>
)

export default Footer
