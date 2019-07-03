import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import {
  Page,
  Header,
  Section,
  Gallery,
} from '../components';

const GET_LAUNCH_DETAILS_QUERY = gql`
  query GetLaunchDetails($launchId: ID!) {
    launch(launchId: $launchId) {
      id
      date
      details
      images
      site
      isBooked
      rocket {
        id
        name
        type
      }
      mission {
        name
        missionPatch
      }
    }
  }
`;

function LaunchDetailsPage({ match }) {
  return (
    <Page>
      <Query
        query={GET_LAUNCH_DETAILS_QUERY}
        variables={{ launchId: match.params.id }}
      >
        {({ data, loading, error }) => {
          if (loading) return <div>Loading...</div>;
          if (error) return <div>Error: {error.message}</div>;

          return (
            <Fragment>
              <Header
                title={data.launch.mission.name}
                image={data.launch.mission.missionPatch}
              />
              <Section title="Mission details">
                <p>{data.launch.details}</p>
              </Section>
              {data.launch.images && (
                <Section title="Gallery">
                  <Gallery>
                    {data.launch.images.map((image, index) => (
                      <Gallery.Image key={index} image={image} />
                    ))}
                  </Gallery>
                </Section>
              )}
            </Fragment>
          );
        }}
      </Query>
    </Page>
  );
}

export default LaunchDetailsPage;
