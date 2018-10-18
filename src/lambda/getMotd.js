const obj = {
  foo: 'bar'
};
export function handler(event, context, callback) {
  console.log(process.env.motd);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: process.env.motd, ...obj })
  });
}
 