import {
  Container,
  SearchForm,
  Section,
  Loader,
  CountryList,
} from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const region = searchParams.get('query');
    if (!region) return;

    fetchByRegion(region).then(setCountries).finally(setLoading(false));
  }, [searchParams]);

  const onSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onSubmit} />
        {loading && <Loader />}
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
