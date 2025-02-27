import { FC } from 'react'
import { PropsWithChildren } from '@/types'
import Footer from './Footer'
import Header from './Header'



const Layout: FC<PropsWithChildren> = ({ children }) => {
    return <>{children}</>
}
export default Object.assign(Layout, { Footer, Header })
