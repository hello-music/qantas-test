import { mockServer, MockList } from 'graphql-tools';
import { formatError } from 'graphql';
import constants from 'config/constants'

const { mockCarOfTheWeek, mockMakes, mockModels } = constants;

const shorthand = `
  type Make {
    id: ID!
    name: String
  }

  type Model {
    id: ID!
    name: String
    makeId: String
    price: Float,
    imageUrl: String
  }

  type CarOfTheWeek {
    modelId: String
    review: String
  }

  type RootQuery {
    makes: [Make],
    models: [Model],
    carOfTheWeek: CarOfTheWeek
  }

  schema {
    query: RootQuery
  }
`;

const server = mockServer(shorthand, {
    RootQuery: () => ({
        makes: () => mockMakes,
        models: () => mockModels,
        carOfTheWeek: ()=> mockCarOfTheWeek,
    }),
});

function graphQLFetcher (graphQLParams) {
    let variables = {};
    try {
        variables = JSON.parse(graphQLParams.variables);
    } catch (e) {
        // do nothing
    }
    return server.query(
        graphQLParams.query,
        variables
    ).then((res) => {
        console.log(res);
        if (res.errors) {
            res.errors = res.errors.map(formatError)
        }
        return res;
    });
}

const query = `{
                carOfTheWeek {
                    modelId,
                    review
                },
                makes {
                    id,
                    name
                },
                models {
                    id,
                    makeId,
                    name,
                    price,
                    imageUrl
                }
            }`;

const api = {
    fetchInitData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(
                    graphQLFetcher({
                        query: query
                    })
                );
            }, 500);
        });
    },
};

export default api;
