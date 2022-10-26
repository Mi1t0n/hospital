const toLocal = (value: string | number) =>
    Number(value).toLocaleString('en-US', {style: 'currency', currency: 'USD'})
export default toLocal