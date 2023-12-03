import { Section, Container, CountryInfo, Loader } from 'components';
import { GoBack } from 'components/GoBack/GoBack';
import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const [country, setCountry] = useState(null);
  const { countryId } = useParams();
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    fetchCountry(countryId).then(setCountry).finally(setLoading(false));
  }, [countryId]);
  return (
    <Section>
      <GoBack url={location.state?.from || '/'} />
      {loading && <Loader />}
      <Container>{country && <CountryInfo {...country} />}</Container>
    </Section>
  );
};
