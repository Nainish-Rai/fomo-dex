import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
type Props = {}

function FooterSocial({}: Props) {
  return (
    <div className="flex gap-8">
      <FaInstagram className="text-xl text-white" />
      <FaFacebook className="text-xl text-white" />
      <FaTwitter className="text-xl text-white" />
      <FaLinkedin className="text-xl text-white" />
    </div>
  )
}

export default FooterSocial
