// eslint-disable-next-line import/no-anonymous-default-export
export default async (_, res) => {
  const POSTAL_CODE = '10472';
  const COUNTRY = 'US';
  const API_KEY = process.env.NEXT_PUBLIC_EARTH_API;
  const response = await fetch(
    `http://api.earth911.com/earth911.getPostalData?${API_KEY}${COUNTRY}${POSTAL_CODE}`
  );
  const data = await response.json();

  // eslint-disable-next-line no-console
  console.log(data);
  res.json(data);
  return res.status(200).json({ data });
};
