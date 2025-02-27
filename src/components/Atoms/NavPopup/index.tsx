import clsx from "clsx"
import { FC, PropsWithChildren, useEffect, useRef, useState } from "react"
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { twMerge } from "tailwind-merge"
import { DownOutlined } from "@/icons"


interface Props extends PropsWithChildren {
    title: string
    active: boolean
}

const NavPopup: FC<Props> = ({ children, title, active }) => {
    const buttonRef = useRef<HTMLButtonElement>(null)
    const [openState, setOpenstate] = useState(false)

    const toggleMenu = () => {
        setOpenstate((openstate => !openstate))
        buttonRef?.current?.click()
    }

    const onHover = (open: boolean, action: 'onMouseEnter' | 'onMouseLeave') => {
        if (
            (!open && !openState && action === 'onMouseEnter') ||
            (open && openState && action === 'onMouseLeave')
        ) {
            toggleMenu()
        }
    }

    const handleClick = (open: boolean) => {
        setOpenstate(!open)
    }

    const handleClickOutside = (event: Event) => {
        if (
            buttonRef.current &&
            !buttonRef.current.contains(event.target as Node)
        ) {
            event.stopPropagation()
        }
    }

    useEffect(() => {
        document.addEventListener(
            'mousedown',
            handleClickOutside as unknown as EventListener
        )

        return () => {
            document.removeEventListener(
                'mousedown',
                handleClickOutside as unknown as EventListener
            )
        }
    })

    const baseClasses =
        'text-subtle h-full flex items-center px-2 2xl:px-4 pt-[3px] border-b-[3px] border-transparent transition-all duration-300'
    const hoverClasses = 'hover:text-primary hover:font-semibold'
    const activeClasses = clsx({
        'text-primary font-semibold border-primary': active
    })


    return (
        <Popover className='relative'>
            {({ open }) => (
                <div
                    className={twMerge(baseClasses, hoverClasses, activeClasses)}
                    onMouseEnter={() => onHover(open, 'onMouseEnter')}
                    onMouseLeave={() => onHover(open, 'onMouseLeave')}
                >
                    <PopoverButton
                        ref={buttonRef}
                        className='focus:outline-none data-[focus]:outline-white'
                    >
                        <div
                            onClick={() => handleClick(open)}
                            className='flex items-center'
                        >
                            <span className='text-[10px] leading-[14px] lg:text-xs 2xl:text-base text-nowrap mr-2'>
                                {title}
                            </span>
                            <DownOutlined className='w-[10px] lg:w-[14px] 2xl:w-4 aspect-square' />
                        </div>
                    </PopoverButton>
                    <PopoverPanel
                        transition
                        anchor='bottom'
                        className={`shadow-black-20 mt-6 divide-y divide-white/5 z-50 bg-white transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0
                  ${title !== `news` ? 'right-0 left-0' : ''}`}
                    >
                        {children}
                    </PopoverPanel>
                </div>
            )}
        </Popover>
    )

}

export default NavPopup
