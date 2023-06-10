import Card from './Card';

export default function Main() {
  return (
    <div className='h-4/5 overflow-x-auto'>
      <h1 className='text-center mt-10 font-semibold'>YOUR DATA ENTRY</h1>
      <div className='mt-20'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
