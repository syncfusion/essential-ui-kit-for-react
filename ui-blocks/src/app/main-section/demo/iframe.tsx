import React, { ReactEventHandler } from 'react';
import dynamic from 'next/dynamic';

interface IFrameComponentProps {
  src: string;
  className?: string;
  title: string;
  handleLoad: ReactEventHandler<HTMLIFrameElement>;
}

const IFrameComponentInternal = React.forwardRef<HTMLIFrameElement, IFrameComponentProps>(({ src, className, title, handleLoad}, ref) => {
  return (
    <iframe
      ref={ref}
      src={src}
      className={className}
      title={title}
      onLoad={handleLoad}
    />
  );
});

IFrameComponentInternal.displayName = 'IFrameComponentInternal';

const IFrameComponent = dynamic(() => Promise.resolve(IFrameComponentInternal), { ssr: false });

export default IFrameComponent;