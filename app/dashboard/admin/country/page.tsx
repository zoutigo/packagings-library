'use client';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { CountryForm } from '../_components/country-forrm';
import { CountryList } from '../_components/country-list';

type Props = {};

const CountryPage = (props: Props) => {
  const searchParams = useSearchParams();
  const action = searchParams.get('action');

  return (
    <div>
      {!action && <CountryList />}
      {action === 'create' && <CountryForm />}
    </div>
  );
};

export default CountryPage;
