import nc from 'next-connect'
import { deleteElementById, updateEmployees } from '../../../controller/employee/employee';

const handler = nc();
handler.delete(deleteElementById);
handler.put(updateEmployees);
export default handler;