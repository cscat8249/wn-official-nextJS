import { excuteQuery } from '../../config/db';

const getAllEmployees = async (req, res) => {
    try {
        let employeeData = await excuteQuery('SELECT * FROM menu_tb', []);
        res.send(employeeData);
    } catch (err) {
        res.status(500).json(err);
    }
};

const getElementByDivision = async (req,res) => {
    let division = req.query.division
    try {
        let employeeData = await excuteQuery(`select * from menu_tb where division = '${division}'`,[]);
        res.status(200).json(employeeData);
        
    } catch (err) {
        res.status(500).json(err);
    }
};

const deleteElementById = async (req, res) =>{
    let id = req.query.id;
    try {
        let employeeData = await excuteQuery(`delete from menu_tb where id = '${id}'`,[id]);
        res.status(200).json(employeeData);
    } catch (err) {
        res.status(500).json(err);
    }
}

const saveEmployees = async(req, res) => {
    // console.log(req.body);
    let emp_menuNm = req.body.menu_nm;
    let emp_division = req.body.division;
    let emp_img = req.body.img;
    let emp_link = req.body.link;
    try {
        let employeeData = await excuteQuery(`insert into menu_tb(menu_nm,division,img,link) values(?,?,?,?)`,[emp_menuNm,emp_division,emp_img,emp_link])
        employeeData = await excuteQuery(`select * from menu_tb where id=${employeeData.insetId}`);
        res.status(201).json(employeeData);
    } catch (err) {
        res.status(400).json(err);
    }
};

const updateEmployees = async(req, res) => {
    let id = req.query.id;
    const { menu_nm, division, img, link } = req.body;
    try {
        let employeeData = await excuteQuery(`select * from menu_tb where id=?`,[id])
        if(employeeData.length > 0) {
            employeeData = await excuteQuery(`update menu_tb set menu_nm=?,division=?,img=?,link=? where id=?`,[menu_nm,division,img,link,id]);
            res.status(200).json(employeeData);
        } else {
            res.status(400).json(`menu item not found on this id=${id}`);
        }
    } catch (err) {
        res.status(400).json(err);
    }

}

export { getAllEmployees, getElementByDivision, deleteElementById, saveEmployees, updateEmployees };