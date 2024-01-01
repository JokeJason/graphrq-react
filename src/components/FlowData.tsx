import { gql, useQuery } from '@apollo/client';

const GET_REQUIREMENTS = gql(`
  query Requirements {
    requirements {
      id
      title
      description
    }
  }
`);

const FlowData = () => {
  const { loading, error, data } = useQuery(GET_REQUIREMENTS);

  if (loading) return <p> Loading... </p>;
  if (error) return <p>Error: {error.message}</p>;

  return data.requirements.map(
    ({
      id,
      title,
      description,
    }: {
      id: string;
      title: string;
      description: string;
    }) => (
      <div key={id}>
        <p>
          {title}: {description}
        </p>
      </div>
    ),
  );
};

export default FlowData;
