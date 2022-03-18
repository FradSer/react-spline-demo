import dynamic from 'next/dynamic';

const WebXR = dynamic(() => import('../components/WebXR'), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <WebXR />
    </div>
  );
}
