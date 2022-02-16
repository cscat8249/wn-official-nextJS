import nc from 'next-connect'
import { getElementByDivision } from '../../../controller/employee/employee';

const handler = nc();
handler.get( getElementByDivision) ;
export default handler; 