import nc from 'next-connect'
import { getAllEmployees, saveEmployees } from '../../../controller/employee/employee';

const handler = nc();
handler.get(getAllEmployees);
handler.post(saveEmployees);
export default handler;