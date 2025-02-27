'use client'
import { FC } from "react"
import Container from "../Atoms/Container"

const Header: FC = () => {
    return (
        <header className="bg-white sticky top-0 z-40 h-[64px] md:h-[34px] lg:h-[46px] 2xl:h-[64px] md:shadow-black-[.1] lg:shadow-black-[.2] 2xl:shadow-black-20">
            <Container
                tag={'nav'}
                aria-label='Global'
                className='flex items-center justify-between h-full'
            >
                {/* Your Header Components */}
            </Container>
        </header>
    )
}
export default Header
