import Image from 'next/image'
import * as React from 'react'
import FooterSocial from './FooterSocial'

interface FooterLinkProps {
  title: string
  links: string[]
}

const FooterLink: React.FC<FooterLinkProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col">
      <div className="text-left text-base font-medium text-white">{title}</div>
      {links.map((link, index) => (
        <div key={index} className={`mt-${index === 0 ? 10 : 6}`}>
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
    <footer className=" z-10 mt-40 flex flex-col items-center self-stretch bg-neutral-950 bg-opacity-60 px-16 pb-8 pt-20 leading-[150%]  md:flex-row">
      <div className="mx-auto mt-1.5 flex w-full max-w-7xl flex-col max-md:max-w-full">
        <div className="flex justify-between gap-5 text-base text-white text-opacity-70 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
          <div className="mt-3.5 flex flex-col self-start text-lg leading-8">
            <Image
              loading="lazy"
              src="/brandlogo.svg"
              alt="Company logo"
              width={100}
              height={42}
              className="aspect-[4.17] w-[177px] max-w-full"
            />
            <div className="mt-16 text-base leading-6 max-md:mt-10">
              A new way to make the payments easy, reliable <br /> and secure.
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
