const obj = {
  foo: 'bar'
};
export function handler(event, context, callback) {
  console.log(build.environment.motd);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: build.environment.motd, ...obj })
  });
}
