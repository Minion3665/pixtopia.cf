// show object spread works, i.e. babel works
const obj = {
  foo: 'bar'
};
export function handler(event, context, callback) {
  console.log("motd:"... build.environment.motd);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: build.environment.motd, ...obj })
  });
}
