import s from './InteractionLayer/InteractionLayer.module.scss';
import Image from 'next/image';
import visa from '@/assets/payment/visa.svg';
import mastercard from '@/assets/payment/mastercard.svg';
import cirrus from '@/assets/payment/cirrus.svg';
import discover from '@/assets/payment/discover.svg';
import amex from '@/assets/payment/amex.svg';
import affirm from '@/assets/payment/affirm.svg';

export default function Contact() {
  return (
    <div
      className='absolute bottom-0 left-0 z-10 flex justify-around w-full h-[10%] bg-zinc-800'
      style={{ fontFamily: 'sans-serif' }}>
      <div className='flex flex-col items-center justify-center h-full '>
        <p className='text-lg text-white'>Contact</p>
        <div className='flex flex-col items-center mt-1'>
          <div className={s.description}></div>
          <div className='text-gray-200'>Email: GuorongDu40@outlook.com</div>
          <div className='text-gray-200'>Phone: +86 13204155009</div>
        </div>
      </div>
      <div className='flex w-[360px]'>
        <Image src={visa} alt='payment' width={48} height={48} className='mr-2' />
        <Image src={mastercard} alt='payment' width={48} height={48} className='mr-2' />
        <Image src={cirrus} alt='payment' width={48} height={48} className='mr-2' />
        <Image src={discover} alt='payment' width={48} height={48} className='mr-2' />
        <Image src={amex} alt='payment' width={48} height={48} className='mr-2' />
        <Image src={affirm} alt='payment' width={48} height={48} className='mr-2' />
      </div>
    </div>
  );
}
