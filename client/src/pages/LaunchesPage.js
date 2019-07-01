import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import {
  Page,
  Header,
  Board,
  LaunchTile,
  Button,
} from '../components';

const GET_LAUNCHES_QUERY = gql`
  query GetLaunches($after: String) {
    launches(after: $after) {
      cursor
      hasMore
      launches {
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

class LaunchesPage extends Component {
  render() {
    return (
      <Page>
        <Header title="Launches" icon="🚀" />
        <Query query={GET_LAUNCHES_QUERY}>
          {
            ({ data, loading, error, fetchMore }) => {
              if (loading) return <div>Loading...</div>;
              if (error) return <div>Error...</div>;

              return (
                <Fragment>
                  <Board>
                    {
                      data.launches &&
                      data.launches.launches &&
                      data.launches.launches.map(launch => (
                        <Board.Item key={launch.id}>
                          <LaunchTile launch={launch} />
                        </Board.Item>
                      ))
                    }
                  </Board>
                  {
                    data.launches &&
                    data.launches.hasMore && (
                      <Button
                        onClick={() => fetchMore({
                          variables: {
                            after: data.launches.cursor,
                          },
                          updateQuery: (prev, { fetchMoreResult, ...rest }) => {
                            if (!fetchMoreResult) {
                              return prev;
                            }
                            return {
                              ...fetchMoreResult,
                              launches: {
                                ...fetchMoreResult.launches,
                                launches: [
                                  ...prev.launches.launches,
                                  ...fetchMoreResult.launches.launches,
                                ],
                              },
                            };
                          },
                        })}
                      >
                        Load More
                      </Button>
                    )
                  }
                </Fragment>
              );
            }
          }
        </Query>
      </Page>
    );
  }
}

export default LaunchesPage;
