import { Section, Container, CountryInfo, Loader } from 'components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const [country, setCountry] = useState(null);
  const { countryId } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchCountry(countryId).then(setCountry).finally(setLoading(false));
  }, [countryId]);
  return (
    <Section>
      {loading && <Loader />}
      <Container>{country && <CountryInfo {...country} />}</Container>
    </Section>
  );
};
