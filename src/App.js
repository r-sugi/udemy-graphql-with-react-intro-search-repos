import React from 'react';
import { ApolloProvider } from 'react-apollo'
import client from './client'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const ME = gql`
  query me {
    user(login: "r-sugi") {
      name
      avatarUrl
    }
  }
`

function App() {
  return (
    <ApolloProvider client={client}>
      <div>hello GraphQL</div>
      <Query query={ME}>
        {
          ({ loading, error, data}) => {
            if (loading) return 'Loading...'
            if (error) return `Error! ${error.message}`

            return <div>{data.user.name}</div>
          }
        }
      </Query>
    </ApolloProvider>
  );
}

export default App;
