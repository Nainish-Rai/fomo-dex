import Image from 'next/image'
import * as React from 'react'
import FooterSocial from './FooterSocial'

interface FooterLinkProps {
  title: string
  links: string[]
}

const FooterLink: React.FC<FooterLinkProps> = ({ title, links }) => {
  return (
    <div className=" flex flex-col">
      <div className="text-left text-base font-medium text-white">{title}</div>
      {links.map((link, index) => (
        <div key={index} className={`lg:mt-${index === 0 ? 10 : 6} mt-4`}>
          <a className="text-sm duration-200 hover:text-purple-500" href={link}>
            {link}
          </a>
        </div>
      ))}
    </div>
  )
}

const Footer: React.FC = () => {
  const footerLinks: FooterLinkProps[] = [
    {
      title: 'Usefull Links',
      links: [
        'Content',
        'How it Works',
        'Create',
        'Explore',
        'Terms & Services',
      ],
    },
    {
      title: 'Community',
      links: ['Help Center', 'Partners', 'Suggestions', 'Blog', 'Newsletters'],
    },
    {
      title: 'Partner',
      links: ['Our Partner', 'Become a Partner'],
    },
  ]

  return (
    <footer className=" z-10 flex flex-col items-center self-stretch bg-neutral-950 bg-opacity-60 px-10 pb-8 pt-20 leading-[150%] md:flex-row lg:mt-40  lg:px-16">
      <div className="mx-auto mt-1.5 flex w-full max-w-7xl flex-col max-md:max-w-full">
        <div className="flex justify-between gap-5 text-base text-white text-opacity-70 max-md:max-w-full max-md:flex-wrap ">
          <div className="mb-16 mt-3.5 flex w-full flex-col items-center self-start text-lg leading-8 lg:mb-0 lg:w-fit lg:items-start">
            <Image
              loading="lazy"
              src="/brandlogo.svg"
              alt="Company logo"
              width={100}
              height={42}
              className="aspect-[4.17] w-[120px] max-w-full lg:w-[177px]"
            />
            <div className="mt-4 text-center text-xs leading-6  lg:mt-16 lg:text-left lg:text-base">
              A new way to make the payments easy, reliable <br /> and secure.
            </div>{' '}
            <div className="lg:hidden">
              <FooterSocial />
            </div>
          </div>

          {footerLinks.map((link, index) => (
            <FooterLink key={index} title={link.title} links={link.links} />
          ))}
        </div>
        <div className="mt-14 h-px shrink-0 border border-solid border-zinc-700 bg-zinc-700 max-md:mt-10 max-md:max-w-full" />
        <div className="mt-9 flex items-center justify-between gap-5 text-center text-sm  text-white text-opacity-60 max-md:flex-wrap">
          <div className="flex  flex-row flex-wrap items-center gap-3.5 self-start whitespace-nowrap">
            <div className=" flex items-center gap-2">
              Copyright <span className="text-xl"> &copy;</span>
            </div>
            {new Date().getFullYear()} Fomo. All Rights Reserved.
          </div>
          <FooterSocial />
        </div>
      </div>
    </footer>
  )
}

export default Footer
