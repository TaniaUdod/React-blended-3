import { Grid, GridItem } from 'components';
import { Link, useLocation } from 'react-router-dom';

export const CountryList = ({ countries }) => {
  const location = useLocation();
  return (
    <Grid>
      {countries.map(country => (
        <GridItem key={country.id}>
          <Link state={{ from: location }} to={`/country/${country.id}`}>
            <img src={country.flag} alt={country.name} />
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};
