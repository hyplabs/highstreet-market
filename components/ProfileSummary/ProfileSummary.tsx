import Image from 'next/image'
import EditIcon from 'public/icons/edit.svg'
import VaultIcon from 'public/icons/vault.svg'
import EthIcon from 'public/icons/eth.svg'
import DaiIcon from 'public/icons/dai.svg'
import BalanceCard from './BalanceCard'

const ProfileSummary: React.FC = () => {
  return (
    <div className='w-full bg-hs-grey pt-40 pl-28 text-white' style={{ height: '500px' }}>
      <div className='flex flex-row'>
        {/* avatar image */}
        <div className='pt-8'>
          <img
            // TODO: placeholder image source
            src='https://stonegatesl.com/wp-content/uploads/2021/01/avatar.jpg'
            alt='avatar'
            className='rounded-full'
            style={{ maxWidth: 220, maxHeight: 220 }}
          />
        </div>
        {/* profile summary section */}
        <div className='flex flex-col pl-8 pt-8'>
          <span className='text-hs-3xl font-bold pb-1'>Hi User</span>
          <span className='text-hs-3lg pb-4'>Welcome back to your dashboard!</span>
          <div className='flex items-center space-x-1'>
            <Image src={EditIcon} alt='edit icon' />
            <a
              className='text-hs-md underline cursor-pointer'
              style={{ textDecorationThickness: '1px' }}
            >
              Account detail
            </a>
          </div>
          <div className='pt-8'>
            <button
              className='rounded-large border-2 border-white uppercase py-3 flex justify-center items-center space-x-2'
              style={{ width: 240 }}
            >
              <Image src={VaultIcon} alt='vault icon' />
              <span>Open Vault</span>
            </button>
          </div>
        </div>
        {/* balance section */}
        {/* TODO: get balance using user address */}
        <div className='flex space-x-8 ml-auto' style={{ marginRight: '10%' }}>
          <BalanceCard
            symbol='ETH'
            symbolImage={EthIcon}
            value='348.77'
            balance='0.382'
            className='bg-hs-darketh'
          />
          <BalanceCard
            symbol='DAI'
            symbolImage={DaiIcon}
            value='348.77'
            balance='0.382'
            className='bg-hs-gold'
          />
        </div>
      </div>
    </div>
  )
}

export default ProfileSummary
