// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import excuteQuery from '../../db';

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

// export default function handler() {
//   try {
//     const result = excuteQuery({
//         query: 'SELECT * FROM menu_tb WHERE division = ?',
//     });
//     return result[0];
//   } catch (error) {
//     console.log(error);
//   }
// }

// export async function findUser({ email }) {
//   try {
//       const result = await excuteQuery({
//           query: 'SELECT * FROM menu_tb WHERE division = ?',
//           values: [ email ],
//       });
//       return result[0];
//   } catch (error) {
//       console.log(error);
//   }
// }