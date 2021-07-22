const HowTo = () => (
  <div className={'bg-purple1'}>
    <div className='text-center px-2 md:rounded-xxl md:px-12' style={{backgroundColor: '#E7DFFF'}}>
      <h3 className='text-hs-3xl lg:text-hs-4xl py-16 font-bold'>
        How it works
      </h3>
      <iframe
        style={{ width: '50vw', height: '28.125vw', minWidth: 350, minHeight: 196.875 }}
        className='mx-auto'
        src='https://www.youtube.com/embed/wiFYz0VNkMQ'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
      <button
        type='submit'
        className='my-12 px-10 py-4 rounded-xl text-white bg-gradient-to-b from-purple to-darkishpurple'
        style={{ width: '80%', height: '56px', maxWidth: '392px' }}
      >
        <a href={'/#join-metaverse-form'}>
          Join Our Alpha
        </a>
      </button>
    </div>
  </div>
)

export default HowTo
