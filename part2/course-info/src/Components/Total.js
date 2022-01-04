export const Total = ({ parts }) => {
  const total = Object.values(parts).reduce(
    (previousValue, { exercises }) => previousValue + exercises,
    0
  );

  return (
    <>
      <h3>Number of exercises {total}</h3>
    </>
  );
};
