const obj = {
  foo: 'bar'
};
export function handler(event, context, callback) {
  console.log(global.build.environment.motd);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: global.build.environment.motd, ...obj })
  });
}
