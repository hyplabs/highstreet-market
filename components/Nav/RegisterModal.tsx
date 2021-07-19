import Modal from 'components/Modal/Modal'
import { useEffect, useState } from 'react'

type Props = {
  onClose: () => void
  open: boolean
  walletAddress: string
  onFinish: (username: string) => Promise<void>
}

const RegisterModal: React.FC<Props> = ({ onClose, open, walletAddress, onFinish }) => {
  const [username, setUsername] = useState<string>('')

  useEffect(() => {
    if (open) {
      setUsername('')
    }
  }, [open])

  return (
    <Modal onClose={onClose} open={open}>
      <Modal.Title>
        Create an account
      </Modal.Title>
      <Modal.Body>
        <div className='w-96 flex space-x-4 py-4'>
          <div className='flex flex-col space-y-2'>
            <span>Username: </span>
            <input
              value={username}
              onChange={(e) => setUsername(e.currentTarget.value)}
              className='border-2 py-1'
            />
          </div>
          <div className='flex flex-col space-y-2'>
            <span>Wallet: </span>
            <span className='py-1'>
              {`${walletAddress.slice(0, 8)}...${walletAddress.slice(walletAddress.length - 6)}`}
            </span>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            onClick={() => onFinish(username)}
            disabled={!username}
            className='disabled:opacity-25 disabled:cursor-default bg-purple1 text-white w-36 rounded-xxl hover:opacity-75'
          >
            Create
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}

export default RegisterModal
