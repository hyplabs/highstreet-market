import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, IconDefinition } from '@fortawesome/free-brands-svg-icons'
import ShareIcon from '../../public/icons/share.svg'
import Dropdown from '../Dropdown/Dropdown'

type IconSize = {
  width: string | number
  height: string | number
}

type Props = {
  className?: string
  mainIconSize?: IconSize
  socialMediaIconSize?: IconSize
  shareText: string
  shareUrl: string
}

const ShareButton = ({ className, mainIconSize, socialMediaIconSize, shareText, shareUrl }: Props) => {
  const socialMedia = [
    {
      media: 'Twitter',
      icon: faTwitter,
      href: `https://www.twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
    },
    {
      media: 'Facebook',
      icon: faFacebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
    },
  ]

  return (
    <Dropdown
      className={className}
      button={
        <div className='uppercase flex flex-row space-x-2 mr-4'>
          <Image src={ShareIcon} width={mainIconSize?.width || 15} height={mainIconSize?.height || 15} alt='Share Icon' />
          <span>Share</span>
        </div>
      }
      itemsClassName='w-40'
      items={socialMedia.map(({ media, icon, href }) => (
        {
          element: (
            <SocialMediaElement
              icon={icon}
              iconSize={{ width: socialMediaIconSize?.width || 15, height: socialMediaIconSize?.height || 15 }}
              text={media}
              href={href}
            />
          ),
          key: media,
        }
      ))}
    />
  )
}

type SocialMediaElementProps = {
  icon: IconDefinition
  iconSize: IconSize
  text: string
  href: string
}

const SocialMediaElement = ({ icon, iconSize, text, href }: SocialMediaElementProps) => (
  <a className='p-2 flex items-center space-x-3 text-hs-sm' href={href} rel='noreferrer' target='_blank'>
    <FontAwesomeIcon icon={icon} {...iconSize} />
    <span>{text}</span>
  </a>
)

export default ShareButton
