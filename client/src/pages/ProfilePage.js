import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import DefaultPicture from '../assets/images/dog.png';
import {
  Page,
  Header,
  Section,
  Media,
} from '../components';

const GET_MYSELF_QUERY = gql`
  query GetMyself {
    me {
      id
      email
      trips {
        id
        isBooked
        rocket {
          id
          name
        }
        mission {
          name
          missionPatch
        }
      }
    }
  }
`;

function ProfilePage() {
  return (
    <Page>
      <Header title="Profile" icon="👽" />
      <Query query={GET_MYSELF_QUERY}>
        {
          ({ data, loading, error }) => {
            if (loading) return <div>Loading...</div>
            if (error) return <div>Error...</div>

            return (
              <Fragment>
                <Section title="Explorer Information">
                  <Media image={DefaultPicture}>
                    {data.me.email}
                  </Media>
                </Section>
                <Section title="Booked Trips">
                  {data.me.trips && data.me.trips.length
                    ? data.me.trips.map(trip =>
                      <div>
                        <div>{trip.date}</div>
                        <div>{trip.mission.name}</div>
                        <div>{trip.rocket.name}</div>
                      </div>
                    ) : (
                      <div>No booked trips yet...</div>
                    )
                  }
                </Section>
              </Fragment>
            );
          }
        }
      </Query>
    </Page>
  );
}

export default ProfilePage;
