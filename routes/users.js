//name of the file is the routes 
import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { createuser ,findtheuser,deleteuser,patchuser} from '../controllers/user.js';

const router = express.Router();




//all path here starts with /user
router.get('/', (req, res) => {
    res.send(users);
});


router.post('/', createuser);



router.get('/:id', findtheuser);


router.delete('/:id',deleteuser)

router.patch('/:id',patchuser)


export default router;