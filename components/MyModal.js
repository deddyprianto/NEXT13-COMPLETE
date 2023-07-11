import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useState, useRef } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setDataUser } from '../store/dataSlice';
import { useSWRConfig } from 'swr';

export default function MyModal() {
  const { mutate } = useSWRConfig();
  const dispatch = useDispatch();
  const name = useRef();
  const address = useRef();
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    dispatch(setDataUser('lol'));
    setIsOpen(true);
  }

  const saveData = () => {
    const payload = {
      name: name.current.value,
      address: address.current.value,
    };

    const dataPromis = axios.post(
      'https://64a7ca17dca581464b84c889.mockapi.io/students/family',
      payload,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    toast.promise(
      dataPromis,
      {
        loading: 'Loading',
        success: (data) => {
          mutate('https://64a7ca17dca581464b84c889.mockapi.io/students/family');
          setIsOpen(false);
          return `Successfully saved ${data?.data?.name}`;
        },
        error: (err) => {
          console.log(err);
          setIsOpen(false);
          return `This just happened: ${err.message}`;
        },
      },
      {
        style: {
          minWidth: '250px',
          filter: 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))',
        },
        success: {
          duration: 5000,
          icon: '🔥',
        },
      }
    );
  };

  return (
    <Fragment>
      <div
        onClick={openModal}
        className='bg-blue-500 p-5 rounded-xl text-white cursor-pointer'
      >
        Add New Member
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-md transhtmlForm overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900'
                  >
                    Please Input your data Customer
                  </Dialog.Title>
                  <div className='mt-2'>
                    <div>
                      <label
                        htmlFor='username'
                        className='block text-sm text-gray-500 dark:text-gray-300'
                      >
                        Name
                      </label>

                      <input
                        ref={name}
                        type='text'
                        placeholder='John Doe'
                        className='block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300'
                      />
                    </div>

                    <div>
                      <label
                        htmlFor='username'
                        className='block text-sm text-gray-500 dark:text-gray-300'
                      >
                        Address
                      </label>

                      <input
                        ref={address}
                        type='text'
                        placeholder='Leader etc'
                        className='block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300'
                      />
                    </div>
                  </div>

                  <div className='mt-4'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={saveData}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </Fragment>
  );
}
