import PageTitle from '../../components/PageTitle/PageTitle';

export default function HomePage() {
  return (
    <div>
      <PageTitle>
        Contact manager welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </PageTitle>
      <p>
        Welcome to the Contact Manager! Manage your contacts efficiently and
        effortlessly.
      </p>
    </div>
  );
}
