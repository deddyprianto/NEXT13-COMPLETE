'use client';
import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { Dialog, Transition } from '@headlessui/react';
import Otp from './Otp';
import InputLogin from './InputLogin';

const RenderAuthComponent = ({ isPhoneNumberPassed, dataPhoneNumber }) => {
  if (isPhoneNumberPassed) {
    return (
      <>
        <Dialog.Title
          as='h3'
          className='text-lg font-medium leading-6 text-gray-900 text-center'
        >
          Mobile Sign In{' '}
        </Dialog.Title>
        <Dialog.Title
          as='h3'
          className='text-sm font-medium leading-6 text-gray-900 mt-6'
        >
          Sign in to {dataPhoneNumber?.phoneNumber}
        </Dialog.Title>
        <Otp />
      </>
    );
  } else {
    return (
      <>
        <Dialog.Title
          as='h3'
          className='text-lg font-medium leading-6 text-gray-900'
        >
          Welcome !
        </Dialog.Title>
        <Dialog.Title
          as='h3'
          className='text-sm font-medium leading-6 text-gray-900 mt-3'
        >
          To Login or Register, please enter your Phone number.
        </Dialog.Title>
        <InputLogin />
      </>
    );
  }
};

export default function Popup() {
  const isPhoneNumberPassed = useSelector(
    (state) => state.dataUser.phoneNumberIsValid
  );
  const dataPhoneNumber = useSelector(
    (state) => state.dataUser.dataPhoneNumber
  );

  const [isOpen, setIsOpen] = useState(true);

  return (
    <Fragment>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-10'
          onClose={() => setIsOpen(false)}
        >
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
                  <RenderAuthComponent
                    dataPhoneNumber={dataPhoneNumber}
                    isPhoneNumberPassed={isPhoneNumberPassed}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </Fragment>
  );
}
