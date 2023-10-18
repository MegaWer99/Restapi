const {Router} = require ('express');
const router = Router();

const { UserGet, CreateUser, UserById, DeleteUser, UpdateUser } = require("../controllers/index.controller")

router.get('/users',UserGet);
router.get('/users/:id',UserById);
router.post('/create', CreateUser);
router.put('/update/:id', UpdateUser);
router.get('/delete/:id',DeleteUser);

module.exports = router;