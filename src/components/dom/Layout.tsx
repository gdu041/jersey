import { useRef, forwardRef } from 'react';
import { mergeRefs } from 'react-merge-refs';
import Header from '@/components/dom/Header';
import Contact from '@/components/dom/Contact';
// import RecordingPanel from '../RecordingPanel';

const Layout = forwardRef(({ children, ...props }: { children: JSX.Element[] }, ref) => {
  const localRef = useRef();
  return (
    <>
      <div
        ref={mergeRefs([ref, localRef])}
        className='absolute top-0 left-0 z-0 w-screen overflow-hidden h-[90%] h-screen-ios dom bg-zinc-900 text-gray-50'>
        <Header />
        {/* <RecordingPanel /> */}
        {children}
      </div>
      <Contact />
    </>
  );
});
Layout.displayName = 'Layout';

export default Layout;
