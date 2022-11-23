export const coinFormatter = (num) => {return Intl.NumberFormat('nl-NL', {
  style: "currency",
  currency: 'EUR',
}).format(num);
};