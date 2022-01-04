export const Total = ({ course }) => {
  const total = Object.values(course.parts).reduce(
    (previousValue, { exercises }) => previousValue + exercises,
    0
  );

  return (
    <>
      <p>Number of exercises {total}</p>
    </>
  );
};
