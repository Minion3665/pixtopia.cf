const obj = {
  foo: 'bar'
};
export function handler(event, context, callback) {
  console.log(environment.motd);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: environment.motd, ...obj })
  });
}
